import page from 'page'

type ActionBase = (action: Function) => any

export const route = <T extends ActionBase>(url: string, routeAction: T): T =>
  (action => {
    const execRouteAction = routeAction(action)
    execRouteAction['displayName'] = `${url} routed`
    page(url, ({ params }) => execRouteAction(params))
    return action().map((_, params) => {
      const urlWithReplacedParams = Object.keys(params || {}).reduce((currentUrl, param) => {
        return currentUrl.replace(`:${param}`, params[param])
      }, url)
      page.show(urlWithReplacedParams)
    })
  }) as T

setTimeout(() => page.start(), 0)
