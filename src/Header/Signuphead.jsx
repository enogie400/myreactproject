
import { Link } from 'react-router-dom';
import Herologo from './logo.png';
function SignUp(){
    return <section>
<nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src={Herologo} alt='' width={'150px'}></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Contact">Contact</a>
        </li>
        <li className="nav-item">
            <a className='nav-link' href='/Services'>Service</a>
        </li>
        <li className="nav-item">
            <a className='nav-link' href='/Signup'>Sign Up</a>
        </li>
         <li className="nav-item">
            <Link className='nav-link' to='/Login'>Login</Link>
        </li>
      </ul>
      <form className="d-flex">
       <input className="form-control me-2" type="text" placeholder="Search"/>
        <button className="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
<div className="top"></div>

    </section>

}



export default SignUp;
