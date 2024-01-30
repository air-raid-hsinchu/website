import { Element } from 'react-scroll';
import '../../assets/styles/layer1.css';
import { Fade } from '@mui/material';
import { useState, useEffect, useRef, createRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import UnderConstruction from '../underConstruction';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';
import Page5 from './page5';
import Page6 from './page6';
import SocialBar from '../socialBar';

const fadeInOptions = {
    timeout: { enter: 1000, exit: 0 }
}

const pageNum = 6;

const Layer1 = () => {
    const [isMobile, setIsMobile] = useState(false);
    const elementRefs = useRef(Array(pageNum).fill().map(() => createRef()));
    const [isInViewPort, setIsInViewPort] = useState(Array(pageNum).fill(false));
    const location = useLocation();

    useEffect(() => {
        setIsMobile(window.innerHeight > window.innerWidth);
        handleLoad();
        window.addEventListener('resize', () => {
            handleLoad();
            setIsMobile(window.innerHeight > window.innerWidth);
        });
    }, [elementRefs.current])

    const handleLoad = () => {
        if (location.state && location.state.section) {
            const section = location.state.section;
            const sectionElement = document.getElementById(`section${section}`);
            if (sectionElement) {
                sectionElement.scrollIntoView({ block: 'start' });
            }
            setIsInViewPort((prev) => {
                const newState = [...prev];
                newState[section - 1] = true;

                return newState;
            });
        }

        elementRefs.current.forEach((elementRef) => {
            const observer = new IntersectionObserver(([entry]) => {
                setIsInViewPort((prev) => {
                    const newState = [...prev];
                    newState[elementRefs.current.indexOf(elementRef)] = entry.isIntersecting;

                    return newState;
                });
            });
            if (elementRef.current) {
                observer.observe(elementRef.current);
            }
        });
    }

    const scrollToSection2 = () => {
        const section2 = document.getElementById('section2');

        if (section2) {
            section2.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };



    return (
        <>
            {isMobile && false ? <UnderConstruction /> :
                <div>

                    <Fade in={(isInViewPort[3] || isInViewPort[4] || isInViewPort[5])} timeout={fadeInOptions.timeout}>
                        <div>
                            <SocialBar />
                        </div>

                    </Fade>
                    <div className='background'>

                        <Element id="section1" >
                            <Fade in={isInViewPort[0]} timeout={fadeInOptions.timeout}>
                                <div ref={elementRefs.current[0]} className='page-container'>
                                    <Page1 handleClick={scrollToSection2} isMobile={isMobile}/>
                                </div>
                            </Fade>
                        </Element>
                        <Element id="section2">
                            <Fade in={isInViewPort[1]} timeout={fadeInOptions.timeout}>
                                <div ref={elementRefs.current[1]} className='page-container'>
                                    <Page2 isMobile={isMobile}/>
                                </div>
                            </Fade>

                        </Element>
                        <Element id="section3">
                            <Fade in={isInViewPort[2]} timeout={fadeInOptions.timeout}>
                                <div ref={elementRefs.current[2]} className='page-container'>
                                    <Page3 isMobile={isMobile}/>
                                </div>
                            </Fade>
                        </Element>
                        <Element id="section4">
                            <Fade in={isInViewPort[3]} timeout={fadeInOptions.timeout}>
                                <div ref={elementRefs.current[3]} className='page-container'>
                                    <Page4 isMobile={isMobile}/>
                                </div>
                            </Fade>
                        </Element>
                        <Element id="section5">
                            <Fade in={isInViewPort[4]} timeout={fadeInOptions.timeout}>
                                <div ref={elementRefs.current[4]} className='page-container'>
                                    <Page5 />
                                </div>
                            </Fade>
                        </Element>
                        <Element id="section6" className='mb-0'>
                            <Fade in={isInViewPort[5]} timeout={fadeInOptions.timeout}>
                                <div ref={elementRefs.current[5]} className='page-container'>
                                    <Page6 />
                                </div>
                            </Fade>
                        </Element>


                    </div>
                </div>
            }
        </>
    );
};

export default Layer1;