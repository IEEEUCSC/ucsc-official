import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// import Home from "./components/Landing";
// import EventDetails from "./components/Landing/EventDetails";
// import PreviousOfficers from "./components/PreviousOfficers";
import SocialMedia from "./components/Common/SocialMedia";
import Footer from "./components/Common/Footer";
import TopNavbar from "./components/Common/TopNavbar";
import Loading from "./components/Common/Loading";
import NewsList from "./components/Common/NewsList";

// lazy loading components
const Home = lazy(() => import("./components/Landing"));
const EventDetails = lazy(() => import("./components/Landing/EventDetails"));
const PreviousOfficers = lazy(() => import("./components/PreviousOfficers"));
const RevoluxOCJobDesc = lazy(() => import("./components/Landing/Misc/RevoluxOCJobDesc.js"));

const App = () => {
  return (
      <Suspense fallback={<Loading/>}>
        <main>
          <Switch>
            <Route exact path="/">
              <TopNavbar showLinks={true}/>
              <Home/>
              <Footer/>
            </Route>
            <Route path="/event-details/:id">
              <TopNavbar showLinks={false}/>
              <EventDetails/>
              <Footer/>
            </Route>
            <Route path="/previous-officers">
              <TopNavbar showLinks={false}/>
              <PreviousOfficers/>
              <Footer/>
            </Route>
            <Route path="/revolux-oc-job-desc">
              <RevoluxOCJobDesc/>
            </Route>
          </Switch>
          {window.location.hash !== "#/revolux-oc-job-desc" && (
              <>
                <NewsList/>
                <SocialMedia/>
              </>
          )}
          
        </main>
      </Suspense>
  );
};

export default App;
