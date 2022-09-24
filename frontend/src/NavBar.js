import React from 'react';
import './NavBar.css';
const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark ">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img
              src="https://cdn.pixabay.com/photo/2017/06/10/07/24/note-2389227_960_720.png"
              alt=""
              width="50"
              height="50"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
