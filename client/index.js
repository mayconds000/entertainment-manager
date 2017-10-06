import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient, { ApolloProvider, createNetworkInterface } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'

import App from './components/app'

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
})

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
})

const Root = () => {
  return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    )
  }
  
  ReactDOM.render(<Root />, document.querySelector('#root'))