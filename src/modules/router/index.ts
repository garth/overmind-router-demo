import { route } from './route'
export { state } from './state'

import { homeRouted } from '../home/actions/homeRouted'
import { personRouted } from '../people/actions/personRouted'
import { notFoundRouted } from '../../actions/notFoundRouted'

export const actions = {
  homeRouted: route('/', homeRouted),
  personRouted: route('/person/:personId', personRouted),
  notFoundRouted: route('/*', notFoundRouted)
}
