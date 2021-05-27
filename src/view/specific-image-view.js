import { html } from 'htm/preact';
import { useState } from 'preact/hooks';
var wrapper = require('../../wrapper')

module.exports = function createSpecificImageView (index) {
    return function (props) {
        var [imgData, setImg] = useState({
            img: null,
            err: null,
            hasFetched: false
        })

        if (!imgData.hasFetched) {
            wrapper.byIndex(index)
                .then(res => {
                    setImg({
                        img: res.images.base64,
                        err: null,
                        hasFetched: true
                    })
                })
                .catch(err => {
                    setImg({
                        img: null,
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

        return html`<div class="specific-image">
            <img src="${imgData.img}" />
        </div>`
    }
}

