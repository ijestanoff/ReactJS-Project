function App() {
    return (
        <>
            <main>
                {/* <header className="site-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-12 d-flex flex-wrap">
                                <p className="d-flex me-4 mb-0">
                                    <i className="bi-person custom-icon me-2" />
                                    <strong className="text-dark">Welcome to Sunny Beach Music Festival 2024</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </header> */}
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">
                            Sunny Beach Live
                        </a>
                        <a href="ticket.html" className="btn custom-btn d-lg-none ms-auto me-4">Buy Ticket</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">
                                <li className="nav-item">
                                    <a className="nav-link click-scroll" href="#section_1">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link click-scroll" href="#section_2">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link click-scroll" href="#section_3">Artists</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link click-scroll" href="#section_4">Schedule</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link click-scroll" href="#section_5">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link click-scroll" href="#section_6">Contact</a>
                                </li>
                            </ul>
                            <a href="ticket.html" className="btn custom-btn d-lg-block d-none">Buy Ticket</a>
                        </div>
                    </div>
                </nav>
                
                <section className="hero-section" id="section_1">
                    <div className="section-overlay" />
                    <div className="container d-flex justify-content-center align-items-center">
                        <div className="row">
                            <div className="col-12 mt-auto mb-5 text-center">
                                <small>Sunny Beach Live Presents</small>
                                <h1 className="text-white mb-5">Night Live 2024</h1>
                                <a className="btn custom-btn smoothscroll" href="#section_2">Let's begin</a>
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
                                            <a href="#" className="social-icon-link">
                                                <span className="bi-facebook" />
                                            </a>
                                        </li>
                                        <li className="social-icon-item">
                                            <a href="#" className="social-icon-link">
                                                <span className="bi-twitter" />
                                            </a>
                                        </li>
                                        <li className="social-icon-item">
                                            <a href="#" className="social-icon-link">
                                                <span className="bi-instagram" />
                                            </a>
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
                <section className="about-section section-padding" id="section_2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
                                <div className="services-info">
                                    <h2 className="text-white mb-4">About Sunny Beach Festival 2024</h2>
                                    <p className="text-white">Sunny Beach Festival Live is incredable.</p>
                                    <h6 className="text-white mt-4">Once in Lifetime Experience</h6>
                                    <p className="text-white">You are welcome.</p>
                                    <h6 className="text-white mt-4">Whole Night Party</h6>
                                    <p className="text-white">Please tell your friends about our website. Thank you.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="about-text-wrap">
                                    <img src="images/pexels-alexander-suhorucov-6457579.jpg" className="about-image img-fluid" />
                                    <div className="about-text-info d-flex">
                                        <div className="d-flex">
                                            <i className="about-text-icon bi-person" />
                                        </div>
                                        <div className="ms-4">
                                            <h3>a happy moment</h3>
                                            <p className="mb-0">your amazing festival experience with us</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="artists-section section-padding" id="section_3">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <h2 className="mb-4">Meet Artists</h2>
                            </div>
                            <div className="col-lg-5 col-12">
                                <div className="artists-thumb">
                                    <div className="artists-image-wrap">
                                        <img src="images/artists/joecalih-UmTZqmMvQcw-unsplash.jpg" className="artists-image img-fluid" />
                                    </div>
                                    <div className="artists-hover">
                                        <p>
                                            <strong>Name:</strong>
                                            Madona
                                        </p>
                                        <p>
                                            <strong>Birthdate:</strong>
                                            August 16, 1958
                                        </p>
                                        <p>
                                            <strong>Music:</strong>
                                            Pop, R&amp;B
                                        </p>
                                        <hr />
                                        <p className="mb-0">
                                            <strong>Youtube Channel:</strong>
                                            <a href="#">Madona Official</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-12">
                                <div className="artists-thumb">
                                    <div className="artists-image-wrap">
                                        <img src="images/artists/abstral-official-bdlMO9z5yco-unsplash.jpg" className="artists-image img-fluid" />
                                    </div>
                                    <div className="artists-hover">
                                        <p>
                                            <strong>Name:</strong>
                                            Rihana
                                        </p>
                                        <p>
                                            <strong>Birthdate:</strong>
                                            Feb 20, 1988
                                        </p>
                                        <p>
                                            <strong>Music:</strong>
                                            Country
                                        </p>
                                        <hr />
                                        <p className="mb-0">
                                            <strong>Youtube Channel:</strong>
                                            <a href="#">Rihana Official</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="artists-thumb">
                                    <img src="images/artists/soundtrap-rAT6FJ6wltE-unsplash.jpg" className="artists-image img-fluid" />
                                    <div className="artists-hover">
                                        <p>
                                            <strong>Name:</strong>
                                            Bruno Bros
                                        </p>
                                        <p>
                                            <strong>Birthdate:</strong>
                                            October 8, 1985
                                        </p>
                                        <p>
                                            <strong>Music:</strong>
                                            Pop
                                        </p>
                                        <hr />
                                        <p className="mb-0">
                                            <strong>Youtube Channel:</strong>
                                            <a href="#">Bruno Official</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="schedule-section section-padding" id="section_4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2 className="text-white mb-4">Event Schedule</h2>
                                <div className="table-responsive">
                                    <table className="schedule-table table table-dark">
                                        <thead>
                                            <tr>
                                                <th scope="col">Date</th>
                                                <th scope="col">Wednesday</th>
                                                <th scope="col">Thursday</th>
                                                <th scope="col">Friday</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Day 1</th>
                                                <td className="table-background-image-wrap pop-background-image">
                                                    <h3>Pop Night</h3>
                                                    <p className="mb-2">5:00 - 7:00 PM</p>
                                                    <p>By Adele</p>
                                                    <div className="section-overlay" />
                                                </td>
                                                <td style={{ backgroundColor: '#F3DCD4' }} />
                                                <td className="table-background-image-wrap rock-background-image">
                                                    <h3>Rock &amp; Roll</h3>
                                                    <p className="mb-2">7:00 - 11:00 PM</p>
                                                    <p>By Rihana</p>
                                                    <div className="section-overlay" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Day 2</th>
                                                <td style={{ backgroundColor: '#ECC9C7' }} />
                                                <td>
                                                    <h3>DJ Night</h3>
                                                    <p className="mb-2">6:30 - 9:30 PM</p>
                                                    <p>By Rihana</p>
                                                </td>
                                                <td style={{ backgroundColor: '#D9E3DA' }} />
                                            </tr>
                                            <tr>
                                                <th scope="row">Day 3</th>
                                                <td className="table-background-image-wrap country-background-image">
                                                    <h3>Country Music</h3>
                                                    <p className="mb-2">4:30 - 7:30 PM</p>
                                                    <p>By Rihana</p>
                                                    <div className="section-overlay" />
                                                </td>
                                                <td style={{ backgroundColor: '#D1CFC0' }} />
                                                <td>
                                                    <h3>Free Styles</h3>
                                                    <p className="mb-2">6:00 - 10:00 PM</p>
                                                    <p>By Members</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pricing-section section-padding section-bg" id="section_5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-12 mx-auto">
                                <h2 className="text-center mb-4">Plans, you' love</h2>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="pricing-thumb">
                                    <div className="d-flex">
                                        <div>
                                            <h3><small>Early Bird</small> $120</h3>
                                            <p>Including good things:</p>
                                        </div>
                                        <p className="pricing-tag ms-auto">Save up to <span>50%</span>
                                        </p></div>
                                    <ul className="pricing-list mt-3">
                                        <li className="pricing-list-item">platform for potential customers</li>
                                        <li className="pricing-list-item">digital experience</li>
                                        <li className="pricing-list-item">high-quality sound</li>
                                        <li className="pricing-list-item">standard content</li>
                                    </ul>
                                    <a className="link-fx-1 color-contrast-higher mt-4" href="ticket.html">
                                        <span>Buy Ticket</span>
                                        <svg className="icon" viewBox="0 0 32 32" aria-hidden="true"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx={16} cy={16} r="15.5" /><line x1={10} y1={18} x2={16} y2={12} /><line x1={16} y1={12} x2={22} y2={18} /></g></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 mt-4 mt-lg-0">
                                <div className="pricing-thumb">
                                    <div className="d-flex">
                                        <div>
                                            <h3><small>Standard</small> $240</h3>
                                            <p>What makes a premium Sunny Beach?</p>
                                        </div>
                                    </div>
                                    <ul className="pricing-list mt-3">
                                        <li className="pricing-list-item">platform for potential customers</li>
                                        <li className="pricing-list-item">digital experience</li>
                                        <li className="pricing-list-item">high-quality sound</li>
                                        <li className="pricing-list-item">premium content</li>
                                        <li className="pricing-list-item">live chat support</li>
                                    </ul>
                                    <a className="link-fx-1 color-contrast-higher mt-4" href="ticket.html">
                                        <span>Buy Ticket</span>
                                        <svg className="icon" viewBox="0 0 32 32" aria-hidden="true"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx={16} cy={16} r="15.5" /><line x1={10} y1={18} x2={16} y2={12} /><line x1={16} y1={12} x2={22} y2={18} /></g></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-section section-padding" id="section_6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-12 mx-auto">
                                <h2 className="text-center mb-4">Interested? Let's talk</h2>
                                <nav className="d-flex justify-content-center">
                                    <div className="nav nav-tabs align-items-baseline justify-content-center" id="nav-tab" role="tablist">
                                        <button className="nav-link active" id="nav-ContactForm-tab" data-bs-toggle="tab" data-bs-target="#nav-ContactForm" type="button" role="tab" aria-controls="nav-ContactForm" aria-selected="false">
                                            <h5>Contact Form</h5>
                                        </button>
                                        <button className="nav-link" id="nav-ContactMap-tab" data-bs-toggle="tab" data-bs-target="#nav-ContactMap" type="button" role="tab" aria-controls="nav-ContactMap" aria-selected="false">
                                            <h5>Google Maps</h5>
                                        </button>
                                    </div>
                                </nav>
                                <div className="tab-content shadow-lg mt-5" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-ContactForm" role="tabpanel" aria-labelledby="nav-ContactForm-tab">
                                        <form className="custom-form contact-form mb-5 mb-lg-0" action="#" method="post" role="form">
                                            <div className="contact-form-body">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <input type="text" name="contact-name" id="contact-name" className="form-control" placeholder="Full name" required />
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <input type="email" name="contact-email" id="contact-email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required />
                                                    </div>
                                                </div>
                                                <input type="text" name="contact-company" id="contact-company" className="form-control" placeholder="Company" required />
                                                <textarea name="contact-message" rows={3} className="form-control" id="contact-message" placeholder="Message" defaultValue={""} />
                                                <div className="col-lg-4 col-md-10 col-8 mx-auto">
                                                    <button type="submit" className="form-control">Send message</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="tab-pane fade" id="nav-ContactMap" role="tabpanel" aria-labelledby="nav-ContactMap-tab">
                                        <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29974.469402870927!2d120.94861466021855!3d14.106066818082482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd777b1ab54c8f%3A0x6ecc514451ce2be8!2sTagaytay%2C%20Cavite%2C%20Philippines!5e1!3m2!1sen!2smy!4v1670344209509!5m2!1sen!2smy" width="100%" height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                        {/* You can easily copy the embed code from Google Maps -> Share -> Embed a map // */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
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
                                        <a href="#" className="social-icon-link">
                                            <span className="bi-twitter" />
                                        </a>
                                    </li>
                                    <li className="social-icon-item">
                                        <a href="#" className="social-icon-link">
                                            <span className="bi-apple" />
                                        </a>
                                    </li>
                                    <li className="social-icon-item">
                                        <a href="#" className="social-icon-link">
                                            <span className="bi-instagram" />
                                        </a>
                                    </li>
                                    <li className="social-icon-item">
                                        <a href="#" className="social-icon-link">
                                            <span className="bi-youtube" />
                                        </a>
                                    </li>
                                    <li className="social-icon-item">
                                        <a href="#" className="social-icon-link">
                                            <span className="bi-pinterest" />
                                        </a>
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
                                    <a href="#" className="site-footer-link">Home</a>
                                </li>
                                <li className="site-footer-link-item">
                                    <a href="#" className="site-footer-link">About</a>
                                </li>
                                <li className="site-footer-link-item">
                                    <a href="#" className="site-footer-link">Artists</a>
                                </li>
                                <li className="site-footer-link-item">
                                    <a href="#" className="site-footer-link">Schedule</a>
                                </li>
                                <li className="site-footer-link-item">
                                    <a href="#" className="site-footer-link">Pricing</a>
                                </li>
                                <li className="site-footer-link-item">
                                    <a href="#" className="site-footer-link">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                            <h5 className="site-footer-title mb-3">Have a question?</h5>
                            <p className="text-white d-flex mb-1">
                                <a href="tel: 090-080-0760" className="site-footer-link">
                                    090-080-0760
                                </a>
                            </p>
                            <p className="text-white d-flex">
                                <a href="mailto:hello@company.com" className="site-footer-link">
                                    hello@company.com
                                </a>
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-11 mb-4 mb-lg-0 mb-md-0">
                            <h5 className="site-footer-title mb-3">Location</h5>
                            <p className="text-white d-flex mt-3 mb-2">
                                Silang Junction South, Tagaytay, Cavite, Philippines</p>
                            <a className="link-fx-1 color-contrast-higher mt-3" href="#">
                                <span>Our Maps</span>
                                <svg className="icon" viewBox="0 0 32 32" aria-hidden="true"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx={16} cy={16} r="15.5" /><line x1={10} y1={18} x2={16} y2={12} /><line x1={16} y1={12} x2={22} y2={18} /></g></svg>
                            </a>
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
                                        <a href="#" className="site-footer-link">Terms &amp; Conditions</a>
                                    </li>
                                    <li className="site-footer-link-item">
                                        <a href="#" className="site-footer-link">Privacy Policy</a>
                                    </li>
                                    <li className="site-footer-link-item">
                                        <a href="#" className="site-footer-link">Your Feedback</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default App;