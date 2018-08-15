import page from 'page'
import app, { Action } from './'

type Router = {
  state: { page: string }
  actions: (
    action: Action
  ) => {
    homeRouted: typeof app.actions.home.homeRouted
    personRouted: typeof app.actions.people.personRouted
  }
}

export interface Route<Params = void> {
  (params?: Params): void
}

export const router: Router = {
  state: { page: 'home' },
  actions: action => {
    const route = <Params>(url: string, routeAction: Route<Params>) => {
      page(url, ({ params }) => routeAction(params as Params))
      return action<Params>().map(({ state }, params) => {
        const urlWithReplacedParams = Object.keys(params || {}).reduce((currentUrl, param) => {
          return currentUrl.replace(`:${param}`, params[param])
        }, url)
        page.show(urlWithReplacedParams)
      })
    }

    return {
      homeRouted: route('/', (() => app.actions.home.homeRouted()) as typeof app.actions.home.homeRouted),
      personRouted: route('/person/:personId', (params =>
        app.actions.people.personRouted(params)) as typeof app.actions.people.personRouted)
    }
  }
}

setTimeout(() => page.start(), 0)
