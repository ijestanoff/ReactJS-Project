import { Link, useNavigate } from 'react-router-dom';
import { useRegister } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';

const initialValues = { email: '', password: '', rePassword: '' };

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async (values) => {
        if (values.password != values.rePassword) {
            return setError('Password missmatch!');
        }

        if (values.password.length < 5) {
            return setError('Password must be at least 5 characters');
        }

        try {
            await register(values.email, values.password);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, registerHandler);

    return (
        <section className="ticket-section section-padding">
            <div className="section-overlay" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-10 mx-auto">
                        <form
                            className="custom-form ticket-form mb-5 mb-lg-0"
                            onSubmit={submitHandler}
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
                                    value={values.email}
                                    onChange={changeHandler}
                                    placeholder="someone@somewhere.com"
                                    required=""
                                />
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="register-password"
                                    className="form-control"
                                    value={values.password}
                                    onChange={changeHandler}
                                    required=""
                                />
                                <label htmlFor="password">Confirm Password:</label>
                                <input
                                    type="password"
                                    name="rePassword"
                                    id="register-rePassword"
                                    className="form-control"
                                    value={values.rePassword}
                                    onChange={changeHandler}
                                    required=""
                                />
                                {error && (
                                    <p>
                                        <span style={{ fontSize: '18px', color: 'red' }}>{error}</span>
                                    </p>
                                )}
                                <div className="col-lg-4 col-md-10 col-8 mx-auto">
                                    <button type="submit" className="form-control">
                                        Register
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