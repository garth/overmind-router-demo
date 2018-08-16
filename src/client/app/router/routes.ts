import { homeRouted } from '../home/actions/homeRouted'
import { notFoundRouted } from '../home/actions/notFoundRouted'
import { personRouted } from '../people/actions/personRouted'

export type RouteTypes = {
  homeRouted: ReturnType<typeof homeRouted>
  personRouted: ReturnType<typeof personRouted>
  notFoundRouted: ReturnType<typeof notFoundRouted>
}

export const routes = (route): RouteTypes => ({
  homeRouted: route('/', homeRouted),
  personRouted: route('/person/:personId', personRouted),
  notFoundRouted: route('/*', notFoundRouted)
})
