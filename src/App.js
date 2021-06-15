import './App.css'
import Home from './pages/index'

import Footer from './components/Footer'
import Launch from './components/Launch'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { launch } from './data/dataHome'
import careers from './pages/carrers'
// import expert from './pages/expert'

function App() {
  return (
    <Router>
      <Launch launch={launch} />
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/company' component={company} /> */}
        <Route path='/carrers' component={careers} />
        {/* <Route path='/expert' component={expert} /> */}


        {/* <Route path='/contest' component={contest} /> */}


      </Switch>
      <Footer />
    </Router>
  )
}

export default App
