import { Action } from './'
import { Route } from './router'

type PersonRoutedProps = {
  personId: string
}

type People = {
  state: {
    selectedPersonId: string
    time: Date
  }
  actions: (
    action: Action
  ) => {
    personRouted: Route<PersonRoutedProps>
  }
}

export const people: People = {
  state: { selectedPersonId: null, time: new Date() },
  actions: action => ({
    personRouted: action<PersonRoutedProps>().mutation((state, { personId }) => {
      state.router.page = 'person'
      state.people.time = new Date()
      state.people.selectedPersonId = personId
    })
  })
}
