import { html } from 'htm/preact';
import { useState } from 'preact/hooks';
var wrapper = require('../../wrapper')

module.exports = function createSpecificImageView (index) {
    return function (props) {
        var [imgData, setImg] = useState({
            img: null,
            err: null,
            metadata: null,
            hasFetched: false
        })

        if (!imgData.hasFetched) {
            wrapper.byIndex(index)
                .then(res => {
                    console.log('ressss', res)
                    setImg({
                        img: res.images.base64,
                        metadata: res.metadata,
                        err: null,
                        hasFetched: true
                    })
                })
                .catch(err => {
                    setImg({
                        img: null,
                        metadata: null,
                        err: err,
                        hasFetched: true
                    })
                })
        }

        if (!imgData.hasFetched) return null

        if (imgData.err) {
            return html`<div class="specific-image error">
                ${img.err.toString()}
            </div>`
        }

        console.log('img data', imgData)

        return html`<div class="specific-image">

            <h1>mars roving</h1>

            <ul class="metadata">
                <li>sol -- ${imgData.metadata.sol}</li>
                <li>earth date -- ${imgData.metadata.earth_date}</li>
            </ul>
            <img src="${imgData.img}" />
        </div>`
    }
}

