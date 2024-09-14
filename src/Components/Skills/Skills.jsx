import React from 'react';

const skills = [
  {
    category: 'Programming Languages',
    items: ['JavaScript', 'C++', 'Python', 'Java'],
  },
  {
    category: 'Web Technologies',
    items: ['MERN Stack', 'Flask', 'Django', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'MongoDB', 'MariaDB', 'Sqlite'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'Postman', 'Github'],
  },
];

const Skills = () => {
  return (
    <section className="bg-gray-100 text-gray-900 min-h-screen py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-accent mb-4">
          My Skills
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Here’s a snapshot of my technical skills and the tools I use to build
          great software.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillCategory, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-accent">
              {skillCategory.category}
            </h3>
            <ul className="list-disc list-inside">
              {skillCategory.items.map((item, i) => (
                <li key={i} className="text-lg text-gray-800">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
