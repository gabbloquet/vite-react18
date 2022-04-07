import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { App } from './App'

export const render = (url: string, context: object) => {
	return ReactDOMServer.renderToString(
		<StaticRouter location={url} context={context}>
			<App />
		</StaticRouter>
	)
}
