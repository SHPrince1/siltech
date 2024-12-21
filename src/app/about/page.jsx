import React from 'react';
import AboutBanner from '../components/about-us/banner'
import WhoWeAre from '../components/about-us/who-we-are'
import MissionParent from '../components/about-us/mission-parent'
export default function About() {
    return (
      <div>
      
       {/* <h1>ABOUT</h1> */}
       <AboutBanner />
       <WhoWeAre />
       <MissionParent />
      </div>
    );
  }