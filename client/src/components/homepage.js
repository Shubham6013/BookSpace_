import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../homepage.css';

function HomePage(){
    return (
        <div className = "home">
          <nav class="navbar navbar-expand-lg navbar-dark">
            </nav>
            <div className="container"></div>
          <div className="container">
            {/* <Link to="/show-booklist" className="btn btn-outline-warning float-left">
                  Admin
              </Link>
              <Link to="/user" className="btn btn-outline-warning float-right">
                  User
              </Link> */}

             

            <div class="row">

            <div class="col-lg-6" className="t">
              <h1 class="big-heading">Bookspace - A room without books is like a body without a soul.</h1>
              <Link to="/show-booklist" className="btn btn-dark btn-lg download-button">
                  Admin
              </Link>
              <Link to="/user" className="btn btn-outline-light btn-lg download-button">
                  User
              </Link>
              {/* <button type="button" Link to="/show-booklist" class="btn btn-dark btn-lg download-button">Admin</button> */}
              {/* <button type="button" Link to="/user" class="btn btn-outline-light btn-lg download-button">User</button> */}
            </div>

            {/* <div class="col-lg-6">
              <img class="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7rbWSBE2bRQkNeotOqJSjTOQEdeQiQaw_g&usqp=CAU" alt="iphone-mockup" />
            </div> */}

            </div>

        </div>

        </div>

        
    )
};

    
export default HomePage;