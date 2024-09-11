const Navbar = () => {
  return (
    <nav>
      <ul className="text-white flex font-bold m-2 justify-between">
        <li>
          <a className="cursor-pointer" href="#">
            About
          </a>
        </li>
        <li>
          <a className="cursor-pointer" href="#blogs">
            Blogs
          </a>
        </li>
        <li>
          <a className="cursor-pointer" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="cursor-pointer" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="cursor-pointer" href="#testimonials">
            Testimonials
          </a>
        </li>
        <li>
          <a className="cursor-pointer" href="#contacts">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
