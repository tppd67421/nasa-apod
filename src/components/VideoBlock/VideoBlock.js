import React, { useState, useEffect, useContext, useRef } from 'react'
import ErrorComponent from './../ErrorComponent/ErrorComponent'
import { MainImageDataContext } from '@/helpers/context'
import checkImageInCache from '@/helpers/checkImageInCache'
import checkTodayDate from '@/helpers/checkTodayDate'
import removeParentClass from '@/helpers/removeParentClass'
import C from '@/constants/appConstants'
import TC from '@/constants/thumbnailFromVideoConstants'
import './VideoBlock.scss'

const VideoBlock = ({
    modalWindowShowed,
    setStateForModalWindow,
    setTitleForModalWindow,
    setMainDataForModalWindow,
    setDateForModalWindow,
    setExplanationForModalWindow,
    mainImage,
    todayImage,
    itemsFromImageCatalog,
    itemsCounterForPreloader,
    updateItemsCounterForPreloader
}) => {
    const data = useContext(MainImageDataContext)
    const imageWrap = useRef()

    const regExpVimeo = /(http|https)?:\/\/(www\.)?(vimeo.com\/|player.vimeo.com\/video\/)([0-9]+)/g
    const regExpYoutube = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/g

    const [videoThumbnail, setVideoThumbnail] = useState()
    const [stateErrorComponent, setStateErrorComponent] = useState(false)

    useEffect(() => {
        renderVideo()
    }, [mainImage])

    useEffect(() => {
        if (videoThumbnail) {
            if (checkImageInCache(videoThumbnail)) {
                imageWrap.current.classList.remove(C.CLASS_FOR_LOADED_ELEMENTS)
            } else {
                imageWrap.current.classList.add(C.CLASS_FOR_LOADED_ELEMENTS)
            }
        }
        return () => imageWrap.current.classList.remove(C.CLASS_FOR_LOADED_ELEMENTS)
    }, [videoThumbnail])

    const iframeCreator = (iframeLink) => (
        <div className={`modal-window__iframe-wrap ${C.CLASS_FOR_LOADED_ELEMENTS}`}>
            <iframe
                className='modal-window__main-data modal-window__main-data_video'
                src={iframeLink}
                onLoad={(e) => removeParentClass(e.target)}
            />
        </div>
    )

    const renderVideo = () => {
        if (data.url.match(regExpYoutube)) {
            const youtubeVideoId = data.url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop()
            getThumbnailFromYoutubeVideo(youtubeVideoId)
        } else if (data.url.match(regExpVimeo)) {
            const vimeoVideoId = data.url.match(/vimeo.*\/(\d+)/i).pop()
            getThumbnailFromVimeoVideo(vimeoVideoId)
        } else {
            setStateErrorComponent(true)
        }
    }

    const checkImagesWidth = (width, height) => {
        if (
            width !== TC.DEFAULT_THUMBNAIL_SIZE_YOUTUBE_WIDTH
            && height !== TC.DEFAULT_THUMBNAIL_SIZE_YOUTUBE_HEIGHT
        ) {
            return true
        } else {
            return false
        }
    }

    const getThumbnailFromYoutubeVideo = (videoId) => {
        const drawImageActualSize = () => {
            if (checkImagesWidth(
                bigThumbnail.naturalWidth,
                bigThumbnail.naturalHeight
            )) {
                setVideoThumbnail(bigThumbnail.src)
            } else {
                setStateErrorComponent(true)
            }
        }

        const bigThumbnail = new Image()

        switch (data.itemCounter) {
            case C.MAIN_IMAGE_ATTRIBUTE:
                new Promise((resolve) => {
                    bigThumbnail.src = TC.YOUTUBE_BIG_THUMBNAIL(videoId)
                    bigThumbnail.onload = () => {
                        if (checkImagesWidth(
                            bigThumbnail.naturalWidth,
                            bigThumbnail.naturalHeight
                        )) {
                            setVideoThumbnail(bigThumbnail.src)
                        } else {
                            resolve()
                        }
                    }
                }).then(() => {
                    return new Promise((resolve) => {
                        bigThumbnail.src = TC.YOUTUBE_MEDIUM_THUMBNAIL(videoId)
                        bigThumbnail.onload = () => {
                            if (checkImagesWidth(
                                bigThumbnail.naturalWidth,
                                bigThumbnail.naturalHeight
                            )) {
                                setVideoThumbnail(bigThumbnail.src)
                            } else {
                                resolve()
                            }
                        }
                    }).then(() => {
                        bigThumbnail.src = TC.YOUTUBE_SMALL_THUMBNAIL(videoId)
                        bigThumbnail.onload = () => {
                            if (checkImagesWidth(
                                bigThumbnail.naturalWidth,
                                bigThumbnail.naturalHeight
                            )) {
                                setVideoThumbnail(bigThumbnail.src)
                            } else {
                                setStateErrorComponent(true)
                            }
                        }
                    })
                })
                break

            default:
                bigThumbnail.src = TC.YOUTUBE_SMALL_THUMBNAIL(videoId)
                bigThumbnail.onload = drawImageActualSize
                break
        }
    }

    const getThumbnailFromVimeoVideo = async (vimeoVideoId) => {
        await fetch(TC.VIMEO_GET_THUMBNAIL_ID(vimeoVideoId))
            .then(res => res.json())
            .then(res => res.thumbnail_url.match(/vimeo.*\/(\d+)/i).pop())
            .then(res => setVideoThumbnail(TC.VIMEO_GET_THUMBNAIL(res)))
    }

    const changeStateForModalWindow = (attribute) => {
        switch (attribute) {
            case C.MAIN_IMAGE_ATTRIBUTE:
                if (checkTodayDate(mainImage.date)) {
                    setTitleForModalWindow(todayImage.title)
                    setMainDataForModalWindow(iframeCreator(todayImage.url))
                    setExplanationForModalWindow(todayImage.explanation)
                    setDateForModalWindow(todayImage.date)
                } else {
                    setTitleForModalWindow(mainImage.title)
                    setMainDataForModalWindow(iframeCreator(mainImage.url))
                    setExplanationForModalWindow(mainImage.explanation)
                    setDateForModalWindow(mainImage.date)
                }
                break

            default:
                const targetItem = itemsFromImageCatalog[String(attribute)]
                setTitleForModalWindow(targetItem.title)
                setMainDataForModalWindow(iframeCreator(targetItem.url))
                setExplanationForModalWindow(targetItem.explanation)
                setDateForModalWindow(targetItem.date)
                break
        }
    }

    const changeModalWindow = () => {
        if (!modalWindowShowed) {
            changeStateForModalWindow(data.itemCounter)
            setStateForModalWindow(true)
        }
    }

    const imageLoaded = () => {
        imageWrap.current.classList.remove(C.CLASS_FOR_LOADED_ELEMENTS)
        updateItemsCounterForPreloader(++itemsCounterForPreloader)
    }

    return (
        <>
            {
                stateErrorComponent
                    ? <ErrorComponent />
                    : <div
                        className={`${data.className}_video-wrap ${C.CLASS_FOR_LOADED_ELEMENTS}`}
                        ref={imageWrap}
                    >
                        <img
                            className={`${data.className} ${data.className}_video`}
                            data-item-counter={data.itemCounter}
                            onClick={() => changeModalWindow()}
                            src={videoThumbnail}
                            onLoad={() => imageLoaded()}
                        />
                    </div>
            }
        </>
    )
}

export default VideoBlock
