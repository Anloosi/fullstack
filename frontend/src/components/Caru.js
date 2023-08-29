import 'bootstrap/dist/css/bootstrap.min.css';  
import {Carousel } from 'react-bootstrap';  
import logo1 from '../assets/logo1.jpg'   
import finnn from '../assets/finnn.jpg'
import fin from '../assets/fin.jpeg'


const Caru = () => {
    return (  
        <>  
        <div className='p-5'>  
        <Carousel variant="dark">  
      <Carousel.Item>  
      <img style={{maxHeight:"100vh"}}  
          className="d-block w-100"  
          src={fin}  
          alt="First slide"  
        />  
        <Carousel.Caption>  
          <h3>First Slider Image Title</h3>  
          <p>First Slide decription.</p>  
        </Carousel.Caption>  
      </Carousel.Item>  
      <Carousel.Item>  
        <img  
          className="d-block w-100"  
          src={finnn}  
          alt="Second slide"  
        />  
      
        <Carousel.Caption>  
          <h3>Second slide Image </h3>  
          <p>Second slide description</p>  
        </Carousel.Caption>  
      </Carousel.Item>  
      <Carousel.Item>  
        <img  
          className="d-block w-100"  
          src={logo1}  
          alt="Third slide"  
        />  
      
        <Carousel.Caption>  
          <h3>Third Slide Image</h3>  
          <p>Third Slide Description.</p>  
        </Carousel.Caption>  
      </Carousel.Item>  
    </Carousel>  
    </div>  
        </>  
      );  
    }  

export default Caru