import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';


export default function Footer() {
    const { isAuthenticated } = useAuthContext();

    return (
        <footer className="site-footer">
            <div className="site-footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <h2 className="text-white mb-lg-0">Sunny Beach Live</h2>
                        </div>
                        <div className="col-lg-6 col-12 d-flex justify-content-lg-end align-items-center">
                            <ul className="social-icon d-flex justify-content-lg-end">
                                <li className="social-icon-item">
                                    <Link to="https://twitter.com" className="social-icon-link">
                                        <span className="bi-twitter" />
                                    </Link>
                                </li>
                                <li className="social-icon-item">
                                    <Link to="https://apple.com" className="social-icon-link">
                                        <span className="bi-apple" />
                                    </Link>
                                </li>
                                <li className="social-icon-item">
                                    <Link to="https://instagram.com" className="social-icon-link">
                                        <span className="bi-instagram" />
                                    </Link>
                                </li>
                                <li className="social-icon-item">
                                    <Link to="https://youtube.com" className="social-icon-link">
                                        <span className="bi-youtube" />
                                    </Link>
                                </li>
                                <li className="social-icon-item">
                                    <Link to="https://pinterest.com" className="social-icon-link">
                                        <span className="bi-pinterest" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 mb-4 pb-2">
                        <h5 className="site-footer-title mb-3">Links</h5>
                        <ul className="site-footer-links">
                            <li className="site-footer-link-item">
                                <Link to="/" className="site-footer-link">Home</Link>
                            </li>
                            <li className="site-footer-link-item">
                                <Link to="/about" className="site-footer-link">About</Link>
                            </li>
                            <li className="site-footer-link-item">
                                <Link to="/catalog" className="site-footer-link">Artists</Link>
                            </li>
                            <li className="site-footer-link-item">
                                <Link to="schedule" className="site-footer-link">Schedule</Link>
                            </li>
                            <li className="site-footer-link-item">
                                <Link to="/pricing" className="site-footer-link">Pricing</Link>
                            </li>
                            {isAuthenticated
                                ? (<>
                                    <li className="site-footer-link-item">
                                        <Link to="/contact" className="site-footer-link">Festival</Link>
                                    </li>
                                    <li className="site-footer-link-item">
                                        <Link to="/create" className="site-footer-link">Add Artist</Link>
                                    </li>
                                    <li className="site-footer-link-item">
                                        <Link to="/logout" className="site-footer-link">Logout</Link>
                                    </li>
                                </>
                                )
                                : (
                                    <>
                                        <li className="site-footer-link-item">
                                            <Link to="/login" className="site-footer-link">Login</Link>
                                        </li>
                                        <li className="site-footer-link-item">
                                            <Link to="/register" className="site-footer-link">Register</Link>
                                        </li>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                        <h5 className="site-footer-title mb-3">Have a question?</h5>
                        <p className="text-white d-flex mb-1">
                            <Link to="tel: +359-888-666-777" className="site-footer-link">
                                +359-888-666-777
                            </Link>
                        </p>
                        <p className="text-white d-flex">
                            <Link to="mailto:sunnybeach@abv.bg" className="site-footer-link">
                                sunnybeach@abv.bg
                            </Link>
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-11 mb-4 mb-lg-0 mb-md-0">
                        <h5 className="site-footer-title mb-3">Location</h5>
                        <p className="text-white d-flex mt-3 mb-2">
                            Sunny Beach, Nessebar, Bulgaria</p>
                        <Link className="link-fx-1 color-contrast-higher mt-3" to="/catalog">
                            <span>Our Maps</span>
                            <svg className="icon" viewBox="0 0 32 32" aria-hidden="true"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx={16} cy={16} r="15.5" /><line x1={10} y1={18} x2={16} y2={12} /><line x1={16} y1={12} x2={22} y2={18} /></g></svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="site-footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-12 mt-5">
                            <p className="copyright-text">Copyright © 2024 Sunny Beach Live Company</p>
                        </div>
                        <div className="col-lg-8 col-12 mt-lg-5">
                            <ul className="site-footer-links">
                                <li className="site-footer-link-item">
                                    <Link to="/about" className="site-footer-link">Terms &amp; Conditions</Link>
                                </li>
                                <li className="site-footer-link-item">
                                    <Link to="/about" className="site-footer-link">Privacy Policy</Link>
                                </li>
                                {/* <li className="site-footer-link-item">
                                    <Link to="/about" className="site-footer-link">Your Feedback</Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}