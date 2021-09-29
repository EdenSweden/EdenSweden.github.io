import '../Styles/Thumbnails.css';
import { useRef, useState, useEffect } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { isMobile } from 'react-device-detect';

export default function Thumbnails(){


//to use relative positioning while making the caption go up, change height & margin-top at the same time. see:https://stackoverflow.com/questions/27451132/can-i-invert-the-height-direction-from-top-down-to-bottom-up

//also see: https://stackoverflow.com/questions/27451132/can-i-invert-the-height-direction-from-top-down-to-bottom-up

const projects = [{id: '1', imgSrc: '/Images/react-drum-pad-thumbnail.png', altText: 'thumbnail of drum pad app', caption: 'Interactive React Drum Pad', siteUrl: 'https://edensweden.github.io/react-drum-pad/', ghUrl: 'https://github.com/EdenSweden/react-drum-pad'}, {id: '2', imgSrc: '/Images/product-landing-pg-thumbnail.PNG', altText: 'thumbnail of product landing page', caption: 'Mock Product Landing Page', siteUrl: 'https://edensweden.github.io/Product-Landing-Page/', ghUrl: 'https://github.com/EdenSweden/Product-Landing-Page'}, {id: '3', imgSrc: '/Images/random-quote-generator-thumbnail.PNG', altText: 'thumbnail of random quote generator', caption: 'Random Quote Generator', siteUrl: 'https://edensweden.github.io/Random-Quote-Generator/', ghUrl: 'https://github.com/EdenSweden/Random-Quote-Generator'}, {id: '4', imgSrc: '/Images/github-markdown-thumbnail.png', altText: 'thumbnail of Github markdown previewer', caption: 'Github Markdown Previewer', siteUrl: 'https://edensweden.github.io/react-github-markdown-previewer/', ghUrl: 'https://github.com/EdenSweden/react-github-markdown-previewer'}, {id: '5', imgSrc: '/Images/technical-documentation-pg-thumbnail.PNG', altText: 'thumbnail of technical documentation page', caption: 'Technical Documentation Page', siteUrl: 'https://EdenSweden.github.io/Technical-Documentation-Page', ghUrl: 'https://github.com/EdenSweden/Technical-Documentation-Page'}, {id: '6', imgSrc: '/Images/dogs-survey-form-thumbnail.PNG', altText: 'thumbnail of dogs survey form', caption: 'Dogs Survey Form', siteUrl: 'https://EdenSweden.github.io/Dogs-Survey-Form', ghUrl: 'https://github.com/EdenSweden/Dogs-Survey-Form'}, {id: '7', imgSrc: '/Images/ada-lovelace-thumbnail.PNG', altText: 'thumbnail of Ada Lovelace tribute page', caption: 'Ada Lovelace Tribute Page', siteUrl: 'https://EdenSweden.github.io/Ada-Lovelace-Tribute-Page', ghUrl: 'https://github.com/EdenSweden/Ada-Lovelace-Tribute-Page'}];

const figureRef = useRef([]);
const captionRef = useRef([]);
const sliderRef = useRef();
const [nextButtonActive, setNextButtonActive] = useState(true);
const [prevButtonActive, setPrevButtonActive] = useState(false);
const scrollAmount = useRef();
const scrollFunction = useRef();
const reverseScrollFunction = useRef();



// On initial page render, calculate the scroll amount for one arrow click, based on current scrollLeft and the scrollWidth of one project element
useEffect(()=>{

    scrollAmount.current = sliderRef.current.scrollWidth / projects.length;
    
}, [projects.length]);

// Set the value of scrollFunction.current on first render
useEffect(()=>{
    
    scrollFunction.current = () => sliderRef.current.scroll(sliderRef.current.scrollLeft + scrollAmount.current, 0);
    reverseScrollFunction.current = () => sliderRef.current.scroll(sliderRef.current.scrollLeft-scrollAmount.current, 0);

}, [])


useEffect(()=>{

    let sliderRefValue = null;
    
    const enableOrDisableArrows = () => {
        //received eslint warning, so stored ref in a variable for the cleanup.
        
        const scrollDifference = sliderRef.current.scrollWidth - sliderRef.current.scrollLeft;
    
        const reverseScrollDifference = sliderRef.current.scrollWidth - scrollDifference;

        if(window.innerWidth >= 998){
            
            if(scrollDifference > (scrollAmount.current*2)){
                
                setNextButtonActive(true);

            } else if(scrollDifference <= (scrollAmount.current*2)){

                setNextButtonActive(false);
            }
            //if the window only allows one project visible at a time:
        } else if (window.innerWidth < 998){
        
            if(scrollDifference > (scrollAmount.current*1.5)){

                setNextButtonActive(true);

            } else if(scrollDifference <= (scrollAmount.current*1.5)){

                setNextButtonActive(false);
            }

        }
 
    if(reverseScrollDifference < scrollAmount.current){
        
        setPrevButtonActive(false);

    } else if(reverseScrollDifference >= scrollAmount.current){
    
        setPrevButtonActive(true);
    }

}

if(sliderRef){
    sliderRefValue = sliderRef.current;
}


sliderRef.current.addEventListener('scroll', enableOrDisableArrows);

    return()=> {
        sliderRefValue.removeEventListener('scroll', enableOrDisableArrows);
    }

}, []);



const handleNextArrowClick = () => {

    scrollFunction.current();
    
}

const handlePrevArrowClick = () => {

        reverseScrollFunction.current();
}


const captionActiveStyles = {

    height: '30%',
    marginTop: '60%',
    paddingTop: '0.5em',
    color: 'black',
    
}

const captionInactiveStyles = {
    
    height: 0,
    marginTop: '89%',
    paddingTop: 0,
    color: 'transparent',
    
}

const visibleCaptLinkStyles = {
    color: 'white',
    backgroundColor: 'black',
    border: '2px solid black',
    transition: 'background-color 0.2s, color 0.2s'
}

const invisibleCaptLinkStyles = {
    color: 'transparent',
    backgroundColor: 'transparent',
    border: '2px solid transparent',
    transition: 'background-color 0.2s, color 0.4s'
}



const handleMouseEnter = index => {

    let captionDOMStyleObject = captionRef.current[index].style;
    let firstLinkStyle = captionRef.current[index].children[0].children[0].style;
    let secondLinkStyle = captionRef.current[index].children[0].children[1].style;
    Object.assign(captionDOMStyleObject, captionActiveStyles);
    Object.assign(firstLinkStyle, visibleCaptLinkStyles);
    Object.assign(secondLinkStyle, visibleCaptLinkStyles);
  
}

const handleMouseLeave = (index) => {
    
    let captionDOMStyleObject = captionRef.current[index].style;
    let firstLinkStyle = captionRef.current[index].children[0].children[0].style;
    let secondLinkStyle = captionRef.current[index].children[0].children[1].style;
    Object.assign(captionDOMStyleObject, captionInactiveStyles);
    Object.assign(firstLinkStyle, invisibleCaptLinkStyles);
    Object.assign(secondLinkStyle, invisibleCaptLinkStyles);
}

const handleLinkHover = (e) => {
    
    e.target.style.color = 'black';
    e.target.style.backgroundColor = 'white';
    e.target.style.transition = 'color 0.5s, backgroundColor 0.5s';
}

const handleLinkExit = (e) => {
    
    e.target.style.color = 'white';
    e.target.style.backgroundColor = 'black';
    e.target.style.transition = 'color 0.5s, backgroundColor 0.5s';
}


return(
    <>
    <hr/>
    <ScrollableAnchor id='my-work-anchor'>
    <h2 id='my-work'>My Work</h2>
    </ScrollableAnchor>
    <hr/>
    <div id='arrows-and-projects-container'>
        <button id='prev-button' aria-label='previous arrow' onClick={handlePrevArrowClick} disabled={prevButtonActive ? false : true}><FontAwesomeIcon className={prevButtonActive ? 'arrow' : 'arrow-disabled'} id='prev-arrow' icon={ faArrowCircleLeft } /></button> 
    <div id='projects-container' ref={sliderRef} aria-label='scroll area for my projects'>
{projects.map((project, index)=> 

    <figure className='project' aria-label={project.caption + ' project.'} tabIndex='0' ref={(proj)=>figureRef.current[index] = proj} key={index} onMouseEnter={()=>handleMouseEnter(index)} onMouseLeave={()=>handleMouseLeave(index)} onFocus={()=>handleMouseEnter(index)} onBlur={()=>handleMouseLeave(index)} style={{backgroundColor: 'white', backgroundImage: 'url(' + project.imgSrc + ')', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} > 
        <figcaption className={isMobile ? 'active-caption' : 'inactive-caption'} ref={(capt)=>captionRef.current[index] = capt} key={index}>{project.caption}
            <div id="caption-links-container">
                <a className={ isMobile ? 'caption-link' : 'inactive-caption-link'} onMouseEnter={(e)=>handleLinkHover(e)} onMouseLeave={(e)=>handleLinkExit(e)} onFocus={(e)=>handleLinkHover(e)} onBlur={(e)=>handleLinkExit(e)} id="live-link" href={project.siteUrl} target='_blank' rel='noopener noreferrer'>Open live</a>
                <a className={ isMobile ? 'caption-link' : 'inactive-caption-link'} onMouseEnter={(e)=>handleLinkHover(e)} onMouseLeave={(e)=>handleLinkExit(e)} id="code-link" href={project.ghUrl} target='_blank' rel='noopener noreferrer'>View on Github</a>
            </div>
        </figcaption>
    </figure>)}   
</div>
<button id='next-button' aria-label='next arrow' onClick={handleNextArrowClick} disabled={nextButtonActive ? false : true}><FontAwesomeIcon className={nextButtonActive ? 'arrow' : 'arrow-disabled'} id='next-arrow' icon={ faArrowCircleRight } /></button>
</div>
<hr /> 
</>
)
}