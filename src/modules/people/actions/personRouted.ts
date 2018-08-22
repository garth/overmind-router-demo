import { Action } from '../../../app'

type PersonRoutedProps = { personId: string }

export const personRouted: Action<PersonRoutedProps> = action =>
  action<PersonRoutedProps>().mutation((state, { personId }) => {
    state.router.page = 'person'
    state.people.time = new Date()
    state.people.selectedPersonId = personId
  })
