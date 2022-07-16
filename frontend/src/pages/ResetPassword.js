import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../actions/auth';


const ResetPassword = ({ reset_password }) => {
  const navigate = useNavigate();

  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    email: ""
  })

  const { email } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    reset_password(email);
    setRequestSent(true);
  };

  if (requestSent) {
    navigate('/');
  }

  return (
    <div className="container mt-5">
      <h1>Request Password Reset</h1>
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
        <button className="btn btn-primary mt-3" type="submit">Reset Password</button>
      </form>
    </div>
  )
}

export default connect(null, { reset_password })(ResetPassword);

