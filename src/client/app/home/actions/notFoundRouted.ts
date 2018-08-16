import { Route } from '../../router'
import { Action } from '../../'

type NotFoundRouted = (action: Action) => Route

export const notFoundRouted: NotFoundRouted = action => action().mutation(state => (state.router.page = 'notFound'))
