import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
                <div className="container">
                    <Link className="navbar-brand" to="/home">{props.brandtext}</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-3" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-3" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

