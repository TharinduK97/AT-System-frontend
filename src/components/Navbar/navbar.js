import React, {Component,useState, useEffect} from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';


const Navbar = (props) => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">THE JOB</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to='/' >
                                    Home
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" to='/login' >
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" to='/profile' >
                                    Profile
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" to='/interview' >
                                    Interviews
                                </Link>

                            </li>

                            <li className="nav-item">
                                <Link  className="nav-link" to='/appliedjobs' >
                                    Applied jobs
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
}



export default Navbar;