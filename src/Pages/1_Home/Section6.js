import React from 'react'
import { Container, Row, Carousel } from 'react-bootstrap';
import User1 from '../../assets/blog/review-author-1.jpg';
import User2 from '../../assets/blog/review-author-2.jpg';
import User3 from '../../assets/blog/review-author-3.jpg';
import User4 from '../../assets/blog/review-author-4.jpg';


function Section6() {
    return (
        <>
            <section className='blog_section'>
                <Container>
                    <Row>
                        <Carousel>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className="user_img">
                                        <img src={User1} alt="User-1" className='img-fluid' />
                                    </div>
                                    <p>
                                        " I can't get enough of these burgers! The variety of options is amazing, and they always arrive fresh and delicious.The delivery took longer than expected but ok.I'm a regular customer now. "
                                    </p>
                                    <div className="item_rating mb-2">
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star'></i>
                                    </div>
                                    <h5>Foodies111</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className="user_img">
                                        <img src={User2} alt="User-2" className='img-fluid' />
                                    </div>
                                    <p>
                                        " I tried their specialty burger, and it was a flavor explosion in my mouth! The quality of the ingredients is top-notch, and the presentation is impressive.The delivery is ok. "
                                    </p>
                                    <div className="item_rating mb-2">
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-half'></i>
                                    </div>
                                    <h5>FoodieGirl</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className="user_img">
                                        <img src={User3} alt="User-3" className='img-fluid' />
                                    </div>
                                    <p>
                                        " I ordered a burger expecting something fresh and healthy, but it was quite greasy and heavy. Not what I was looking for, and the delivery took shorter than expected. "
                                    </p>
                                    <div className="item_rating mb-2">
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star'></i>
                                    </div>
                                    <h5>HealthyEater123</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className="user_img">
                                        <img src={User4} alt="User-4" className='img-fluid' />
                                    </div>
                                    <p>
                                        " The burgers are good, but I wish they had more vegetarian options. The taste is great, though, and the delivery is always on time. I'm ok with the services.Me and my friends are regular customer. "
                                    </p>
                                    <div className="item_rating mb-2">
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5>BurgerLover55</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section6