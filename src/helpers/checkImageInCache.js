const checkImageInCache = (src) => {
    const image = new Image()
    image.src = src

    return image.complete
}

export default checkImageInCache
