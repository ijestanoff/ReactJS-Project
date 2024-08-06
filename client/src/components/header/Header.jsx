import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';


export default function Header() {
    const { isAuthenticated, email } = useAuthContext();

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="/catalog">
                    Sunny Beach Live
                </Link>
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
                            <Link className="nav-link click-scroll" to="/catalog">Catalog</Link>
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
                        {isAuthenticated
                            ? (
                                <li className="nav-item">
                                    <Link className="nav-link click-scroll" to="/create">Add Artist</Link>
                                </li>
                            )
                            : (<></>)
                        }
                    </ul>
                    {isAuthenticated
                        ? (<>
                            <Link to="/logout" className="btn custom-btn d-lg-block d-none">Logout</Link>
                            <span style={{ fontSize: '14px', color: 'white', padding: '10px 25px' }}>Hello {email} </span>
                        </>
                        )
                        : (
                            <Link to="/login" className="btn custom-btn d-lg-block d-none">Sign Up</Link>
                        )
                    }
                </div>
            </div>
        </nav >
    );
}