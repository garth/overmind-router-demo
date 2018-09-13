import App, { TConnect } from 'overmind-react'

// prepare the app modules
import * as actions from './actions'
import * as people from './modules/people'
import * as router from './modules/router'
import * as home from './modules/home'

const config = {
  actions,
  modules: {
    home,
    people,
    router
  }
}

// setup the app typing
declare module 'overmind' {
  interface IState extends TState<typeof config> {}
  interface IEffects extends TEffects<typeof config> {}
}

// create the app
const app = new App(
  config,
  process.env.NODE_ENV === 'development'
    ? {
        devtools: 'localhost:1234'
      }
    : {}
)

// export typed view bindings
export type Connect = TConnect<typeof app>
export const connect = app.connect
