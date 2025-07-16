
import HeroLogo from './assets/logo.png';
import { Link } from 'react-router-dom';
import SignU from './assets/signu.jpg';
import BgHeader from './assets/bgheader.jpg';
import Footer from './footer';
const SignUp = () =>{
    return <section>
<nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src={HeroLogo} alt='' width={'150px'}></img></a>
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
<div className="container">
<div className="row">
    <img src={BgHeader} alt='' style={{height:'80px', width: 'full' }} />
<div className="col"></div>


</div>
<div className="row middle">
    <div className="col">
        <p></p><p></p><p></p>
<p></p><img src={SignU} alt='' width={'600px'}/>
    </div>
    <div className="col">
        <p></p><p></p>
        <div className="text-muted h3">Create Account</div>
        <br></br><div className="alert alert-primary">All fields are important kindly fill in your information</div><hr></hr><br></br>
        
        <form name='signup' action={''} id='signup' className='form'>
            <input name="firstname" type="text" placeholder="Enter FirstName" className='form-control' required/><br></br>
            <input name="lasstname" type="text" placeholder="Enter LastName" className='form-control' required/><br></br>
            Male: <input name="gender" type="checkbox" value={'Male'}/>{'\u00A0'}
           Female: <input name="gender" type="checkbox" value="Female"/><br></br><p></p>
           <input name="email" placeholder="Email Address" type="email" icon="mail" required className='form-control'/><br></br>
           <input name="password" type="password"placeholder="Enter Password" required className='form-control'/><br></br>
           <input name="dob" type="date" required placeholder="Enter Date of Birth" className='form-control'/><br></br>
           <input name="mobile" type="tel" required placeholder="Mobile Number" className='form-control'/><br></br><br></br>
<button name="submit" type="submit" className="btn btn-success">CREATE ACCOUNT</button>









        </form>



    </div>

</div>


</div>


<Footer></Footer>
    </section>

}



export default SignUp;
