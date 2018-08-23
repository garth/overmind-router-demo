import { Action } from '../../../app'

export const personRouted: Action<{ personId: string }> = action =>
  action().mutation((state, { personId }) => {
    state.router.page = 'person'
    state.people.time = new Date()
    state.people.selectedPersonId = personId
  })
