import './App.css'
import Home from './pages/index'

import Footer from './components/Footer'
import Launch from './components/Launch'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { launch } from './data/dataHome'
import careers from './pages/carrers'
import experts from './pages/experts'
import refer from './pages/refer/refer'
import NotFound from './components/NotFound'


function App() {
  return (
    <Router>
      <Launch launch={launch} />
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/company' component={company} /> */}
        <Route path='/carrers' component={careers} />
        <Route path='/experts' component={experts} />
        <Route path='/refer' component={refer} />
        <Route path='*' component={NotFound} />


      </Switch>
      <Footer />
    </Router>
  )
}

export default App
