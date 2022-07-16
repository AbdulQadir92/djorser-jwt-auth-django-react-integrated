import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../actions/auth';


const Activate = ({ verify }) => {
    const navigate = useNavigate();
    const {uid, token} = useParams();
    const [verified, setVerified] = useState(false);

    const verifyAccount = () => {  
        verify(uid, token);
        setVerified(true);
    };

    if (verified) {
        navigate('/');
    }

    return (
        <div className="container mt-5">
           <div className="d-flex flex-column justify-content-center align-items-center">
                <h1>Verify your Account:</h1>
                <button 
                    type="button"
                    className="btn btn-primary mt-3"
                    onClick={verifyAccount}
                >Verify</button>
           </div>
        </div>
    )
}

export default connect(null, { verify })(Activate);

