import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';


const Login = ({ login, isAuthenticated }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        login(email, password);
    };

    if (isAuthenticated) {
        navigate('/');
    }

    return (
        <div className="container mt-5">
            <h1>Sign In</h1>
            <p>Sign into your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group mt-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>

                <div className="form-group mt-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <button className="btn btn-primary mt-3" type="submit">Login</button>
            </form>

            <p className="mt-3">
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
            <p className="mt-3">
                Forgot password? <Link to="/reset-password">Reset Password</Link>
            </p>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
