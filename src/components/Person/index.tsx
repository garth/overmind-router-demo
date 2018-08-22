import * as React from 'react'
import { connect, Connect } from '../../app'

const Person: React.StatelessComponent<Connect> = ({ app }) => (
  <div>
    <h2 className="subtitle">Person, {app.state.people.selectedPersonId}</h2>
    <hr />
    <div>{`${app.state.people.time}`}</div>
  </div>
)

export default connect(Person)
