import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <section className="hero-section" id="section_1">
            <div className="section-overlay" />
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-12 mt-auto mb-5 text-center">
                        <small>Sunny Beach Live Presents</small>
                        <h1 className="text-white mb-5">Night Live 2024</h1>
                        <Link className="btn custom-btn smoothscroll" to="/catalog">Let's begin</Link>
                    </div>
                    <div className="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
                        <div className="date-wrap">
                            <h5 className="text-white">
                                <i className="custom-icon bi-clock me-2" />
                                10 - 12<sup>th</sup>, Aug 2024
                            </h5>
                        </div>
                        <div className="location-wrap mx-auto py-3 py-lg-0">
                            <h5 className="text-white">
                                <i className="custom-icon bi-geo-alt me-2" />
                                Sunny Beach, Bulgaria
                            </h5>
                        </div>
                        <div className="social-share">
                            <ul className="social-icon d-flex align-items-center justify-content-center">
                                <span className="text-white me-3">Share:</span>
                                <li className="social-icon-item">
                                    <Link to="http://facebook.com" className="social-icon-link">
                                        <span className="bi-facebook" />
                                    </Link>
                                </li>
                                <li className="social-icon-item">
                                    <Link to="http://twitter.com" className="social-icon-link">
                                        <span className="bi-twitter" />
                                    </Link>
                                </li>
                                <li className="social-icon-item">
                                    <Link to="http://instagram.com" className="social-icon-link">
                                        <span className="bi-instagram" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="video-wrap">
                <video autoPlay loop muted className="custom-video" poster="">
                    <source src="video/pexels-2022395.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
}