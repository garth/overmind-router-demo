import { Action } from 'overmind'

export const homeRouted: Action = action => action().mutate(state => (state.router.page = 'home'))

export const actions = { homeRouted }
