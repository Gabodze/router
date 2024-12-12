import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import Solutions from './components/Solutions';
import Resources from './components/Resources';
import Contact2 from './components/Contact2';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>

        {/* Nav Bar */}
        <nav>
          <img src="/logo.png" alt="Logo" className="logo" />

          {/* Navigation Menu */}
          <div className="navMenu">
            <ul>
              <li><Link to="/Aboutus">About Us</Link></li>
              <li><Link to="/Solutions">Solutions</Link></li>
              <li><Link to="/Resources">Resources</Link></li>
            </ul>
          </div>

          <Link to="/Contact2">
            <button className='contactbtn'>Contact Us
              <img src="/arrow.png" alt='arrow' className='arrow' />
            </button>
          </Link>
        </nav>

















        {/* Pages */}
        <Routes>
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Solutions" element={<Solutions />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Contact2" element={<Contact2 />} />
        </Routes>

      </BrowserRouter>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
