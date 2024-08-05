import { Link, useNavigate } from 'react-router-dom';

import { useLogin } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';

const initialValues = { email: '', password: '' };

export default function Login() {
    const login = useLogin();
    const navigate = useNavigate();
    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, loginHandler);

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
                            <h2 className="text-center mb-4">Login</h2>
                            <div className="ticket-form-body">

                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    pattern="[^ @]*@[^ @]*"
                                    className="form-control"
                                    placeholder="someone@somewhere.com"
                                    value={values.email}
                                    onChange={changeHandler}
                                    required=""
                                />
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="login-password"
                                    className="form-control"
                                    value={values.password}
                                    onChange={changeHandler}
                                    required=""
                                />

                                <div className="col-lg-4 col-md-10 col-8 mx-auto">
                                    <button type="submit" className="form-control">
                                        Login
                                    </button>
                                </div>
                                <p></p>
                                <p className="field">
                                    <span>If you are not registered click <Link to="/register">here</Link></span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}