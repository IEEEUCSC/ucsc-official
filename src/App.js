import Home from './components/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Common/NavBar/index';
import SocialMedia from './components/Common/SocialMedia/index';
import Article from './components/Article/index';
import Footer from './components/Common/Footer/index'



function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
           
            <Route path="/items/:id">
              <Article/>
            </Route>

            {/*
            <Route path="*">
              <NotFound />
            </Route>*/}
          </Switch>
       
        <SocialMedia/>
      </div>
    </Router>
  );
}
export default App;
