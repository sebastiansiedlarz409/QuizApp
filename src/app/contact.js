import './contact.css'
import React from 'react';

function Contact(props){
    const sendMail = () => {
        alert("ASD");
    }

    return(
        <div id="top" className="test_view">
            <form onSubmit={() => sendMail()}>
                <center>
                    <h2>Masz uwagi? Chcesz by poruszono jakieś zagadnienie? Napisz!</h2>
                    <div className='contact_field'>
                        <input className='contact_field_input' type="text" name="who" value='Kto' />
                    </div>
                    <div className='contact_field'>
                        <textarea className='contact_field_input' type="text" name='content'>Treść</textarea>
                    </div>
                    <input type="submit" className="button_style" value="Wyślij" />
                </center>
            </form>
        </div>
    );
}

export default Contact;