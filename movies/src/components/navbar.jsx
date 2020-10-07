import React, { Component } from 'react';
import { NavLink ,Link } from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {/* <nav class="navbar navbar-expand-lg">
                    {/* <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                    
                    {/* <div class="offset-4" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                        <Link class="nav-link m-2" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link m-2" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link m-2" to="/about">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link m-2" to="/about">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link m-2" to="/about">Register</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link m-2" to="/about">Profile</Link>
                        </li>
                        </ul>
                    </div>
                </nav>  */}
                <header id="header" className="fixed-top  d-flex justify-content-center align-items-center header-transparent">

                <nav class="nav-menu d-none d-lg-block">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="#resume">Contact</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">SignUp</a></li>
                    <li><a href="#contact">Profile</a></li>
                    <li><a href="/demo">Demo</a></li>

                </ul>
                </nav>

                </header>
            </div>
         );
    }
}
 
export default Navbar;