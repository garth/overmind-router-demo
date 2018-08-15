import app from '../'

export type RouteTypes = {
  homeRouted: typeof app.actions.home.homeRouted
  personRouted: typeof app.actions.people.personRouted
  notFoundRouted: typeof app.actions.home.notFoundRouted
}

export const routes = (route): RouteTypes => ({
  homeRouted: route('/', () => app.actions.home.homeRouted()),
  personRouted: route('/person/:personId', params => app.actions.people.personRouted(params)),
  notFoundRouted: route('/*', () => app.actions.home.notFoundRouted())
})
