import { Link } from 'react-router-dom';

export default function Header() {
    return (
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
                            <Link className="nav-link click-scroll" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link click-scroll" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link click-scroll" to="/catalog">Artists</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link click-scroll" to="/schedule">Schedule</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link click-scroll" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link click-scroll" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <Link to="/login" className="btn custom-btn d-lg-block d-none">Sign Up</Link>
                </div>
            </div>
        </nav>
    );
}