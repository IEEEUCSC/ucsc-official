import React from 'react';

import Team from './Team';
import Work from './Stat';
import Title from './Title';
import ContactUs from './Contact';

import About from "./About/About";
import NewsList from "./NewsList/NewsList";
import Timeline from "./Timeline/Timeline";
import {ParallaxProvider} from "react-scroll-parallax";

const Home = () => {
  // const { data: items, isPending, error } = useFetch('http://localhost:8000/items');

  return (
    <main className="home">
      <section id="home" className="titleSection">
        <Title/>
      </section>

      <section id="about-us" className="aboutUs">
        <ParallaxProvider>
          <About/>
        </ParallaxProvider>
      </section>

      {/* <div className="WhatWeDo">
                <OurWork/>
            </div> */}

      <section id="what-we-do" className="numbers">
        <Work/>
      </section>

      <section id="timeline">
        <Timeline/>
      </section>

      <section id="past-events" className="newsFeed">
        {/* {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
        {items && */} <NewsList type="home"/>
      </section>

      <section id="gallery" className="gallery">
      </section>

      <section id="team" className="team">
        <Team/>
      </section>

      <section id="contact-us" className="contactUs">
        <ContactUs/>
      </section>

    </main>
  );
}

export default Home;
