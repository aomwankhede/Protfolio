import React from 'react';

const testimonials = [
  {
    quote:
      'Aom is a highly skilled developer with an exceptional ability to tackle complex problems and deliver effective solutions.',
    name: 'Rohit Samrit',
    role: 'https://www.linkedin.com/in/rohit-samrit-431a52231/?originalSubdomain=in',
  },
  {
    quote:
      'Working with Aom was a pleasure. His dedication to quality and attention to detail were evident in every aspect of the project.',
    name: 'Shubham Sonawane',
    role: 'https://www.linkedin.com/in/shubham-sonawane-78a2b8214/?trk=people-guest_people_search-card&originalSubdomain=in',
  },
  {
    quote:
      "Aom's technical expertise and creativity have greatly contributed to our project's success. He consistently exceed expectations.",
    name: 'Akash Dhamane',
    role: 'https://www.linkedin.com/in/akash-dhamane-292114229/?locale=es_ES&trk=people-guest_people_search-card',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 text-gray-900 min-h-screen py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-accent mb-4">
          What People Say
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Here's what some of my colleagues and clients have to say about
          working with me.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-base text-gray-600 italic mb-4">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-4">
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
              <p
                onClick={() => window.open(testimonial.role, '_blank')}
                className="text-blue-700 text-sm font-bold text-gray-600 hover:cursor-pointer"
              >
                Linkedin
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
