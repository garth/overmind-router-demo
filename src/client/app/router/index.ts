import page from 'page'
import app, { Action } from '../'
import { RouteTypes, routes } from './routes'

export interface Route<Params = void> {
  (params?: Params): void
}

type Router = {
  state: { page: string }
  actions: (action: Action) => RouteTypes
}

export const router: Router = {
  state: { page: '' },
  actions: action =>
    routes(<Params>(url: string, routeAction: Route<Params>) => {
      page(url, ({ params }) => routeAction(params))
      return action<Params>().map(({ state }, params) => {
        const urlWithReplacedParams = Object.keys(params || {}).reduce((currentUrl, param) => {
          return currentUrl.replace(`:${param}`, params[param])
        }, url)
        page.show(urlWithReplacedParams)
      })
    })
}

setTimeout(() => page.start(), 0)
