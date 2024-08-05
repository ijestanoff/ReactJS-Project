import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <section className="ticket-section section-padding">
            <div className="section-overlay" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-10 mx-auto">
                        <form
                            className="custom-form ticket-form mb-5 mb-lg-0"
                            action="#"
                            method="post"
                            role="form"
                        >
                            <h2 className="text-center mb-4">Register</h2>
                            <div className="ticket-form-body">

                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    pattern="[^ @]*@[^ @]*"
                                    className="form-control"
                                    placeholder="someone@somewhere.com"
                                    required=""
                                />
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="register-password"
                                    className="form-control"
                                    required=""
                                />
                                <label htmlFor="password">Confirm Password:</label>
                                <input
                                    type="password"
                                    name="rePassword"
                                    id="register-rePassword"
                                    className="form-control"
                                    required=""
                                />

                                <div className="col-lg-4 col-md-10 col-8 mx-auto">
                                    <button type="submit" className="form-control">
                                        Login
                                    </button>
                                </div>
                                <p></p>
                                <p className="field">
                                    <span>If you are already registered login <Link to="/login">here</Link></span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}