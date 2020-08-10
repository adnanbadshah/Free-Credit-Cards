import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light pb-0">
                <Link to="/"><p className="navbar-brand">FreeCreditCards</p></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsupportedcontent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/"><p className="nav-link">Get credit card</p></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="test" style={{pointerEvents: 'none'}}>
                                <p className="nav-link" id="test-coming">Test Credit Card <span className="badge badge-warning badge-pill">Coming soon!</span></p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );

}
