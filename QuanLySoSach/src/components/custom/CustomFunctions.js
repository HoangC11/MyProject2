
const formatNowDate = () => {
    let d = new Date()
    let day = ('0' + d.getDate()).substr(-2)
    let month = ('0' + (d.getMonth() + 1)).substr(-2)
    let year = d.getFullYear()

    return day + '/' + month + '/' + year
}

export { formatNowDate }