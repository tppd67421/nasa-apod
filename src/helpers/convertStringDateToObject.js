const convertStringDateToObject = (date) => (
    date.match(/(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/).groups
)

export default convertStringDateToObject
