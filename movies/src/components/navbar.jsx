import React, { Component } from 'react';
import { NavLink ,Link } from 'react-router-dom';
import '../css/navbar.css';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
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