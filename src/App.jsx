import React from 'react';
import HOC from './HOC';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Blogs from './Components/Blogs/Blogs';
import Contacts from './Components/Contact/Contacts';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return (
    <React.Fragment>
      <HOC>
        <section>
          <Navbar id="navbar" />
        </section>
      </HOC>
      <section id="intro">
        <br />
        <Intro />
      </section>
      <section id="blogs">
        <br />
        <Blogs />
      </section>
      <section id="skills">
        <br />
        <Skills />
      </section>
      <section id="projects">
        <br />
        <Projects />
      </section>
      <section id="testimonials">
        <br />
        <Testimonials />
      </section>
      <section id="contacts">
        <br />
        <Contacts />
      </section>
    </React.Fragment>
  );
}

export default App;
