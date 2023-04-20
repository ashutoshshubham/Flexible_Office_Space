import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        OFFICE SPACE
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" aria-current="page" to="/user/add_space">
                                <b>ADD SPACE</b>
                            </NavLink>
                            <NavLink className="nav-link" to="/user/manage_space">
                                <b>MANAGE SPACE</b>
                            </NavLink>
                            <NavLink className="nav-link">
                                <b>LOGOUT</b>
                            </NavLink>

                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar