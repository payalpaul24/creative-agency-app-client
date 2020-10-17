import React  from 'react'; 
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";
import carouselOne from "../../../images/carouselOne.png";
import carouselTwo from "../../../images/carouselTwo.png";
import carouselThree from "../../../images/carouselThree.png";
import carouselFour from "../../../images/carouselFour.png";
import carouselFive from "../../../images/carouselFive.png";


const OurWorks = () => {

        var settings = {  
          dots: true,  
          infinite: true,
          autoplaySpeed: 3000,  
          centerMode: true,  
          slidesToShow: 2,  
          slidesToScroll: 2  
        }
    
    return (
        <section style={{backgroundColor: '#111430',height:'500px'}} className="pb-4 mt-3">
            <div className="text-center p-5">
                <h2 className="text-light">Here are some of<span style={{ color: '#7AB259' }}> our works </span></h2>
            </div> 
            <div className='container' >          
            <Slider {...settings} >  
              <div className="wdt">  
              <img style={{height:'290px',width:'423px'}}  src={carouselOne} alt=""/>  
              </div>  
              <div className="wdt">  
              <img style={{height:'290px',width:'423px'}} src={carouselTwo} alt=""/>  
              </div>  
              <div className="wdt">  
              <img style={{height:'290px',width:'423px'}} src={carouselThree} alt=""/>  
              </div>  
              <div className="wdt">  
              <img style={{height:'290px',width:'423px'}} src={carouselFour} alt=""/>  
              </div >  
              <div className="wdt">  
              <img style={{height:'290px',width:'423px'}} src={carouselFive} alt=""/>  
              </div>    
            </Slider>  
            </div>
        </section>
    );
};

export default OurWorks;