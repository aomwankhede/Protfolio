const Contacts = () => {
  return (
    <section className="bg-gray-100 text-gray-900 min-h-screen py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-accent mb-4">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities or answering any
          questions you might have. Feel free to reach out through any of the
          methods below!
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Methods */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-accent mb-4">
            Contact Details
          </h3>
          <ul className="text-lg text-gray-700">
            <li className="mb-4">
              <h4 className="font-semibold">Email:</h4>
              <p>
                <a
                  href="mailto:aom@example.com"
                  className="text-blue-500 hover:underline"
                >
                  aomwankhede@gmail.com
                </a>
              </p>
            </li>
            <li className="mb-4">
              <h4 className="font-semibold">Phone:</h4>
              <p>
                <a
                  href="tel:+1234567890"
                  className="text-blue-500 hover:underline"
                >
                  +91 8600078052
                </a>
              </p>
            </li>
            <li className="mb-4">
              <h4 className="font-semibold">LinkedIn:</h4>
              <p>
                <a
                  href="https://www.linkedin.com/in/aom-wankhede-b51281186/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  linkedin.com/in/aom
                </a>
              </p>
            </li>
            <li className="mb-4">
              <h4 className="font-semibold">GitHub:</h4>
              <p>
                <a
                  href="https://github.com/aomwankhede  "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  github.com/aom
                </a>
              </p>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-accent mb-4">
            Contact Form
          </h3>
          <form
            name="contact"
            method="POST"
            action="/send"
            className="flex flex-col space-y-4"
          >
            <label className="flex flex-col">
              <span className="text-lg font-semibold mb-2">Name:</span>
              <input
                type="text"
                name="name"
                required
                className="border border-gray-300 rounded-lg p-3"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-lg font-semibold mb-2">Email:</span>
              <input
                type="email"
                name="email"
                required
                className="border border-gray-300 rounded-lg p-3"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-lg font-semibold mb-2">Message:</span>
              <textarea
                name="message"
                required
                rows="4"
                className="border border-gray-300 rounded-lg p-3"
              ></textarea>
            </label>
            <button
              type="submit"
              className="bg-primary text-textLight px-6 py-3 rounded-full font-semibold hover:bg-hoverColor transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
