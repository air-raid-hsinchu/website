import { useEffect } from 'react';
import Parallax from 'parallax-js';
import titleImg from '../../assets/images/1-0-2.png'
import planeImg from '../../assets/images/1-0-1.png'
import backgroundImg from '../../assets/images/bg0.png'

const Page1 = ({ handleClick }) => {
    useEffect(() => {
        let scene = document.getElementById('scene');
        let parallaxInstance = new Parallax(scene, {
            relativeInput: true,
            pointerEvents: true,
        });
    }, []);

    return (
        <>
            <div
                className="d-flex justify-content-center align-items-center h-100 w-100"
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='d-flex justify-content-center align-items-center h-75 w-75' style={{minWidth: 900}}>
                    <div id="scene">
                        <div data-depth="0.3" id="planes">
                            <img src={planeImg} alt="planes" className="img-fluid" />
                        </div>

                        <div data-depth="0.15" id="text">
                            <img src={titleImg} alt="text" className="img-fluid" onClick={handleClick} />
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Page1;
