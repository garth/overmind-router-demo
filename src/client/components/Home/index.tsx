import * as React from 'react'
import { connect, Connect } from '../../app'

const Home: React.StatelessComponent<Connect> = ({ app }) => <h2 className="subtitle">Home</h2>

export default connect(Home)
