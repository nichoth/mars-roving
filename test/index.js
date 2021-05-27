var test = require('tape')
var wrapper = require('../wrapper')
var S = require('pull-stream')

test('`latest` method', function (t) {
    t.plan(3)
    wrapper.latest()
        .then(({ metadata, images }) => {
            t.ok(metadata, 'should return metadata')
            t.ok(images.base64, 'should return base64 image')
            t.ok(images.ascii, 'should return ascii image')
        })
        .catch(err => t.error(err))
})

test('`createStream` method', function (t) {
    var s = wrapper.createStream()
    t.plan(8)  // 2*3 + 2

    S(
        s,
        S.take(3),
        S.drain(function onData (data) {
            t.ok(data.images, 'should have images')
            t.ok(data.metadata, 'should have metadata')
        }, function onEnd (err) {
            t.error(err)
            t.pass('stream should end')
        })
    )
})

// TODO
// test('create node stream', function (t) {
//     t.plan(1)
//     var s = wrapper.createNodeStream()
//     s.once('data', data => {
//         console.log('data', data)
//         t.pass('aaaaaa')
//     })

// })

