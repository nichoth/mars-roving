var API_URL = 'https://hiring.hypercore-protocol.org/termrover'
var fetch = require('isomorphic-fetch')

var wrapper = {
    // get the laterst image
    latest: function () {
        return fetch(API_URL)
            .then(res => {
                console.log('res', res)
            })
    },

    // smaller indexes on the `/termrover/:index` endpoint are
    // considered earlier
    createStream: function () {
    }
}

module.exports = wrapper

