import React, { useState, useEffect } from 'react';

const Sidebar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sidebar = document.querySelector('.sidebar');
      if (sidebar) {
        const sidebarOffsetTop = sidebar.offsetTop;
        const scrollY = window.scrollY;

        setIsFixed(scrollY > sidebarOffsetTop);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span>DashBoard</span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Add Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Modify Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Today Orders</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Customers Details</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Settings
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Logout</a>
            <a className="dropdown-item" href="#">Change Password</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  
  );
};

export default Sidebar;


