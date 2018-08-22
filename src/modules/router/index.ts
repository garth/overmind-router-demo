import { route } from './route'
export { state } from './state'

import { homeRouted } from '../home/actions/homeRouted'
import { personRouted } from '../people/actions/personRouted'
import { notFoundRouted } from '../../actions/notFoundRouted'

type Actions = {
  homeRouted: typeof homeRouted
  personRouted: typeof personRouted
  notFoundRouted: typeof notFoundRouted
}

export const actions: Actions = {
  homeRouted: route('/', homeRouted),
  personRouted: route('/person/:personId', personRouted),
  notFoundRouted: route('/*', notFoundRouted)
}