const nned = (arr) => {
    return arr
        .filter(item => Number.isInteger(item))
        .map(String)
}

module.exports = nned;