const thumbnailFromVideoConstants = {
    YOUTUBE_BIG_THUMBNAIL: (videoId) => (`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`),
    YOUTUBE_MEDIUM_THUMBNAIL: (videoId) => (`https://img.youtube.com/vi/${videoId}/sddefault.jpg`),
    YOUTUBE_SMALL_THUMBNAIL: (videoId) => (`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`),
    // if we want get thumbnail and youtube respons error
    // we get default thumbnail with this sizes
    DEFAULT_THUMBNAIL_SIZE_YOUTUBE_WIDTH: 120,
    DEFAULT_THUMBNAIL_SIZE_YOUTUBE_HEIGHT: 90,

    VIMEO_GET_THUMBNAIL_ID: (vimeoVideoId) => (`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoVideoId}`),
    VIMEO_GET_THUMBNAIL: (imageId) => (`https://i.vimeocdn.com/video/${imageId}.jpg`)
}

export default thumbnailFromVideoConstants
