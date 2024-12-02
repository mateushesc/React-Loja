import React, { useState } from 'react';
import './App.css';
import UserAccountForm from './UserAccountForm';
import ProductDataForm from './ProductDataForm';
import LoginForm from './LoginForm';
import Logout from './Logout';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {/* Bootstrap Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Landing Page</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => handleNavClick('createAccount')}>Criar conta</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => handleNavClick('login')}>Login</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => handleNavClick('logout')}>Sair</button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container text-center mt-5">
        {currentPage === 'landing' && (
          <div>
            <h1 className="display-4">Segundo Bimestre</h1>
          </div>
        )}

        {currentPage === 'createAccount' && (
          <div className="mt-4">
            <UserAccountForm />
          </div>
        )}

        {currentPage === 'login' && (
          <div className="mt-4">
            <LoginForm />
          </div>
        )}

        {currentPage === 'logout' && (
          <div className="mt-4">
            <Logout />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
