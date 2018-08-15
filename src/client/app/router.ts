import page from 'page'
import app, { Action } from './'

type Router = (
  namespace: string
) => {
  state: { page: string }
  actions: (
    action: Action
  ) => {
    home: typeof app.actions.home.homeRouted
    person: typeof app.actions.people.personRouted
  }
}

export interface Route<Params = void> {
  (params?: Params): void
}

export const router: Router = namespace => {
  console.log('router init', namespace)

  return {
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
        home: route('/', (() => app.actions.home.homeRouted()) as typeof app.actions.home.homeRouted),
        person: route('/person/:personId', (params =>
          app.actions.people.personRouted(params)) as typeof app.actions.people.personRouted)
      }
    }
  }
}

setTimeout(() => page.start(), 0)
