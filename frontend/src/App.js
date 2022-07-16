import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './hocs/Layout';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Activate from './pages/Activate';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';

import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/activate/:uid/:token" element={<Activate />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
            </Routes>
          </Layout>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
