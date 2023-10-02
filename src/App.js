import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="text-center p-10 bg-white rounded-lg shadow-md w-full md:w-1/2">
        <h1 className="text-4xl font-semibold">Welcome to My Website</h1>
        <p className="text-lg mt-2">Exploring computer science, logic, and stargazing.</p>
      </section>

      {/* Contact Section */}
      <section className="text-center p-10 mt-10 bg-white rounded-lg shadow-md w-full md:w-1/2">
        <h2 className="text-2xl font-semibold">Contact Me</h2>
        <p className="text-lg mt-2">Reach me at: example@email.com</p>
      </section>
    </div>
  );
}

export default App;

