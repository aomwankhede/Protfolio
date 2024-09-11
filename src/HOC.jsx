import { BrowserRouter as Router } from 'react-router-dom';

const HOC = ({ children }) => {
  return (
    <Router>
      <div className="font-extrabold bg-gray-800 fixed top-0 w-full z-50 border-b border-gray-700 shadow-md">
        <div className="max-w-screen-lg mx-auto px-4 py-2">{children}</div>
      </div>
    </Router>
  );
};

export default HOC;
