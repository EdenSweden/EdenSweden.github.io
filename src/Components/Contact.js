import '../Styles/Contact.css';
import { EmailForm } from './EmailForm';
import ScrollableAnchor from 'react-scrollable-anchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';


export default function Contact(){

    return(
        <>
            <ScrollableAnchor id='contact-anchor'>
            <h2 id='contact-header'>Get in touch!</h2>
            </ScrollableAnchor>
            <hr />
            <div id='contact-content'>
            <EmailForm />
            <div id='social-icons'>
                    <label htmlFor='social-link-1' className='contact-method' id='cv'>View my CV:</label>
                    <a aria-describedby='cv' aria-labelledby='cv' aria-label='Link to view my CV.' id='social-link-1' className='contact-icon' href='/Cope_CV.pdf' target='_blank' rel='noopener noreferrer'>
                        <div className='contact-icon-container'>
                            <FontAwesomeIcon icon={faFileAlt} id='cv-icon'/>
                        </div>
                    </a>
                    <label htmlFor='social-link-2' className='contact-method' id='gh'>See what I'm up to on Github! </label>
                    <a aria-describedby='gh' aria-labelledby='gh' aria-label='Github link' id='social-link-2' className='contact-icon' href='https://github.com/EdenSweden' target='_blank' rel='noopener noreferrer'>
                        <div className='contact-icon-container'>
                            <FontAwesomeIcon icon={faGithub} id='gh-icon'/>
                        </div>
                    </a>
                    <label htmlFor='social-link-3' className='contact-method' id='in'>Shoot me a message on LinkedIn: </label>
                    <a aria-describedby='in' aria-labelledby='in' aria-label='LinkedIn link' id='social-link-3' className='contact-icon' href='https://www.linkedin.com/in/edencope' target='_blank' rel='noopener noreferrer'>
                        <div className='contact-icon-container'>
                        <FontAwesomeIcon icon={faLinkedin} id='in-icon'/>
                        </div>
                    </a>
            </div>
            </div>
            <br/>
        </>
    )
}