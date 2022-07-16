import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1 className="display-4">Welcome to Djoser JWT Authentication System</h1>
        <p className="lead">This is Djoser JWT based authentication system that has production level features</p>
        <hr className="my-4" />
        <p>Click the login button</p>
        <Link className="btn btn-primary btn-lg" to="/login" role="button">Login</Link>
      </div>
    </div>
  )
}

export default Home
