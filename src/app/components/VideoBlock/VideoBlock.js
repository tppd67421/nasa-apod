import React, { useState, useEffect, useContext } from 'react'
import ErrorComponent from './../ErrorComponent/ErrorComponent'
import { MainImageDataContext } from '@/app/helpers/context'
import checkTodayDate from '@/app/helpers/checkTodayDate'
import C from '@/app/constants/appConstants'
import TC from '@/app/constants/thumbnailFromVideoConstants'

const VideoBlock = ({
    modalWindowShowed,
    setStateForModalWindow,
    setTitleForModalWindow,
    setMainDataForModalWindow,
    setDateForModalWindow,
    setExplanationForModalWindow,
    mainImage,
    todayImage,
    itemsFromImageCatalog
}) => {
    const data = useContext(MainImageDataContext)

    const regExpVimeo = /(http|https)?:\/\/(www\.)?(vimeo.com\/|player.vimeo.com\/video\/)([0-9]+)/g
    const regExpYoutube = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/g

    const [videoThumbnail, setVideoThumbnail] = useState()
    const [stateErrorComponent, setStateErrorComponent] = useState(false)

    useEffect(() => {
        renderVideo()
    }, [mainImage])

    const iframeCreator = (iframeLink) => (
        <iframe
            className='modal-window__main-data modal-window__main-data_video'
            src={iframeLink}
        />
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
        await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoVideoId}`)
            .then(res => res.json())
            .then(res => res.thumbnail_url.match(/vimeo.*\/(\d+)/i).pop())
            .then(res => setVideoThumbnail(`https://i.vimeocdn.com/video/${res}.jpg`))
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

    return (
        <>
            {
                stateErrorComponent
                    ? <ErrorComponent />
                    : <div className={`${data.className}_video-wrap`}>
                        <img
                            className={`${data.className} ${data.className}_video`}
                            data-item-counter={data.itemCounter}
                            onClick={() => changeModalWindow()}
                            src={videoThumbnail}
                        />
                    </div>
            }
        </>
    )
}

export default VideoBlock
