import { Action } from '../../'

export const homeRouted: Action = action => action().mutation(state => (state.router.page = 'home'))
