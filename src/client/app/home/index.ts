import { Action } from '../'
import { homeRouted } from './actions/homeRouted'
import { notFoundRouted } from './actions/notFoundRouted'

type HomeActions = (
  action: Action
) => {
  homeRouted: ReturnType<typeof homeRouted>
  notFoundRouted: ReturnType<typeof notFoundRouted>
}

export const actions: HomeActions = action => ({
  homeRouted: homeRouted(action),
  notFoundRouted: notFoundRouted(action)
})
