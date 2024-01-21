import mapImg from "../../assets/images/2-3 背景圖.png";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fade } from "@mui/material";
import { Transition } from "react-transition-group";

const fadeInOptions = {
    timeout: { enter: 1000, exit: 0 },
};

const MapPin = ({ offset, size, data, field, isHover, infoPosition }) => {
    const pinSize = 10;

    return (
        <Transition in={isHover} timeout={500}>
            <>
                <div
                    style={{
                        left: offset.x,
                        top: offset.y,
                        width: pinSize,
                        height: pinSize,
                        position: 'absolute',
                        borderRadius: pinSize,
                        backgroundColor: 'red',
                    }}
                />

                <div className={
                    isHover ?
                        "d-flex flex-column justify-content-center align-items-center text-white"
                        :
                        "d-flex flex-column justify-content-center align-items-center text-black"
                }
                    style={{
                        left: offset.x + pinSize + 5,
                        top: offset.y - size.height / 2 + pinSize / 2,
                        width: size.width,
                        height: size.height,
                        position: 'absolute',
                        transition: 'all 0.5s ease-in-out',
                        zIndex: 1,
                    }}
                >
                    <pre
                        style={{
                            marginBottom: 0,
                            overflow: 'visible',
                            fontSize: '1.5rem',
                            ...(isHover ? { fontFamily: 'shstc-bold', WebkitTextStroke: '.3px black' } : { fontFamily: 'shstc-semibold', WebkitTextStroke: '.5px grey' })
                        }}
                    >
                        {data.landmark}
                    </pre>
                    {(isHover && data.subLandmark) && (
                        <>
                            {data.subLandmark.map((item, index) => (
                                <pre key={index} style={{
                                    fontSize: '1.2rem',
                                    overflow: 'visible',
                                    marginBottom: 0,
                                    fontFamily: 'shstc-semibold',
                                }}>{item}</pre>
                            ))}
                        </>
                    )}
                </div>

                {field && (
                    <div
                        style={{
                            left: field.x,
                            top: field.y,
                            width: field.width,
                            height: field.height,
                            position: 'absolute',
                            transform: field.rot,
                            backgroundColor: 'rgba(199, 111, 122, 0.5)',
                            zIndex: 0,
                        }}
                    ></div>
                )}

                {(isHover && data.date && data.description) && (
                    <div
                        style={{
                            width: window.innerWidth * 0.16,
                            height: window.innerHeight * 0.3,
                            position: 'absolute',
                            top: infoPosition.y,
                            left: infoPosition.x,

                        }}
                    >
                        <div
                            style={{
                                display: 'inline-block',
                                fontFamily: 'shstc-semibold',
                                fontSize: '1.5rem',
                                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                transition: 'all 0.5s ease-in-out',
                                marginBottom: 10,
                            }}
                        >
                            {data.date}
                        </div>
                        <pre
                            style={{
                                fontFamily: 'shstc-semibold',
                                fontSize: '1.2rem',
                                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                transition: 'all 0.5s ease-in-out',
                                textWrap: 'wrap',
                            }}
                        >
                            {data.description}
                        </pre>
                    </div>
                )}
            </>
        </Transition>
    )
}

const Page23 = () => {
    const mapRef = useRef(null);
    const [bgImgSize, setBgImgSize] = useState({ width: 0, height: 0 });
    const [bgImgOffset, setBgImgOffset] = useState({ x: 0, y: 0 });
    const [hover, setHover] = useState(0);

    useEffect(() => {
        window.addEventListener("resize", getBackgroundImageDimensions);
        getBackgroundImageDimensions()
        return () => {
            window.removeEventListener("resize", getBackgroundImageDimensions);
        };
    }, []);


    const getBackgroundImageDimensions = () => {
        const currentWidth = window.innerWidth;

        const img = new Image();
        img.src = mapImg;

        img.onload = () => {
            const width = img.width;
            const height = img.height;

            setBgImgSize({ width: currentWidth, height: currentWidth * height / width });
        };
        if (mapRef.current) {
            setBgImgOffset({ x: mapRef.current.offsetLeft, y: mapRef.current.offsetTop });
        }
    };

    return (
        <Fade in={true} timeout={fadeInOptions.timeout}>
            <div className='background d-flex align-items-start'>
                <div
                    ref={mapRef}
                    className='map'
                    style={{
                        height: bgImgSize.height,
                        width: bgImgSize.width,
                    }}
                >
                    <Link state={{ section: 3 }} to="/">
                        <div className="homelink">
                            <i className="fa-solid fa-arrow-left-long" /> Back to List
                        </div>
                    </Link>
                    <div className="d-flex align-items-center justify-content-center position-sticky"
                        style={{
                            top: window.innerHeight * 0.1,
                            left: 0,
                            width: '100%',
                        }}
                    >
                    <div
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            fontFamily: 'shstc-semibold',
                            color: 'black',
                            fontSize: '1.5rem',
                            paddingInline: 23,
                            letterSpacing: 3,
                        }}
                    >
                        將鼠標移至地點上方看更多
                    </div>
                    </div>
                    

                    <div onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)}>
                        <MapPin
                            offset={{ x: bgImgOffset.x + bgImgSize.width * 0.284, y: bgImgOffset.y + bgImgSize.height * 0.365 }}
                            size={{ width: 100, height: 50 }}
                            data={{
                                landmark: '新竹機場',
                                date: '1945年1月17日',
                                description: '第二十航空隊選定新竹飛行場為轟炸目標，從上午10至11時，對新竹機場投下1,459枚500磅炸彈，459枚500磅燒夷彈。此次空襲造成新竹飛行場附近電話線、高壓電線和水管破裂。'
                            }}
                            infoPosition={{ x: bgImgOffset.x + bgImgSize.width * 0.065, y: bgImgOffset.y + bgImgSize.height * 0.29 }}
                            isHover={hover === 1}
                        />
                    </div>
                    <div onMouseEnter={() => setHover(2)} onMouseLeave={() => setHover(0)}>
                        <MapPin
                            offset={{ x: bgImgOffset.x + bgImgSize.width * 0.423, y: bgImgOffset.y + bgImgSize.height * 0.673 }}
                            size={{ width: 150, height: 50 }}
                            data={{
                                landmark: '西大路一帶',
                                subLandmark: ['新竹市新興町、黑金町'],
                                date: '1945年3月17日',
                                description: '第五航空隊第22大隊第2 、19、 33、 408轟炸中隊21架Ｂ-24以1,000磅炸彈轟炸新竹市區和鐵路設施，市內新興町、黑金町（今新竹市東區西大路和客雅溪之間，和今新竹車站東側）一帶的電信電話線和運輸電線因此被切斷，多處房屋燒毀。'
                            }}
                            infoPosition={{ x: bgImgOffset.x + bgImgSize.width * 0.18, y: bgImgOffset.y + bgImgSize.height * 0.58 }}
                            field={{ width: 108, height: 100, x: bgImgOffset.x + bgImgSize.width * 0.406, y: bgImgOffset.y + bgImgSize.height * 0.62, rot: 'rotate(-35deg)' }}
                            isHover={hover === 2}
                        />
                    </div>
                    <div onMouseEnter={() => setHover(3)} onMouseLeave={() => setHover(0)}>
                        <MapPin
                            offset={{ x: bgImgOffset.x + bgImgSize.width * 0.525, y: bgImgOffset.y + bgImgSize.height * 0.528 }}
                            size={{ width: 189, height: 50 }}
                            data={{
                                landmark: '遠東巨城購物中心',
                                subLandmark: ['新竹紡織工場'],
                                date: '1945年5月15日',
                                description: 'B24轟炸大隊於中午時刻飛往新竹市，聯合以250磅炸彈轟炸新竹市區。新竹市東區幾乎全燬，市區多處被炸燬破壞，大火持續延燒三日才止息，為最慘重之紀錄。位於市中心的新竹驛房屋頂遭炸毀，當天新竹紡織工場五棟全壞、大日本帝國製糖株式會社新竹製糖廠所的工場六棟全燒燬。'
                            }}
                            infoPosition={{ x: bgImgOffset.x + bgImgSize.width * 0.67, y: bgImgOffset.y + bgImgSize.height * 0.25 }}
                            isHover={hover === 3}
                        />
                    </div>

                    <div onMouseEnter={() => setHover(3)} onMouseLeave={() => setHover(0)}>
                        <MapPin
                            offset={{ x: bgImgOffset.x + bgImgSize.width * 0.497, y: bgImgOffset.y + bgImgSize.height * 0.629 }}
                            size={{ width: 150, height: 50 }}
                            data={{ landmark: '新竹火車站', subLandmark: ['新竹驛'] }}
                            isHover={hover === 3}
                        />
                    </div>
                    <div onMouseEnter={() => setHover(3)} onMouseLeave={() => setHover(0)}>
                        <MapPin
                            offset={{ x: bgImgOffset.x + bgImgSize.width * 0.598, y: bgImgOffset.y + bgImgSize.height * 0.61 }}
                            size={{ width: 160, height: 50 }}
                            data={{ landmark: '新光紡織公司', subLandmark: ['大日本帝國製糖', '株式會社新竹製糖廠所'] }}
                            isHover={hover === 3}
                        />
                    </div>
                    <div onMouseEnter={() => setHover(4)} onMouseLeave={() => setHover(0)}>
                        <MapPin
                            offset={{ x: bgImgOffset.x + bgImgSize.width * 0.713, y: bgImgOffset.y + bgImgSize.height * 0.618 }}
                            size={{ width: 150, height: 50 }}
                            data={{
                                landmark: ['六燃大煙囪'],
                                date: '1944年10月14日',
                                description: '第六燃料廠新竹支廠有34名工廠員工被炸死，並且數座油槽傾倒。\n日本海軍第六燃料廠新竹支廠，為因應日本太平洋戰爭的軍事生產需求而生，用以製造航空燃料的加工劑異辛烷。為日軍重要軍事基地，因此多次遭到轟炸。'
                            }}
                            infoPosition={{ x: bgImgOffset.x + bgImgSize.width * 0.72, y: bgImgOffset.y + bgImgSize.height * 0.3 }}
                            isHover={hover === 4}
                        />
                    </div>

                </div>
            </div>

        </Fade>
    );

};

export default Page23;