import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

import { Header } from "./components/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Category } from "./pages/Category"
import Homepage from "./pages/Homepage"
import { ReviewDetails } from "./pages/ReviewDetails"

/// apollo client
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
})
/////     A P P ///////
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <Route component={Homepage} path='/' exact />
            <Route component={ReviewDetails} path='/details/:id' />
            <Route component={Category} path='/category/:id' />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
