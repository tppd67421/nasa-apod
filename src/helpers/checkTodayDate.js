import C from '@/constants/appConstants'

const checkTodayDate = (date) => {
    if (date === C.TODAY) return true
    else return false
}

export default checkTodayDate
