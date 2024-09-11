import React from 'react';

const projects = [
  {
    title: 'Project One',
    description:
      'An innovative project that involves cutting-edge technology and provides a solution to a complex problem.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'Project Two',
    description:
      'A full-stack application developed with modern technologies, focusing on performance and scalability.',
    videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
  },
  {
    title: 'Project Three',
    description:
      'A creative project demonstrating advanced UI/UX design principles and interactive features.',
    videoUrl: 'https://www.youtube.com/embed/l9Px2Xy5R3o',
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-100 text-gray-900 min-h-screen py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-accent mb-4">
          My Projects
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Check out some of the projects I’ve worked on. Each project includes a
          video demonstration to give you a better understanding of my work.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-accent">
              {project.title}
            </h3>
            <p className="text-base text-gray-600 mb-4">
              {project.description}
            </p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-lg"
                src={project.videoUrl}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
