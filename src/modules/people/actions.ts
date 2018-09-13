import { Action } from 'overmind'

export const personRouted: Action<{ personId: string }> = action =>
  action().mutate((state, { personId }) => {
    state.router.page = 'person'
    state.people.time = new Date()
    state.people.selectedPersonId = personId
  })

export const actions = { personRouted }
