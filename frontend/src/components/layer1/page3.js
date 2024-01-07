import img1 from "../../assets/images/1-2.jpg"; // 空襲底下的人民生活
import img2 from "../../assets/images/1-3.png"; // 二站新竹空襲地圖
import img3 from "../../assets/images/1-4.jpg"; // 黃旺成與踈開
import backgroundImg from "../../assets/images/bg1.png" // 背景圖片
import { useRef, useState } from "react";

const ImageCard = ({ imgSrc, imgAlt, imgText, size }) => {
    const imgRef = useRef(null);
    const [imgHeight, setImgHeight] = useState(0);
    const [imgWidth, setImgWidth] = useState(0);

    const handleLoad = () => {
        if (imgRef.current) {
            const { height, width } = imgRef.current;
            setImgHeight(height);
            setImgWidth(width);
            console.log(height, width)
        }
    };


    return (
        <div className="bg-image shadow-lg rounded p-0" style={{ height: imgHeight, width: imgWidth }}>
            <img
                ref={imgRef}
                onLoad={handleLoad}
                src={imgSrc}
                alt={imgAlt}
                style={{ maxHeight: size.mh, maxWidth: size.mw }}
            />
            <a href="#!">
                <div className="hover-overlay">
                    <div
                        className="bg-image mask d-flex justify-content-center align-items-center"
                        style={{ backgroundColor: "rgba(100, 100, 100, 0.8)", height: imgHeight, width: imgWidth }}
                    >
                        <pre className="text-white mb-1 fs-4 fw-bolder lh-sm">{imgText}</pre>
                    </div>
                </div>
            </a>
        </div>

    );
};

const Page3 = () => {
    return (
        <>
            <div
                className="container w-100 h-100"
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="row align-items-center h-100">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-4">
                            <ImageCard imgSrc={img1} imgAlt="空襲底下的人民生活" imgText={"︿\n空\n襲\n底\n下\n的\n人\n民\n生\n活\n﹀"} size={{ mh: '70vh', mw: '50vw' }} />
                        </div>
                        <div className="col-2"></div>
                        <div className="col-5 d-flex flex-column">
                            <div className="row">
                                <ImageCard imgSrc={img2} imgAlt="二站新竹空襲地圖" imgText="〈二站新竹空襲地圖〉" size={{ mh: '30vh', mw: '50vw' }} />
                            </div>

                            <div className="row mt-auto">
                                <ImageCard imgSrc={img3} imgAlt="黃旺成與踈開" imgText={"︿\n黃\n旺\n成\n與\n踈\n開\n﹀"} size={{ mh: '30vh', mw: '50vw' }} />
                            </div>
                        </div>
                        {/* <div className="col-1"></div> */}

                    </div>
                </div>


            </div>

        </>
    );
};

export default Page3;
