import C from '@/app/constants'

export const setMainImage = (data) => ({
    type: C.CHANGE_MAIN_IMAGE,
    date: data.date,
    url: data.url,
    mediaType: data.mediaType
})

export const loadImageToImageCatalog = () => ({
    type: C.LOAD_IMAGE_TO_IMAGE_CATALOG
})
