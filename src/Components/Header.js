import '../Styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faLaptopCode, faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';

export default function Header () {




    return(
        <div id='header'>
            <div id='name-container'>
                <h1 id='name'>Eden Cope</h1>
                <FontAwesomeIcon icon={faGlobeAfrica} id='name-header-icon'/>
            </div>
            <div id="occupation-and-nav">
            <div id='occupation-container'>
            <h2 id='occupation'>Front-End Web Developer</h2>
            <FontAwesomeIcon icon={faLaptopCode} className='occupation-icons'/>
            <FontAwesomeIcon icon={faCodeBranch} className='occupation-icons'/>
            </div>
                <nav id='nav-container' role='navigation' aria-label='navigation menu'>
                    <ul id='nav-links-container'>
                        <li key='about'><a className='nav-link' href='#intro-anchor'>About</a></li>
                        <li key='my-work'><a className='nav-link' href='#my-work-anchor'>My Work</a></li>
                        <li key='contact'><a className='nav-link' href='#contact-anchor'>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}