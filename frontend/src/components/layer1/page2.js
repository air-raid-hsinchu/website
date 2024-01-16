import backgroundImg from '../../assets/images/1-1removebg.png';
import { useState, useEffect, useRef } from 'react';

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

            if (currentWidth / currentHeight > width / height) {
                const newWidth = currentHeight * width / height;
                setBgImgSize({ width: newWidth, height: currentHeight });
                setBgImgOffset({ x: window.scrollX + (currentWidth - newWidth) / 2, y: top });
            } else {
                const newHeight = currentWidth * height / width;
                setBgImgSize({ width: currentWidth, height: newHeight });
                setBgImgOffset({ x: window.scrollX, y: top + (currentHeight - newHeight) / 2 });
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
            </div>

        </>
    )
};

export default Page2;