import { route, onInitialize } from './route'
export { onInitialize }
export { state } from './state'

import { homeRouted } from '../home/actions'
import { personRouted } from '../people/actions'
import { notFoundRouted } from '../../actions'

export const actions = {
  homeRouted: route('/', homeRouted),
  personRouted: route('/person/:personId', personRouted),
  notFoundRouted: route('/*', notFoundRouted)
}
