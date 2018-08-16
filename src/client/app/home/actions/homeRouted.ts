import { Route } from '../../router'
import { Action } from '../../'

type HomeRouted = (action: Action) => Route

export const homeRouted: HomeRouted = action => action().mutation(state => (state.router.page = 'home'))
