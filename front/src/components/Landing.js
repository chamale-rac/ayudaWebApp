import React, { Fragment } from 'react';

import { useAuth0 } from '@auth0/auth0-react';


import { Link } from 'react-router-dom'
export const Landing = () => {

    const { loginWithRedirect, logout } = useAuth0();
    return (
        <Fragment>
            <div className="banner-wrapper bg-light">
                <div id="index_banner" className="banner-vertical-center-index container-fluid pt-5">
                    {/* Start slider */}
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" />
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} />
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} />
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="py-5 row d-flex align-items-center">
                                    <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                        <h1 className="banner-heading h1 text-secondary display-3 mb-0 pb-3 mx-0 px-0 light-300">
                                            <strong>Ayuda</strong> a
                                            <br />los demás.
                                        </h1>

                                        <Link className="banner-button btn rounded-pill btn-outline-primary btn-lg px-4" onClick={() => loginWithRedirect()} role="button">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="py-5 row d-flex align-items-center">
                                    <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                        <h1 className="banner-heading h1 text-secondary display-3 mb-0 pb-3 mx-0 px-0 light-300">
                                            Solicita<br /><strong> ayuda</strong>.
                                        </h1>

                                        <Link className="banner-button btn rounded-pill btn-outline-primary btn-lg px-4" onClick={() => loginWithRedirect()} role="button">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="py-5 row d-flex align-items-center">
                                    <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                        <h1 className="banner-heading h1 text-secondary display-3 mb-0 pb-3 mx-0 px-0 light-300">
                                            Sigue para <br /><strong> ayudar</strong>.
                                        </h1>

                                        <Link className="banner-button btn rounded-pill btn-outline-primary btn-lg px-4" onClick={() => loginWithRedirect()} role="button">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev text-decoration-none" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                            <i className="bx bx-chevron-left" />
                            <span className="visually-hidden">Previous</span>
                        </a>
                        <a className="carousel-control-next text-decoration-none" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                            <i className="bx bx-chevron-right" />
                            <span className="visually-hidden">Next</span>
                        </a>
                    </div>
                    {/* End slider */}
                </div>
            </div>

        </Fragment>
    )
}