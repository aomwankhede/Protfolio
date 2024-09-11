const blogs = [
  {
    title: 'Understanding React Hooks',
    description:
      'A deep dive into React Hooks and how they can simplify state management in functional components.',
    link: '#',
  },
  {
    title: 'JavaScript ES6 Features',
    description:
      'Explore the new features introduced in ES6 and how they enhance JavaScript development.',
    link: '#',
  },
  {
    title: 'Building RESTful APIs with Node.js',
    description:
      'Learn how to create robust and scalable RESTful APIs using Node.js and Express.',
    link: '#',
  },
];

const Blogs = () => {
  return (
    <section className="bg-gray-100 text-gray-900 min-h-screen py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-accent mb-4">
          My Blog Posts
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Here are some of my latest blog posts where I share insights,
          tutorials, and experiences on various tech topics.
        </p>
      </div>
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2 text-accent">
              {blog.title}
            </h3>
            <p className="text-base text-gray-600 mb-4">{blog.description}</p>
            <a
              href={blog.link}
              className="text-blue-500 hover:text-blue-400 font-semibold transition-colors"
            >
              Read More {`-->`}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
