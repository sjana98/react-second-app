import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Burger from '../../assets/hero/hero-2.png';
import { Link } from 'react-router-dom';

function Section1() {
    return (
        <section className='hero_section'>
            <Container>
                <Row>
                    <Col lg={7} className='mb-5 mb-lg-0'>
                        <div className='position-relative'>
                            <img src={Burger} className='img-fluid' alt="HeroBanner" />
                            <div className="price_badge">
                                <div className="badge_text">
                                    <h4 className='h4_xs'>Only</h4>
                                    <h4 className='h3_lg'>₹139</h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="hero_text text-center">
                            <h1 className='text-white'>New Burger</h1>
                            <h2 className='text-white'>With Loaded Chicken</h2>
                            <p className='text-white pt-2 pb-4'>
                             "Flavor Meets Freshness, Only at Tasty Burger 'Your Burger' Destination. Delicious Burgers, Delivered Fast - Satisfy Your Cravings with Every Bite, Right at Your Doorstep!"
                            </p>
                            <Link to='/' className='btn order_now'>
                                Order Now
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Section1;