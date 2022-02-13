import React, { useEffect } from 'react'
import Footer from '../Footer'

function Influencer() {
    useEffect(() => {
      document.title = `Are you an influencer? | BLOGGERBIT`;
    }, []);
    return (
        <>
            <h1>Apply to become our influencer.</h1>
            <hr/>
            <h2>Interested in working with us?</h2>
            <p>You can apply using the form below, note however that we will require to confirm you are the owner of the channel applied.</p>
            <a href="https://docs.google.com/forms/d/1QISzBiak5K41UWrdryqwcK5XXaIRlguv9U5BTNJERkQ/" className="long_btn" target="_blank">Apply now</a>
            <Footer />
        </>
    )
}

export default Influencer
