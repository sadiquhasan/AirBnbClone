
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import SearchPage from './SearchPage'

function App() {
  return (
    <div className="app">
      <Router>

        
          <Route path="">
           <Header />
          </Route>
          
          <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>
          </Switch>

          <Route path="">
            <Footer />
          </Route>
    

      </Router>
    </div>
  );
}

export default App;
