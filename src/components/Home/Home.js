import React from 'react';
import './Home.css';
import banner from '../../images/banner.jpg'
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div className='homeContainer'>
            <div className="homeWrapper">
                <div className="bannerLeft">
                    <p>Sale up to 70% off</p>
                    <h1>New Collection For Fall</h1>
                    <h5 className='text-5xl font-bold text-red-500'>Discover all the new arrivals of ready-to-wear collection.</h5>
                    <Button variant="warning" >Shop Now</Button>
                    {/* <button>Shop Now</button> */}
                </div>
                <div className="bannerRight">
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home;
