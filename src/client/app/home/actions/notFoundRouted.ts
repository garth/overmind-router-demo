import { Action } from '../../'

export const notFoundRouted: Action = action => action().mutation(state => (state.router.page = 'notFound'))
