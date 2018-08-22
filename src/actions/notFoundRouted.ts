import { Action } from '../app'

export const notFoundRouted: Action = action => action().mutation(state => (state.router.page = 'notFound'))
