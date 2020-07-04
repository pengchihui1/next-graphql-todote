import React from 'react'
import { render } from 'react-dom'
import { client } from './apollo/client'

import { ApolloProvider } from '@apollo/react-hooks'

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  </ApolloProvider>
)

render(<App />, document.getElementById('root'))
