import Home from './components/Landing';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SocialMedia from './components/Common/SocialMedia/index';
import Footer from './components/Common/Footer/index'
import EventDetails from "./components/Landing/EventDetails/EventDetails";
import NavBar from "./components/Common/NavBar";
import React from "react";


function App() {
  // let { id } = useParams();
  return (
    <>

      <Router>
        <main>

          <Switch>
            <Route exact path="/">
              <NavBar showLinks={true}/>
              <Home/>
              <Footer/>
            </Route>
            <Route path="/event-details/:id">
              <NavBar showLinks={false}/>
              <EventDetails/>
              <Footer/>
            </Route>
          </Switch>

          <SocialMedia/>
        </main>
      </Router>

    </>
  );
}

export default App;
