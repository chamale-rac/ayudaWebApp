import React, { Fragment } from 'react';

import { Link } from 'react-router-dom'
export const Landing = () => (
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
                                    <h1 className="banner-heading h1 text-secondary display-3 mb-0 pb-5 mx-0 px-0 light-300 typo-space-line">
                                        Develop <strong>Strategies</strong> for
                                        <br />your business
                                    </h1>
                                    <p className="banner-body text-muted py-3 mx-0 px-0">
                                        Purple Buzz is a corporate HTML template with Bootstrap 5 Beta 1. This CSS template
                                        is 100% free to download provided by <a rel="nofollow" href="https://templatemo.com/page/1" target="_parent">TemplateMo</a>. Total 6
                                        HTML pages included in this template. Icon fonts by <a rel="nofollow" href="https://boxicons.com/" target="_blank">Boxicons</a>. Photos are from <a rel="nofollow" href="https://unsplash.com/" target="_blank">Unsplash</a> and <a rel="nofollow" href="https://icons8.com/" target="_blank">Icons 8</a>.
                                    </p>
                                    <Link className="banner-button btn rounded-pill btn-outline-primary btn-lg px-4" to="/log" role="button">Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="py-5 row d-flex align-items-center">
                                <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                    <h1 className="banner-heading h1 text-secondary display-3 mb-0 pb-3 mx-0 px-0 light-300">
                                        HTML CSS Template with Bootstrap 5 Beta 1
                                    </h1>
                                    <p className="banner-body text-muted py-3">
                                        You are not allowed to re-distribute this Purple Buzz HTML template as a
                                        downloadable ZIP file on any kind of Free CSS collection websites. This is strongly
                                        prohibited. Please contact TemplateMo for more information.
                                    </p>
                                    <Link className="banner-button btn rounded-pill btn-outline-primary btn-lg px-4" to="/log" role="button">Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="py-5 row d-flex align-items-center">
                                <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                    <h1 className="banner-heading h1 text-secondary display-3 mb-0 pb-3 mx-0 px-0 light-300">
                                        Cupidatat non proident, sunt in culpa qui officia
                                    </h1>
                                    <p className="banner-body text-muted py-3">
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
                                    </p>
                                    <Link className="banner-button btn rounded-pill btn-outline-primary btn-lg px-4" to="/log" role="button">Get Started</Link>
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