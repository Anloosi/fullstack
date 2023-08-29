import 'bootstrap/dist/css/bootstrap.min.css';  
import {Carousel } from 'react-bootstrap';  
import logo1 from '../assets/logo1.jpg'   

//p-5 class
const Care = () => {
    return (  
        <>  
        <p> Lorem Ipsum is simply dummy text of the
           printing and typesetting industry. Lorem 
           Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown
             printer took a galley of type and
           scrambled it to make a type specimen book</p>
        <div className='p-1 m-1'> 
        <Carousel interval={5000}>  
      <Carousel.Item>  
      <img style={{maxHeight:"60vh"}}  
          className="d-block w-100"  
          src={logo1}  
          alt="First slide"  
        />  
        <Carousel.Caption>  
          <h3>First Pancake Image Title</h3>  
          <p>First Slide decription.</p>  
        </Carousel.Caption>  
      </Carousel.Item>  
      <Carousel.Item>  
        <img  style={{maxHeight:"60vh"}}
          className="d-block w-100"  
          src={logo1}  
          alt="Second slide"  
        />  
      
        <Carousel.Caption>  
          <h3>Second slide Image </h3>  
          <p>Second slide description</p>  
        </Carousel.Caption>  
      </Carousel.Item>  
      <Carousel.Item>  
        <img  style={{maxHeight:"60vh"}}
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

export default Care