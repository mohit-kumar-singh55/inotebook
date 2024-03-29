import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const Navbar = (props) => {
    let location = useLocation();

    let history = useHistory();

    const handleLogout = () =>{
        localStorage.removeItem('tokem');
        history.push('/login');
    }

    return (
        <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} aria-current="page" to="/about">About</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token') ? <form className="d-flex">
                        <Link className="btn btn-outline-primary mx-2" to='/login' role="button"><i className="fas fa-sign-in-alt"></i></Link>
                        <Link className="btn btn-outline-primary mx-2" to='/signup' role="button"><i className="fas fa-user-plus"></i></Link>
                    </form> : <Link className="btn btn-outline-primary mx-2" onClick={handleLogout} role="button"><i className="fas fa-sign-out-alt"></i></Link>}
                </div>
            </div>
        </nav>
    )
}
