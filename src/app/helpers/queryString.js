import C from '@/app/constants'

const queryString = (date = '', startDate = '', endDate = '') => {
    const keyString = `${C.NASA_API_KEY_STRING}=${C.NASA_API_KEY}`
    const dateString = date ? `&${C.NASA_TARGET_DATE_STRING}=${date}` : ''
    const startEndDate = startDate && endDate
        ? `&${C.NASA_START_DATE_STRING}=${startDate}&${C.NASA_END_DATE_STRING}=${endDate}`
        : ''

    return (
        `${C.NASA_QUERY}?${keyString}${dateString}${startEndDate}`
    )
}

export default queryString
