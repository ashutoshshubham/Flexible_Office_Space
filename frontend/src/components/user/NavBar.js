import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Office_building_icon.png"
                        height="35"
                        alt="MDB Logo"
                        loading="lazy"
                    />
                    <h4 className='text-white'>
                        OFFICE SPACE
                    </h4>

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
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav  fs-5">
                            <NavLink className="nav-link text-white" aria-current="page" to="/user/add_space">
                                <b>ADD SPACE</b>
                            </NavLink>
                            <NavLink className="nav-link text-white" to="/user/manage_space">
                                <b>MANAGE SPACE</b>
                            </NavLink>
                            {/* <NavLink className="nav-link text-white" to="/user/profile">
                                <b>PROFILE</b>
                            </NavLink> */}
                            <NavLink className="nav-link text-white" to='/main/'>
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