import React, {useState, useEffect}  from 'react';
import '../../styles/FooterStyle.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Footer() {
    
  // State
  const [isVisible, setisVisible] = useState(false);

  const scrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  const listenToScroll = () => {
    const heightToHidden = 1100;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    windowScroll > heightToHidden ? setisVisible(true) : setisVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
  });


  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className="text-center">
                <h5>Location</h5>
                <p>81/M,AK Mukherjee Rd,Palpara</p>
                <p>Baranagar,Kolkata,700090</p>
                <p>West Bengal</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className="text-center">
                <h5>Working Hours</h5>
                <p>Mon-Fri: 9:00AM - 10:00PM</p>
                <p>Saturday: 10:00AM - 8:30PM</p>
                <p>Sunday: 12:00PM - 5:00PM</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className="text-center">
                <h5>Order Now</h5>
                <p> Don't hesitate!</p>
                <p><Link to='tel:7364952251' className='calling'>7364952251</Link></p>
              </div>
            </Col>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className="text-center">
                <h5>Follow Us</h5>
                <p>Thank you for your given time!</p>
                <ul className='list-unstyled text-center mt-2'>
                  <li>
                    <Link to="sjana8901@gmail.com"> <i class='bi bi-envelope-fill'></i> </Link>
                  </li>
                  <li>
                    <Link to="https://www.linkedin.com/in/suman-jana-678334254/"> <i class='bi bi-linkedin'></i> </Link>
                  </li>
                  <li>
                    <Link to="https://github.com/sjana98"> <i class='bi bi-github'></i> </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className='copy_right'>
            <Col>
              <ul className='list-unstyled text-center mb-0'>
                <li>
                  <Link to="sjana8901@gmail.com"> © 2023 <span>Suman Jana.</span> All Rights Reserved </Link>
                </li>
                <li>
                  <Link to="sjana8901@gmail.com"> About Us </Link>
                </li>
                <li>
                  <Link to="sjana8901@gmail.com"> Terms Of Use </Link>
                </li>
                <li>
                  <Link to="sjana8901@gmail.com"> Privacy Policy </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>

      
      {/* Scroll to top */}
      {isVisible && (
        <div className="scroll_top" onClick={scrollTo}>
          <i class='bi bi-arrow-up'></i>
        </div>
      )}
    </>
  )
}

export default Footer