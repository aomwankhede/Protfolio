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
        <Intro />
      </section>
      <section id="blogs">
        <Blogs />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contacts">
        <Contacts />
      </section>
    </React.Fragment>
  );
}

export default App;
