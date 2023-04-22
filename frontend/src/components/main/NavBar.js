import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-success">


                {/* Container wrapper */}
                <div className="container text-white">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Office_building_icon.png"
                        height="35"
                        alt="MDB Logo"
                        loading="lazy"
                    />

                    <h4>OFFICE SPACE</h4>
                    {/* Toggle button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarCenteredExample"
                        aria-controls="navbarCenteredExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars" />
                    </button>
                    {/* Collapsible wrapper */}



                    <div
                        className="collapse navbar-collapse justify-content-center"
                        id="navbarCenteredExample"
                    >
                        {/* Left links */}
                        <ul className="navbar-nav mb-2 mb-lg-0 fs-5">
                            <li className="nav-item ">
                                <NavLink className="nav-link text-white" aria-current="page" to="home">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" aria-current="page" to="browsespace">
                                    Browse Space
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="login">
                                    Login
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="signup">
                                    SignUp
                                </NavLink>
                            </li>

                            {/* Navbar dropdown */}
                            {/* <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>
                            
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li> */}

                            {/* <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li> */}
                        </ul>
                        {/* Left links */}
                    </div>
                    {/* Collapsible wrapper */}
                </div>
                {/* Container wrapper */}
            </nav>


        </div>
    )
}

export default NavBar