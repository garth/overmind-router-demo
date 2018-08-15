import * as React from 'react'
import { connect, Connect } from '../../app'

import home from '../Home'
import person from '../Person'
import NotFound from '../NotFound'

const components = {
  home,
  person
}

const withRouteComponent = App => props =>
  App({ ...props, Component: components[props.app.state.router.page] || NotFound })

type ConnectWithComponent = Connect & { Component: React.StatelessComponent }

const App: React.StatelessComponent<ConnectWithComponent> = ({ app, Component }) => (
  <section className="section">
    <div className="container">
      <h1 className="title">Router Test</h1>
      <div>
        links: <a href="/">home</a>
        {' | '}
        <a href="/person/1">person 1</a>
        {' ----- signals: '}
        <button className="button" onClick={() => app.actions.router.homeRouted()}>
          home
        </button>
        {' | '}
        <button className="button" onClick={() => app.actions.router.personRouted({ personId: '2' })}>
          person 2
        </button>
        {' | '}
        <a href="/missing-link">missing link</a>
      </div>
      <hr />
      <Component />
    </div>
  </section>
)

export default connect(withRouteComponent(App))
