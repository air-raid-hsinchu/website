import backgroundImg from '../../assets/images/1-1removebg.png';
import newsImg from '../../assets/images/1-1-1.png';
import MdfkImg from '../../assets/images/1-1-2.png';
import { useState, useEffect, useRef } from 'react';

const ImageCard = ({ imgSrc, imgAlt, imgText, size, offset, rotate }) => {

    return (
        <div
            className="bg-image shadow-lg rounded p-0"
            style={{
                position: 'absolute',
                height: size.height,
                width: size.width,
                top: offset.y,
                left: offset.x,
                textAlign: 'center',
                transform: rotate,
            }}
        >
            <img
                src={imgSrc}
                alt={imgAlt}
                style={{ width: size.width, height: size.height }}
            />
            <div className="hover-overlay">
                <div
                    className="bg-image mask d-flex justify-content-center align-items-center"
                    style={{ backgroundColor: "rgba(90, 90, 90, 0.3)", height: size.height, width: size.width }}
                >
                    <pre className="text-white mb-1 fs-2 fw-bolder lh-sm" style={{ overflow: 'hidden', fontFamily: 'nstc' }}>{imgText}</pre>
                </div>
            </div>
        </div>

    );
};


const Page2 = () => {
    const containerRef = useRef(null);
    const [bgImgSize, setBgImgSize] = useState({ width: 0, height: 0 });
    const [bgImgOffset, setBgImgOffset] = useState({ x: 0, y: 0 });

    const getBackgroundImageDimensions = () => {
        const container = containerRef.current;
        const currentWidth = container.offsetWidth;
        const currentHeight = container.offsetHeight;

        const img = new Image();
        img.src = backgroundImg;

        img.onload = () => {
            const width = img.width;
            const height = img.height;
            const top = container.offsetTop;
            const left = container.offsetLeft;

            if (currentWidth / currentHeight > width / height) {
                const newWidth = currentHeight * width / height;
                setBgImgSize({ width: newWidth, height: currentHeight });
                setBgImgOffset({ x: left + window.scrollX + (currentWidth - newWidth) / 2, y: top });
            } else {
                const newHeight = currentWidth * height / width;
                setBgImgSize({ width: currentWidth, height: newHeight });
                setBgImgOffset({ x: left + window.scrollX, y: top + (currentHeight - newHeight) / 2 });
            }
        };
    };

    useEffect(() => {
        window.addEventListener("resize", getBackgroundImageDimensions);
        getBackgroundImageDimensions()
        return () => {
            window.removeEventListener("resize", getBackgroundImageDimensions);
        };
    }, [])

    return (
        <>
            <div
                ref={containerRef}
                className="w-100 h-100"
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <ImageCard
                    imgSrc={newsImg}
                    imgAlt="展覽簡介"
                    imgText={"展覽簡介"}
                    size={{ height: bgImgSize.height * 0.495, width: bgImgSize.width * 0.213 }}
                    offset={{ y: bgImgOffset.y + bgImgSize.height * 0.182, x: bgImgOffset.x + bgImgSize.width * 0.326 }}
                    rotate='rotate(-7deg)'
                />
                <img
                    src={MdfkImg}
                    alt={"mdfk"}
                    style={{ 
                        height: bgImgSize.height * 0.424, 
                        width: bgImgSize.width * 0.191,
                        top: bgImgOffset.y + bgImgSize.height * 0.576,
                        left: bgImgOffset.x + bgImgSize.width * 0.428,
                        position: 'absolute',
                    }}
                />
            </div>

        </>
    )
};

export default Page2;