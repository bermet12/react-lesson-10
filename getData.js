const axios = require('axios');
const nned = require('./nnedFunc')

const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    const userId = response.data.map(user => user.id);
    return nned(userId)
}

module.exports = getData;