import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage'
import GlobalStyles from './GlobalStyles'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomePage} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
