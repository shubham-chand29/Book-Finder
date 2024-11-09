import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Genre from './pages/Genre';
import Search from './pages/Search';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import background from './pages/background.webp'

// import backgroundPic from './pages/background_pic.jpg'; // Adjust path as per your folder structure
import logo from './pages/logo.jpg'; // Adjust path as per your folder structure
import Footer from './component/Footer';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${background})` }}>
        <nav className="p-4 bg-opacity-80 bg-gray-800 text-white flex justify-between items-center">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-12" />

          {/* Navigation Links */}
          <div className="space-x-4 flex items-center">
              <Link 
                to="/" 
                className="hover:text-blue-400 transform hover:scale-105 hover:translate-x-2 transition-all duration-200"
              >
                Home
              </Link>
              <Link 
                to="/genre" 
                className="hover:text-blue-400 transform hover:scale-105 hover:translate-x-2 transition-all duration-200"
              >
                Genre
              </Link>
              <Link 
                to="/search" 
                className="hover:text-blue-400 transform hover:scale-105 hover:translate-x-2 transition-all duration-200"
              >
                Search
              </Link>
              <Link 
                to="/about" 
                className="hover:text-blue-400 transform hover:scale-105 hover:translate-x-2 transition-all duration-200"
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="hover:text-blue-400 transform hover:scale-105 hover:translate-x-2 transition-all duration-200"
              >
                Contact
              </Link>
              <Link 
                to="/signup" 
                className="hover:text-blue-400 transform hover:scale-105 hover:translate-x-2 transition-all duration-200"
              >
                Sign Up
              </Link>
              <Link 
                to="/login" 
                className="hover:text-blue-400 transform hover:scale-105 hover:translate-x-2 transition-all duration-200"
              >
                Login
              </Link>
            </div>
          </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
