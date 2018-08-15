import * as React from 'react'
import { connect, Connect } from '../../app'

const App: React.StatelessComponent<Connect> = ({ app }) => (
  <section className="section">
    <div className="container">
      <h1 className="title">Router Test</h1>
      <h2 className="subtitle">
        {app.state.router.page}
        {app.state.router.page === 'person' && ` ${app.state.people.selectedPersonId}`}
      </h2>
      <div>
        links: <a href="/">home</a> | <a href="/person/1">person 1</a>
      </div>
      <div>
        signals:
        <button onClick={() => app.actions.router.home()}>home</button> |
        <button onClick={() => app.actions.router.person({ personId: '2' })}>person 2</button>
      </div>
      <div>{`${app.state.people.time}`}</div>
    </div>
  </section>
)

export default connect(App)
