import { Link } from "react-router-dom";
import img1 from "../../assets/images/1-2.jpg"; // 空襲底下的人民生活
import img2 from "../../assets/images/1-3.png"; // 二站新竹空襲地圖
import img3 from "../../assets/images/1-4.jpg"; // 黃旺成與踈開
import backgroundImg from "../../assets/images/bg21.png" // 背景圖片
import { useRef, useState, useEffect } from "react";

const ImageCard = ({ imgSrc, imgAlt, imgText, size, offset }) => {

    return (
        <div
            className="bg-image shadow-lg rounded p-0 image-card"
            style={{
                position: 'absolute',
                height: size.height,
                width: size.width,
                top: offset.y,
                left: offset.x,
                textAlign: 'center',
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
                    style={{ backgroundColor: "rgba(90, 90, 90, 0.5)", height: size.height, width: size.width }}
                >
                    <pre className="text-white mb-1 fs-2 fw-bolder lh-sm" style={{letterSpacing: 5, overflow: 'hidden', fontFamily: 'nstc' }}>{imgText}</pre>
                </div>
            </div>
        </div>

    );
};

const Page3 = () => {
    const containerRef = useRef(null);
    const [bgImgSize, setBgImgSize] = useState({ width: 0, height: 0 });
    const [bgImgOffset, setBgImgOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        window.addEventListener("resize", getBackgroundImageDimensions);
        getBackgroundImageDimensions()
        return () => {
            window.removeEventListener("resize", getBackgroundImageDimensions);
        };
    }, []);

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

    return (
        <>
            <div
                className="w-100"
                ref={containerRef}
                style={{
                    height: '120vh',
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <Link to='/detail2'>
                    <ImageCard
                        imgSrc={img1}
                        imgAlt="空襲底下的人民生活"
                        imgText={"︿\n空\n襲\n底\n下\n的\n人\n民\n生\n活\n﹀"}
                        size={{ height: bgImgSize.height * 0.876, width: bgImgSize.width * 0.353 }}
                        offset={{ y: bgImgOffset.y + bgImgSize.height * 0.062, x: bgImgOffset.x + bgImgSize.width * 0.054 }}
                    />
                </Link>
                <ImageCard
                    imgSrc={img2}
                    imgAlt="二站新竹空襲地圖"
                    imgText={"〈二戰新竹空襲地圖〉"}
                    size={{ height: bgImgSize.height * 0.426, width: bgImgSize.width * 0.423 }}
                    offset={{ y: bgImgOffset.y + bgImgSize.height * 0.055, x: bgImgOffset.x + bgImgSize.width * 0.523 }}
                />
                <ImageCard
                    imgSrc={img3}
                    imgAlt="黃旺成與踈開"
                    imgText={"︿\n黃\n旺\n成\n與\n踈\n開\n﹀"}
                    size={{ height: bgImgSize.height * 0.375, width: bgImgSize.width * 0.135 }}
                    offset={{ y: bgImgOffset.y + bgImgSize.height * 0.56, x: bgImgOffset.x + bgImgSize.width * 0.525 }}
                />
               
            </div>

        </>
    );
};

export default Page3;