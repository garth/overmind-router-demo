import page from 'page'

export const route = <T extends Function>(url: string, routeAction: T) => action => {
  page(url, ({ params }) => routeAction(action)(params))
  return action().map((_, params) => {
    const urlWithReplacedParams = Object.keys(params || {}).reduce((currentUrl, param) => {
      return currentUrl.replace(`:${param}`, params[param])
    }, url)
    page.show(urlWithReplacedParams)
  })
}

setTimeout(() => page.start(), 0)
