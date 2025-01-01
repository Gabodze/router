import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
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
            <Link to="/Login">
              <button className='Login'>Log in</button>
            </Link>
            <Link to="/Signup">
              <button className='Signup'>Sign up</button>
            </Link>
          </div>

       
        </nav>

        {/* Pages */}
        <Routes>
          <Route path="/Home.js" element={<Home/>} />
          {/* <Route path="/Solutions" element={<Solutions />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Contact2" element={<Contact2 />} /> */}
        </Routes>

      </BrowserRouter>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
