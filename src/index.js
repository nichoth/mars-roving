var route = require('route-event')()
import { render } from 'preact';
import { html } from 'htm/preact';
var router = require('ruta3')();
var indexView = require('./view/index');
var SpecificImageView = require('./view/specific-image-view');

function Roving (props) {
    return html`<div class="roving">
        ${props.children}
    </div>`
}

router.addRoute('/', function indexRoute (match) {
    return { view: indexView }
})

router.addRoute('/:index', function ({ params }) {
    var { index } = params
    return { view: SpecificImageView(index) }
})

route(function onRoute (path) {
    var match = router.match(path)
    var { view } = match.action(match)
    render(html`<${Roving}><${view} /></${Roving}`,
        document.getElementById('content'))
})

