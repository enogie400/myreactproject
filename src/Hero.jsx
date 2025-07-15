import HeroPpseo from './assets/ppseo.jpeg'
import HeroPpj from './assets/ppj.jpg'
import HeroPphost from './assets/pphost.webp'
import './jss/bootstrap.bundle.min.js'


const Hero = () => {
    return <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <div className="img-responsive">
                    <div id="demo" className="carousel slide" data-bs-ride="carousel">

  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={HeroPpseo} alt="Los Angeles" className="d-block" width={'100%'} />
    </div>
    <div className="carousel-item">
      <img src={HeroPpj} alt="Chicago" className="d-block" width={'100%'}/>
    </div>
    <div className="carousel-item">
      <img src={HeroPphost} alt="New York" className="d-block" width={'100%'}/>
    </div>
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
                </div>
                <p></p><p></p><p></p><br></br>
                <h1><strong><font color='blue'></font></strong></h1>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <h2 className='text'>Who We Are</h2><br></br>
Samtech Solution Service Enterprise works with businesses to automate routine tasks, increasing efficiency and reducing operational costs. 
This can involve implementing workflow automation, robotic process automation<br></br><br></br>
<button name='readmore' type='none' className='btn btn-primary'>Read More</button>
                        </div>
                        <div className="col-sm-4">
                            <h2 className='text'>Mission</h2><br></br>
                            Samtech Solution Services is dedicated to helping enterprises navigate the complexities of today’s rapidly evolving technological landscape. With a focus on innovation, customer 
                            satisfaction, and delivering results.<br></br><br></br>
<button name='readmore' type='none' className='btn btn-primary'>Read More</button>
                        </div>
                        <div className="col-sm-4">
                            <h2 className='text'>Vission</h2><br></br>
With a strong focus on innovation, efficiency, and customer satisfaction, Samtech has established itself as a trusted partner for businesses looking to harness the power of technology to streamline 
operations, improve performance, and achieve long-term success.<br></br><br></br>
<button name='readmore' type='none' className='btn btn-primary'>Read More</button>
                        </div>
                    </div>

                    
                </div>

 
            </div>
            
        </div>
    </section>
}


export default Hero;