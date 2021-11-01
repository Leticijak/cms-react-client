import { Header } from "./components/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Category } from "./pages/Category"
import Homepage from "./pages/Homepage"
import { ReviewDetails } from "./pages/ReviewDetails"
function App() {
  return (
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
  )
}

export default App
