import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { ReactComponent as Icon } from './assets/pool.svg'
const svgText = ReactDOMServer.renderToString(<Icon />)

export default {
  // Any component should be ok as long as it's props respect className which is resizable by CSS
  icon: (props: any) => (
    <img src={`data:image/svg+xml;base64,${btoa(svgText)}`} {...props} />
  ),
  name: 'Pool',
  path: '/pool'
}
