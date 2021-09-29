import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import '../Styles/EmailForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import ReCAPTCHA from 'react-google-recaptcha';

export const EmailForm = () => {

    const form = useRef();
    const [result, showResult] = useState(false);
    const [formError, showFormError] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('prof_contact_service', 'email_form', form.current, 'user_hGedd0SbYsP8YADXxpd4M')
        .then((result) => {
            console.log(result.text);
            showResult(true);
            //hide result after 5s
            setTimeout(()=>{
                showResult(false);
            }, 5000);
            form.current.reset();

        }, (error) => {
            console.log(error.text);
            showFormError(true);
            setTimeout(()=>{
                showFormError(false);
            }, 5000);
        });
    };

        const onChange = value => {
            console.log('ReCAPTCHA value: ' + value);
        }
  
    return (
    <div id='email-form-container' aria-live='polite'>
        <div id='icons-container'>
        <FontAwesomeIcon icon={faEnvelope} className='email-icon'/>
        <FontAwesomeIcon icon={faEnvelopeOpenText} className='email-icon'/>
        </div>
        <p id='req-legend'>*required</p>
      <form id='form' ref={form} onSubmit={sendEmail}>
            <label className='form-label' htmlFor='name-field'>*Name: </label>
            <input className='form-input' type='text' name='from_name' id='name-field' required/>
            <label className='form-label' htmlFor='email-field'>*Email: </label>
            <input className='form-input' type='email' name='from_email' id='email-field' required/>
            <label className='form-label' htmlFor='phone_field' id='phone-label'>Phone: </label>
            <input className='form-input' type='tel' name='user_phone' id='phone-field' aria-labelledby='phone-label'/>
            <label className='form-label' htmlFor='message-field'>*Message: </label>
            <textarea className='form-input' name='message' id='message-field' rows='10' required/>
            <ReCAPTCHA id='recaptcha-widget' sitekey='6LckyHccAAAAAHMYwHxwI20tlwQ-hgGYx0iXAt28' onChange={onChange}/>
        <input type='submit' id='submit-button' value='Send message'/>
      </form>
      <div id='result-container'>{
            result ? <p>Your message has been sent.</p> : null
        }</div>
        <div id='error-container'>{
            formError ? <p>There was an error. Please try again.</p> : null
        }</div>
    </div>
    );
}