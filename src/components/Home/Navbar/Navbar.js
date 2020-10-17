import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    return (
        <div className="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#"><img style={{ width: '150px', height: '47px' }} src={logo} alt="" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active mr-3">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item mr-3">
                            <a class="nav-link" href="#">Our Portfolio</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a class="nav-link" href="#">Our Team</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a class="nav-link" href="#">Contact Us</a>
                        </li>
                        <Link className="nav-link" to="/login">
                        <li className="nav-item mr-3">
                            <button className="btn btn-dark">Login</button>
                        </li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;