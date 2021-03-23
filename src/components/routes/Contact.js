import React from 'react'
import emailjs from 'emailjs-com';
import Modal from 'react-awesome-modal';
import loadingSVG from '../../loading.svg';

let templateParams = {
    name: 'James',
    notes: 'Check this out!'
};



function Contact() {
    const [modalIsVisible, setModalIsVisible] = React.useState(false);
    const [modalIsLoading, setModalIsLoading] = React.useState(false);

    // const validateForm = (elements) => {
    //     for(let i = 0; i < elements.length-1; i++){
    //         console.log(elements[i]);
    //     }
    // }

    const formSubmit = (e) => {
        e.preventDefault(); 
        // validateForm(e.target.elements);
        setModalIsVisible(true);
        setModalIsLoading(true);
        emailjs.send('service_bloggerbit', 'template_37xkefh', 
        {
            name: e.target.elements.Name.value,
            email: e.target.elements.Email.value,
            youtube: e.target.elements.Youtube.value,
            telegramOrSkype: e.target.elements.TelegramOrSkype.value,
            message: e.target.elements.Message.value,
            to_name: 'Master Bogdanoff',

        }, 'user_iEqqw3ctYuGsBqEEr12Rg')
        .then((result) => {
            setModalIsLoading(false);
            console.log(result.text);
        }, (error) => {
            setModalIsVisible(false);
            setModalIsLoading(false);
            console.log(error.text);
        });

        console.log(e.target.elements.Name.value + ' ' + e.target.elements.Email.value);
    }
    
    return (
        <>
            <div className="half">
                <h2>Contact us</h2>
                <h3>Apply to become our influencer.​</h3>
                <form onSubmit={(e) => {formSubmit(e);}}>
                    <input type="text" placeholder="Name" name="Name" required/>
                    <input type="email" placeholder="Email" name="Email" required/>
                    <input type="url" placeholder="YouTube channel link (https://...)" name="Youtube" required/>
                    <input type="text" placeholder="Telegram or Skype id" name="TelegramOrSkype" required/>
                    <textarea type="textarea" rows="4" placeholder="Your message" name="Message" required/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className="half">
                <h3>Interested in working with us?</h3>
                <p>You can apply using the form on the left side of the website, note however that we will demand proofs and results from your previous ads to make sure you are trustworthy.</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <h3>Our telegrams:</h3>
                <ul>
                    <li>@coffeelake</li>
                    <li>@HOTEL_MOCKBA</li>
                </ul>
            </div>
            <Modal visible={modalIsVisible} width="400" height="300" effect="fadeInUp" onClickAway={() => setModalIsVisible(false)}>
                <div className="contact_modal" >
                    {modalIsLoading?
                    <>
                    <h2>The request is being processed...</h2>
                    <img src={loadingSVG} alt="loading" className="loading_spinner" />
                    </>
                    :
                    <>
                    <h2>The request was successfully submitted!</h2>
                    <a href="#" style={{color: "red"}} 
                    onClick={() => { 

                        setTimeout(() => {
                            setModalIsVisible(false); 
                        }, 200);
                    }}>OK</a>
                    </>
                    }
                </div>
            </Modal>
        </>
    )
}

export default Contact
