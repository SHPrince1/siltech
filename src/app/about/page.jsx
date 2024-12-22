import React from 'react';
import AboutBanner from '../components/about-us/banner'
import WhoWeAre from '../components/about-us/who-we-are'
import MissionParent from '../components/about-us/mission-parent'
import ValueCardParent from '../components/about-us/value-card-parent'
import WhatPeopleSayParentCard from '../components/about-us/what-people-say-parent-card'
import Connect from '../components/about-us/connect'
import Footer from '../components/footer'
export default function About() {
    return (
      <div>
      
       {/* <h1>ABOUT</h1> */}
       <AboutBanner />
       <WhoWeAre />
       <MissionParent />
       <ValueCardParent />
       <WhatPeopleSayParentCard />
       <Connect />
       <Footer />
      </div>
    );
  }