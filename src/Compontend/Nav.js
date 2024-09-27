import { MdClose } from "react-icons/md";
import { RiMenu5Line } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom"; // Importing Link for routing
import "./Navbar.css"; // Import your custom CSS file

const N = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <h1>
                Q <span>uantum IT Solution</span>
              </h1>
            </div>
            <ul className={isOpen ? "nav-link active" : "nav-link"}>
              <li>
                <Link to="/" className="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/AboutNav">About</Link>
              </li>
              <li>
                <Link to="/it-services">IT Services</Link>
              </li>
              <li>
                <Link to="/Course">Professional Courses</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <div className="icon" onClick={toggleMenu}>
              {isOpen ? <MdClose /> : <RiMenu5Line />}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default N;
