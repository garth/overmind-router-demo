import App, { TConfig, TAction, TDerive, TCompute, TReaction, TOperation, TConnect } from 'react-overmind'

// prepare the app modules
import * as actions from './actions'
import * as people from './modules/people'
import * as router from './modules/router'
import * as home from './modules/home'

const config = {
  actions,
  namespaces: {
    home,
    people,
    router
  }
}

// setup the app typing
type Config = TConfig<typeof config>
export type Action<Input = void> = TAction<Input, Config>
export type Derive = TDerive<Config>
export type Compute<Input> = TCompute<Input, Config>
export type Reaction = TReaction<Config>
export type Do<Input = any> = TOperation.Do<Input, Config>
export type Filter<Input = any> = TOperation.Filter<Input, Config>
export type When<Input = any> = TOperation.When<Input, Config>
export type Fork<Input = any> = TOperation.Fork<Input, Config>
export type Mutation<Input = any> = TOperation.Mutation<Input, Config>
export type Map<Input, Output> = TOperation.Map<Input, Output, Config>
export type Try<Input, Output> = TOperation.Try<Input, Output, Config>

const app = new App(config, {
  devtools: 'localhost:1234'
})

// export typed view bindings
export type Connect = TConnect<typeof app>
export const connect = app.connect
