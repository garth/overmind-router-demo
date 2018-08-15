import App, { TConnect, TEffects, TAction, namespaces } from 'react-overmind'
import { people } from './people'
import { router } from './router'
import { home } from './home'

const namespaced = namespaces({
  home,
  people,
  router
})

export type Effects = TEffects<typeof namespaced.state, typeof namespaced.effects>
export type Action = TAction<typeof namespaced.state, Effects>
// export type Reaction = TReaction<typeof namespaced.state, Effects>

const app = new App(
  // namespaced,
  {
    state: namespaced.state,
    actions: namespaced.actions,
    effects: namespaced.effects
  },
  {
    devtools: 'localhost:1234'
  }
)

export type Connect = TConnect<typeof app.state, typeof app.actions>
export const connect = app.connect
export default app
