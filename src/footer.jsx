import HeroLogo from './assets/logo.png'

const Footer = () => {
return <section className="footer bg-dark text-light">
    <p></p>
<div className="container">
<div className="row">
    <div className="col-sm-4"><p></p><p></p>About Us<hr/>
        <img src={HeroLogo} alt='SenoHost' width={'150px'}></img><br></br>
        Samtech Solution Service Enterprise works with businesses to automate routine tasks, increasing 
        efficiency and reducing operational costs.
<p></p>
    </div>
    <div className="col-sm-4">


    </div>
    
    <div className="col-sm-4"><p><p></p></p><p></p>
        <div className="title">Contact Infrmation<hr/></div>
        
        

    </div>
</div>

</div>
<div className="container"><p></p><p></p>
   <div align="center"> (C)Copyright SenoHost Cloud 2025 Allright Reserve</div>
</div>

</section>

}


export default Footer;