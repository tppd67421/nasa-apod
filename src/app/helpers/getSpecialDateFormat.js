const getSpecialDateFormat = (date = new Date()) => {
    const monthIncrement = date.getMonth() + 1
    const month = monthIncrement < 10 ? `0${monthIncrement}` : monthIncrement
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    
    return `${date.getFullYear()}-${month}-${day}`
}

export default getSpecialDateFormat
