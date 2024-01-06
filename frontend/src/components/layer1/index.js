import { Element } from 'react-scroll';
import '../../assets/styles/layer1.css';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';
import Page5 from './page5';
import Page6 from './page6';

const Layer1 = () => {
    const scrollToSection2 = () => {
        const section2 = document.getElementById('section2');

        if (section2) {
            section2.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <>
            <div className='background'>
                <Element id="section1" className="element" >
                    <div className='page-container'>
                        <Page1 handleClick={scrollToSection2} />
                    </div>
                </Element>

                <Element id="section2" className='element'>
                    <div className='page-container'>
                        <Page2 />
                    </div>
                </Element>
                <Element id="section3" className='element'>
                    <div className='page-container'>
                        <Page3 />
                    </div>
                </Element>
                <Element id="section4" className='element'>
                    <div className='page-container'>
                        <Page4 />
                    </div>
                </Element>
                <Element id="section5" className='element'>
                    <div className='page-container'>
                        <Page5 />
                    </div>
                </Element>
                <Element id="section6" className='element mb-0'>
                    <div className='page-container'>
                        <Page6 />
                    </div>
                </Element>
            </div>
        </>
    );
};

export default Layer1;
