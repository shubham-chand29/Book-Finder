import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-auto fixed bottom-0 left-0 w-full">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Book Finder App. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          {/* Social Media Links with Icons */}
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
