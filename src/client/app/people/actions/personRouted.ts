import { Action } from '../../'
import { Route } from '../../router'

type PersonRoutedProps = { personId: string }
type PersonRouted = (action: Action) => Route<PersonRoutedProps>

export const personRouted: PersonRouted = action =>
  action<PersonRoutedProps>().mutation((state, { personId }) => {
    state.router.page = 'person'
    state.people.time = new Date()
    state.people.selectedPersonId = personId
  })
