import { Action } from '../'
import { personRouted } from './actions/personRouted'

type State = {
  selectedPersonId: string
  time: Date
}

export const state: State = {
  selectedPersonId: null,
  time: new Date()
}

type PeopleActions = (
  action: Action
) => {
  personRouted: ReturnType<typeof personRouted>
}

export const actions: PeopleActions = action => ({
  personRouted: personRouted(action)
})
