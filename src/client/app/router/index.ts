import page from 'page'
import { Action } from '../'
import { RouteTypes, routes } from './routes'

export interface Route<Params = void> {
  (params?: Params): void
}

type State = {
  page: string
}

export const state: State = {
  page: ''
}

type RouterActions = (action: Action) => RouteTypes
type RouterAction<Params = void> = (action: Action) => Route<Params>

export const actions: RouterActions = action =>
  routes(<Params>(url: string, routeAction: RouterAction<Params>) => {
    page(url, ({ params }) => routeAction(action)(params as Params))
    return action<Params>().map((_, params) => {
      const urlWithReplacedParams = Object.keys(params || {}).reduce((currentUrl, param) => {
        return currentUrl.replace(`:${param}`, params[param])
      }, url)
      page.show(urlWithReplacedParams)
    })
  })

setTimeout(() => page.start(), 0)
