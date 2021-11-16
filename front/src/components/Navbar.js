import React from 'react';
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export const Navbar = () => {

    const { loginWithRedirect } = useAuth0()
    const { user, isAuthenticated } = useAuth0();


    const showNavbar = () => (
        <div className="container d-flex justify-content-between align-items-center">

            <Link className="navbar-brand h1" to="/">
                <i className="bx bx-pulse bx-sm text-dark" />
                <span className="text-dark h4">4</span><span className="text-primary h4">Help</span>

            </Link>
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler-success" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="navbar-toggler-success">
                <div className="flex-fill mx-xl-5 mb-2">
                    <ul className="nav navbar-nav d-flex justify-content-between mx-xl-5 text-center text-dark">


                        <li className="nav-item">
                            <Link className="nav-link btn-outline-primary rounded-pill px-3" to="/add">Ask4</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn-outline-primary rounded-pill px-3" to="/posts">Help</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link btn-outline-primary rounded-pill px-3" to="/myposts">My posts</Link>
                        </li>


                    </ul>
                </div>
                <div className="navbar align-self-center d-flex">
                    <a className="nav-link" href="#"><i className="bx bx-bell bx-sm bx-tada-hover text-primary" /></a>
                    <Link className="nav-link" to="/log"><i className="bx bx-cog bx-sm text-primary" /></Link>
                    <Link className="nav-link" to="/log"><i className="bx bx-user-circle bx-sm text-primary" /></Link>
                </div>
            </div>
        </div>

    )


    const hideNavbar = () => (

        <div className="container d-flex justify-content-between align-items-center">

            <Link className="navbar-brand h1" to="/">
                <i className="bx bx-pulse bx-sm text-dark" />
                <span className="text-dark h4">4</span><span className="text-primary h4">Help</span>

            </Link>
            <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="navbar-toggler-success">
                <div className="flex-fill mx-xl-5 mb-2"></div>

                <Link className="nav-link" onClick={() => loginWithRedirect()} ><i className="bx bx-user-circle bx-sm text-primary" /></Link>

            </div>
        </div>


    )

    return (
        < nav id="main_nav" className="navbar navbar-expand-lg navbar-light bg-white shadow" >
            {
                isAuthenticated ? showNavbar() : hideNavbar()
            }
        </nav >

    )
}