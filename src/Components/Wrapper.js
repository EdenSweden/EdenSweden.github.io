import Header from './Header';
import Intro from'./Intro';
import Thumbnails from './Thumbnails';
import Contact from './Contact';
import '../Styles/Wrapper.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKiwiBird, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';



export default function Wrapper(){


return(
    <div id='app-wrapper' style={{backgroundImage: 'url("/Images/Roys-Peak.jpg")'}}>
        <Header />
        <div id='content-background'>
        <Intro />
        <Thumbnails />
        <Contact />
        <hr/>
        <footer id='page-footer'>Background photo by Shawn Tandon. <FontAwesomeIcon className='footer-icon' icon={faMapMarkedAlt}/>
         Roy's Peak, Wanaka, Aotearoa New Zealand. <FontAwesomeIcon className='footer-icon' icon={faKiwiBird}/></footer>
        </div>
    </div>


)


}