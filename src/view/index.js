import { html } from 'htm/preact';
import { useState, useEffect } from 'preact/hooks';
var wrapper = require('../../wrapper')
var S = require('pull-stream')


function indexView (props) {
    var [interval, setMyInterval] = useState(3000)
    const [img, setImg] = useState(null);

    // when the component mounts, do this
    useEffect(() => {
        var s = wrapper.createStream()
        var i = 0

        S(
            s,
            S.drain(function onEvent (ev) {
                console.log('image here', ev)
                console.log('image here', !!ev.images.base64)
                setImg(ev)
            })
        )

        console.log('interval', interval)

        var id = setInterval(() => {
            s.push(i++)
            console.log('i', i)
        }, interval)

        // return () => {
        //     clearInterval(id)
        // }
    }, [])

    return html`<div class="index">
        a slideshow here
    </div>`
}

module.exports = indexView

