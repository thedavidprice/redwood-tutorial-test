import ReactDOM from 'react-dom'

import App from './index'

if (document.getElementById('redwood-app').hasChildNodes()) {
  ReactDOM.hydrate(<App />, document.getElementById('redwood-app'))
} else {
  ReactDOM.render(<App />, document.getElementById('redwood-app'))
}
