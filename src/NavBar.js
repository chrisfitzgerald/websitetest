import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="w-64 md:w-64 bg-gray-800 h-screen text-white md:flex md:flex-col md:justify-between">
        <div>
          <div className="p-4 text-2xl font-bold">My NavBar</div>
          <button className="p-4 md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Close' : 'Menu'}
          </button>
          <ul className={`${isOpen ? '' : 'hidden'} md:flex md:flex-col md:items-start md:justify-between`}>
            <li className="p-4 hover:bg-gray-700">
              <a href="#hero">Hero Section</a>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <a href="#contact">Contact</a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>
    );
  }
export default NavBar;