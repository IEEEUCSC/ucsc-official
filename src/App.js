import Home from "./components/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SocialMedia from "./components/Common/SocialMedia/index";
import Footer from "./components/Common/Footer/index";
import EventDetails from "./components/Landing/EventDetails/EventDetails";
import React from "react";
import TopNavbar from "./components/Common/NavBar/TopNavbar";
import PreviousTeams from "./components/Pages/PreviousTeams";

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
