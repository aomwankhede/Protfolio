import { NavLink } from 'react-router-dom';
import { ReactTyped } from 'react-typed';

const Intro = () => {
  return (
    <div className="bg-gray-100 text-textLight min-h-screen flex justify-center items-center  flex-col p-8">
      {/* Profile Section */}
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-accent mb-4">
          Hello, I'm Aom!
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          <ReactTyped
            strings={[
              'Tech Enthusiast',
              'Full-Stack Developer',
              'Problem Solver',
              'Software Engineer',
              'Open Source Contributor',
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          >
            <input type="text" className="bg-gray-100" />
          </ReactTyped>
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mt-4">
          Welcome to my portfolio! I am a passionate developer with a love for
          building efficient and scalable software solutions.
          <br />
          <br />
          Fun fact: My name is pronounced like "Om" — just like the sound of
          peace! 😊 With a deep understanding of both front-end and back-end
          technologies, I specialize in creating web applications that bring
          value to the end-user.
        </p>
        <div className="mt-8">
          <a
            href="#projects"
            className="bg-blue-400 text-textLight px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all"
          >
            Check My Projects {`-->`}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
