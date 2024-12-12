import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Contactus from './components/Contactus';
import Aboutus from './components/Aboutus';
import Solutions from './components/Solutions'


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        {/* ნავიგაციის ბარი */}
        <nav>
          <ul>
            {/* <li>
              <Link to="/Contactus">Contact us</Link>
            </li> */}
            <li>
              <Link to="/Aboutus">About Us</Link>
            </li>

            <li>
              <link to="/Solutions">Solutions</link>
            </li>
          </ul>
        </nav>

        {/* გვერდების დეფინიცია */}
        <Routes>
          {/* <Route path="/Contactus" element={<Contactus />} /> */}
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Solutions" element={<Solutions/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
