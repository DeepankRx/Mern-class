import React from 'react';
import './NavBar.css';
const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-dark bg-dark"
        style={{
          backgroundColor: 'black',
        }}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="https://cdn.pixabay.com/photo/2017/06/10/07/24/note-2389227_960_720.png"
              alt=""
              width="60"
              height="60"
              className="rounded-circle"
            />
          </a>
          <h1 className="text-white">ToDo List</h1>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
