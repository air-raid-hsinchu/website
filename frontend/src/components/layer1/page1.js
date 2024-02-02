import { useEffect, useState } from 'react';
import Parallax from 'parallax-js';
import titleImg from '../../assets/images/1-0-2.webp'
import mobileTitleImg from '../../assets/images/mobile_1-0-2.webp'
import mobilePlaneImg from '../../assets/images/mobile_1-0-1.webp'
import planeImg from '../../assets/images/1-0-1-ver2.webp'
import backgroundImg from '../../assets/images/bg0.webp'

const Page1 = ({ handleClick, isMobile }) => {
  useEffect(() => {
    let scene = document.getElementById("scene");
    let parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      pointerEvents: true,
    });
  }, []);

  return (
    <>
      {isMobile ? (
        <div
          className="d-flex justify-content-center align-items-center h-100 w-100"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="d-flex justify-content-center align-items-center h-75 w-75"
            style={{ minWidth: window.innerWidth * 0.9}}
          >
            <div id="scene">
              <div data-depth="0.3" id="planes">
                <img src={mobilePlaneImg} alt="planes" className="img-fluid" />
              </div>

              <div data-depth="0.15" id="main-title">
                <img
                  src={mobileTitleImg}
                  alt="text"
                  className="img-fluid"
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>
          <div
            onClick={handleClick}
            className="scroll-btn"
            style={{ top: window.innerHeight * 0.85 }}
          >
            <p className="scroll-btn-text">Scroll to Enter</p>
          </div>
        </div>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center h-100 w-100"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="d-flex justify-content-center align-items-center h-75 w-75"
            style={{ minWidth: 900 }}
          >
            <div id="scene">
              <div data-depth="0.3" id="planes">
                <img src={planeImg} alt="planes" className="img-fluid" />
              </div>

              <div data-depth="0.15" id="main-title">
                <img
                  src={titleImg}
                  alt="text"
                  className="img-fluid"
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>
          <div
            onClick={handleClick}
            className="scroll-btn"
            style={{ top: window.innerHeight * 0.8 }}
          >
            <p className="scroll-btn-text">Scroll to Enter</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Page1;
