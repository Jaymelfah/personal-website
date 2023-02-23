import React from 'react';
import Formcreate from '../components/Formcreate';
import Hamburger from '../components/Hamburger';
import Intro from '../components/Intro';
import Projects from '../components/Projects';


const Main = () => {
    return (
      <div>
        <Hamburger />
        <Intro  />
        <Projects />
        <Formcreate />
      </div>
    )
}

export default Main;