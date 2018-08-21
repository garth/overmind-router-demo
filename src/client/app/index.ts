import App, { namespaces, TConnect, TModules, TAction, TOperation, TDerive, TCompute } from 'react-overmind'
import * as people from './people'
import * as router from './router'
import * as home from './home'

const namespaced = namespaces({
  home,
  people,
  router
})

type Modules = TModules<{
  home: typeof home
  people: typeof people
  router: typeof router
}>

export type Action<Value = void> = TAction<Value, Modules>
export type Derive = TDerive<Modules>
export type Compute<Value> = TCompute<Value, Modules>
export type Mutation<Value = any> = TOperation.Mutation<Value, Modules>
export type Do<Value = any> = TOperation.Do<Value, Modules>
export type Filter<Value = any> = TOperation.Filter<Value, Modules>
export type When<Value = any> = TOperation.When<Value, Modules>
export type Fork<Value = any> = TOperation.Fork<Value, Modules>
export type Map<Value, ReturnValue> = TOperation.Map<Value, ReturnValue, Modules>
export type Try<Value, ReturnValue> = TOperation.Try<Value, ReturnValue, Modules>

const app = new App(
  namespaced
  // {
  //   devtools: 'localhost:1234'
  // }
)

export type Connect = TConnect<typeof app>
export const connect = app.connect
