import Home from "./components/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SocialMedia from "./components/Common/SocialMedia";
import Footer from "./components/Common/Footer";
import EventDetails from "./components/Landing/EventDetails";
import React from "react";
import TopNavbar from "./components/Common/TopNavbar";
import PreviousTeams from "./components/PreviousTeams";

function App() {
  // let { id } = useParams();
  return (
    <>
      <Router>
        <main>
          <Switch>
            <Route exact path="/">
              <TopNavbar showLinks={true} />
              <Home />
              <Footer />
            </Route>
            <Route path="/event-details/:id">
              <TopNavbar showLinks={false} />
              <EventDetails />
              <Footer />
            </Route>
            <Route path="/previous-teams">
              <TopNavbar showLinks={false} />
              <PreviousTeams />
              <Footer />
            </Route>
          </Switch>
          <SocialMedia />
        </main>
      </Router>
    </>
  );
}

export default App;
