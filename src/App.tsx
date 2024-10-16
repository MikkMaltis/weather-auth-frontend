import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Weather from './components/Weather';
import Todos from './components/Todos';
import { logout } from './utils/auth';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold">Weather Auth App</h1>
          <ul className="flex space-x-4">
            <li>
              <Link to="/signup" className="text-blue-500 hover:text-blue-700">
                Signup
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-blue-500 hover:text-blue-700">
                Login
              </Link>
            </li>
            <li>
              <Link to="/weather" className="text-blue-500 hover:text-blue-700">
                Weather
              </Link>
            </li>
              <Link to="/todos" className="text-blue-500 hover:text-blue-700">
                Todos
              </Link>
            <li>
              <button
                onClick={() => {
                  logout();
                  window.location.href = '/login';
                }}
                className="text-blue-500 hover:text-blue-700"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
