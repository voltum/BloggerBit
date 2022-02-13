import React, { useEffect } from 'react'
import btcimg from '../../img/main_btc.jpg';
import Footer from '../Footer'

function Home() {
    useEffect(() => {
      document.title = `Home | BLOGGERBIT`;
    }, []);
    return (
        <>
            <h1>Achieve marketing success with BloggerBit.</h1>
            <hr/>
            <img src={btcimg} style={{height:"225px",objectFit:"cover"}} />
            <h3>Welcome to our world!</h3>
            <p>
            Our mission is to help you and your project achieve success, receive exposure and bring a lot of new potential clients.
With our 5 years of experience in marketing industry and hundreds of positive executed campaigns, we are pretty confident that our services are currently the best on the crypto market.
            </p>
            <Footer />
        </>
    )
}

export default Home
