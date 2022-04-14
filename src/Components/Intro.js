import '../Styles/Intro.css';
import ScrollableAnchor from 'react-scrollable-anchor';

export default function Intro(){


return(
    <>
    <ScrollableAnchor id='intro-anchor'>
    <h2 id='intro-header'>About</h2>
    </ScrollableAnchor>
    <hr/>
    <div id='intro-content'>
            <p className='intro-text' id='p1'> Hi, I'm Eden. I am a self-taught front-end web developer from Utah, currently based in Salt Lake City, Utah. I come from a social sciences background, but I decided to pursue coding!</p>
            <p className='intro-text' id='p2'>I have been working with HTML5, CSS3 and JavaScript, as well as React.js, React-Redux, Bootstrap, plus a little Sass and jQuery.</p>
            <p className='intro-text' id='p3'>Aside from developing websites and applications, I love the outdoors, hiking and learning about plants and wildlife. I also love learning foreign languages.</p>
            <img className='profile-img' alt='Eden&apos;s face with a blue background' src='/Images/profile_photo.jpg'/>  
    </div>
    </>
)}