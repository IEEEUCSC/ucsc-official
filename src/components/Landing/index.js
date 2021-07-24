import React, { useState, useEffect } from 'react';
import NewsList from './NewsList';
import TimeLine from './Timeline';
import useFetch from '../../useFetch';
import AboutUs from './About';
import Team from './Team';
import Work from './Stat';
import Title from './Title';
import ContactUs from './Contact';
import ParticlesBg from 'particles-bg';



const Home = () => {
    const { data: items, isPending, error } = useFetch('http://localhost:8000/items');


    return (
        <div className="home">
            <div className="titleSection">
                <Title />
            </div>

            <div className="aboutus">
                <AboutUs />
            </div>

           
            {/* <div className="WhatWeDo">
                <OurWork/>
            </div> */}
            <div className="numbers">
                <Work />



            </div>

            <div className="timeLine">
                <TimeLine />



            </div>
            <div className="newsFeed">
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {items && <NewsList items={items} />}
            </div>
            <div className="gallery">

            </div>
            <div className="team">
                <Team />

            </div>
            <div className="contatUs">
                <ContactUs />

            </div>
        </div>
    );
}

export default Home;