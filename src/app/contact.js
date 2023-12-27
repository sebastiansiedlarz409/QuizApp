import './contact.css'
import React from 'react';

function Contact(props){

    const sendMail = () => {
        
    }

    return(
        <div id="top" className="test_view">
            <form onSubmit={() => sendMail()}>
                <center>
                    <h2>Masz uwagi? Chcesz by poruszono jakieś zagadnienie?</h2>
                    <h3>Napisz na adres: contact@inf04.com</h3>
                </center>
            </form>
        </div>
    );
}

export default Contact;