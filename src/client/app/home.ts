import { Action } from './'
import { Route } from './router'

type Home = {
  actions: (
    action: Action
  ) => {
    homeRouted: Route
  }
}

export const home: Home = {
  actions: (action: Action) => ({
    homeRouted: action().mutation(state => (state.router.page = 'home'))
  })
}
