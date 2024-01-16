import mapImg from '../../assets/images/展場動線圖.png';
import { useState, useEffect, useRef } from 'react';

const PositionPin = ({ offset, size, content, title, barHeight, contentPosition, contentWidth, goto }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            {toggle &&
                <pre
                    className='position-absolute text-black fs-5 text-start pre-wrap overflow-hidden'
                    {...(contentPosition === 0 ? { 
                            style: { 
                                bottom: -offset.y + window.innerHeight + barHeight,
                                right: -offset.x + window.innerWidth + size.width / 2,
                                width: contentWidth,
                                fontFamily: 'nstc'
                            } 
                        } : { 
                            style: { 
                                bottom: -offset.y + window.innerHeight + barHeight, 
                                left: offset.x + size.width / 2 + 20,
                                width: contentWidth,
                                fontFamily: 'nstc'
                            }
                        })
                    }
                >
                    {content}
                </pre>
            }
            <a href={`#${goto}`}
                className='position-pin position-absolute d-flex flex-column align-items-center justify-content-center'
                style={{
                    bottom: -offset.y + window.innerHeight,
                    left: offset.x - size.width / 2,
                    width: size.width,
                    height: size.height,
                }}
                onMouseEnter={() => setToggle(true)}
                onMouseLeave={() => setToggle(false)}
            >
                <pre className='fs-3 text-black overflow-hidden' style={{ fontFamily: 'nstc' }}>{title}</pre>

                <div
                    style={{
                        width: 1.5,
                        height: barHeight,
                        backgroundColor: '#777',
                    }}
                >
                </div>
            </a>

        </>

    );
}

const Page4 = () => {
    const containerRef = useRef(null);
    const [bgImgSize, setBgImgSize] = useState({ width: 0, height: 0 });
    const [bgImgOffset, setBgImgOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        window.addEventListener("resize", getBackgroundImageDimensions);
        return () => {
            window.removeEventListener("resize", getBackgroundImageDimensions);
        };
    }, []);

    const getBackgroundImageDimensions = () => {
        const container = containerRef.current;
        const currentWidth = container.offsetWidth;
        const currentHeight = container.offsetHeight;
        console.log(currentWidth, currentHeight)
        const img = new Image();
        img.src = mapImg;

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
            <div className='h-100 w-100 text-center d-flex flex-column'>
                <div className='text-black fs-1 d-flex align-items-end justify-content-center fw-bold ' style={{ height: '14%', fontFamily: 'nstc' }}>
                    參展動線
                </div>
                <div className='w-100 d-flex align-items-center  justify-content-center' style={{ height: '86%' }}>
                    <img onLoad={getBackgroundImageDimensions} ref={containerRef} src={mapImg} style={{ maxHeight: '120%', maxWidth: '100%' }} />
                    <PositionPin
                        offset={{ x: bgImgOffset.x + bgImgSize.width * 0.305, y: bgImgOffset.y + bgImgSize.height * 0.515 }}
                        size={{ width: 100, height: 200 }}
                        content={'步入時光迴廊，回到1945年\n— 新竹州的天空'}
                        title={'A\n空襲時代'}
                        barHeight={100}
                        contentPosition={0}
                        contentWidth={300}
                        goto='areaA'
                    />
                    <PositionPin
                        offset={{ x: bgImgOffset.x + bgImgSize.width * 0.536, y: bgImgOffset.y + bgImgSize.height * 0.39 }}
                        size={{ width: 200, height: 200 }}
                        content={'翻開泛黃的扉頁、按下老舊的播放鍵\n，與黃旺成一同經歷流離的那3個月'}
                        title={'B\n新竹陳的日記本'}
                        barHeight={100}
                        contentPosition={1}
                        contentWidth={340}
                        goto='areaB'
                    />
                    <PositionPin
                        offset={{ x: bgImgOffset.x + bgImgSize.width * 0.729, y: bgImgOffset.y + bgImgSize.height * 0.503 }}
                        size={{ width: 200, height: 200 }}
                        content={'只要閉上眼睛，在黑暗之中，那空\n襲時代的轟鳴仍在耳邊回響'}
                        title={'C\n空襲記憶體驗'}
                        barHeight={100}
                        contentPosition={1}
                        contentWidth={350}
                        goto='areaC'
                    />
                    <PositionPin
                        offset={{ x: bgImgOffset.x + bgImgSize.width * 0.472, y: bgImgOffset.y + bgImgSize.height * 0.7 }}
                        size={{ width: 200, height: 200 }}
                        content='死亡不是終點，遺忘才是'
                        title={'D\nRe-thinking'}
                        barHeight={90}
                        contentPosition={1}
                        contentWidth={279}
                        goto='areaD'
                    />
                </div>

            </div>
        </>

    );
};

export default Page4;