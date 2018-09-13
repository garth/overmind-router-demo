import { Action } from 'overmind'

export const notFoundRouted: Action = action => action().mutate(state => (state.router.page = 'notFound'))
