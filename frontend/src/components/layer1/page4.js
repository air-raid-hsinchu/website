import mapImg from '../../assets/images/venue_white.png';
import { useState, useEffect, useRef } from 'react';
import { Transition } from 'react-transition-group';



const PositionPin = ({ offset, size, content, title, contentPosition, contentWidth, goto, fontSize, isMobile = false, rotateTitle = false, zIndex, pop = false }) => {
    const [toggle, setToggle] = useState(pop);
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const toggleDelta = isMobile ? 40 : 20;
    const barHeight = isMobile ? size.height * 0.2 : size.height * 0.55;
    const titleHeight = isMobile ? size.height * 0.8 : size.height * 0.45;

    const barTransition = {
        entering: { height: barHeight + toggleDelta },
        entered: { height: barHeight + toggleDelta },
        exiting: { height: barHeight },
        exited: { height: barHeight },
    };

    const containerTransition = {
        entering: { opacity: 1,height: size.height + toggleDelta },
        entered: { opacity: 1,height: size.height + toggleDelta },
        exiting: { opacity: 0.5,height: size.height },
        exited: { opacity: 0.5,height: size.height },
    };

    const contentTransition = {
        entering: { opacity: 1, bottom: -offset.y + window.innerHeight + barHeight + toggleDelta },
        entered: { opacity: 1, bottom: -offset.y + window.innerHeight + barHeight + toggleDelta },
        exiting: { opacity: 0, bottom: -offset.y + window.innerHeight + barHeight },
        exited: { opacity: 0, bottom: -offset.y + window.innerHeight + barHeight },
    }

    const handleMouseEnter = () => {
        if (isMobile) return;
        setToggle(true);
    }

    const handleMouseLeave = () => {
        if (isMobile) return;
        setToggle(false);
    }

    return (
        <>
            <Transition nodeRef={contentRef} in={isMobile ? pop : toggle} timeout={500}>
                {state => (
                    <pre
                        ref={contentRef}
                        className='position-absolute text-black text-start pre-wrap overflow-visible mb-0'
                        style={{
                            bottom: -offset.y + window.innerHeight + barHeight,
                            ...(isMobile ?
                                { ...(contentPosition === 0 ? { right: -offset.x + window.innerWidth + 10 } : { left: offset.x + 10 }) }
                                :
                                { ...(contentPosition === 0 ? { right: -offset.x + window.innerWidth + size.width / 2 } : { left: offset.x + size.width / 2 + 20 }) }),
                            ...(isMobile && { writingMode: 'vertical-rl' }),
                            ...(isMobile ? { height: titleHeight } : { width: contentWidth, height: titleHeight * 0.8 }),
                            fontFamily: 'nstc',
                            fontSize: fontSize - 3,
                            opacity: 0,
                            transition: 'all 0.5s ease-in-out',
                            ...contentTransition[state],
                            whiteSpace: 'pre-wrap',
                            zIndex: zIndex,
                            cursor: 'pointer',
                        }}
                    >
                        {content}
                    </pre>
                )}
            </Transition>
            <Transition nodeRef={containerRef} in={isMobile ? pop : toggle} timeout={500}>
                {state => (
                    <a href={`#${goto}`}
                        ref={containerRef}
                        className='position-pin position-absolute d-flex flex-column align-items-center justify-content-center'
                        style={{
                            bottom: -offset.y + window.innerHeight,
                            left: offset.x - size.width / 2,
                            width: size.width,
                            height: size.height,
                            transition: 'all 0.5s ease-in-out',
                            ...containerTransition[state],
                            zIndex: zIndex,
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {rotateTitle && (
                            <pre
                                ref={titleRef}
                                className='text-black overflow-visible mb-0'
                                style={{
                                    fontSize: fontSize,
                                    fontFamily: 'nstc',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                    paddingLeft: 8,
                                }}
                            >
                                D
                            </pre>
                        )}
                        <pre
                            ref={titleRef}
                            className='text-black overflow-visible mb-0'
                            style={{
                                fontSize: fontSize,
                                letterSpacing: 2,
                                fontFamily: 'nstc',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                height: titleHeight,
                                ...(isMobile && { lineHeight: 1 }),
                                ...(rotateTitle && { transform: 'rotate(90deg)', alignSelf: 'center', lineHeight: `${titleHeight - 30}px` }),
                            }}
                        >
                            {title}
                        </pre>

                        <div
                            style={{
                                width: 1.5,
                                height: barHeight,
                                backgroundColor: '#777',
                                transition: 'height 0.5s ease-in-out',
                                ...barTransition[state],
                            }}
                        >
                        </div>
                    </a>
                )}

            </Transition>
        </>

    );
}

const Page4 = ({ isMobile }) => {
    const containerRef = useRef(null);
    const [bgImgSize, setBgImgSize] = useState({ width: 0, height: 0 });
    const [bgImgOffset, setBgImgOffset] = useState({ x: 0, y: 0 });
    const [pinHeight, setPinHeight] = useState(0);
    const [counter, setCounter] = useState(0);
    const [counterId, setCounterId] = useState(null);

    useEffect(() => {
        window.addEventListener("resize", getBackgroundImageDimensions);
        getBackgroundImageDimensions()
        if (isMobile) {
            let counterId = setInterval(() => {
                setCounter(counter => counter + 1);
            }, 3000);
            setCounterId(counterId);
        }

        return () => {
            window.removeEventListener("resize", getBackgroundImageDimensions);
            if (counterId) clearInterval(counterId);

        };
    }, [isMobile]);

    const getBackgroundImageDimensions = () => {
        const container = containerRef.current;
        if (!container) return;
        const currentWidth = container.offsetWidth;
        const currentHeight = container.offsetHeight;
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
                setPinHeight(currentHeight * 0.28);
            } else {
                const newHeight = currentWidth * height / width;
                setBgImgSize({ width: currentWidth, height: newHeight });
                setBgImgOffset({ x: left + window.scrollX, y: top + (currentHeight - newHeight) / 2 });
                setPinHeight(newHeight * 0.28);
            }
        };
    };

    return (
        <>
            {isMobile ? (
                <>
                    <div className='h-100 w-100 text-center d-flex flex-column'>
                        <div className='text-black fs-1 d-flex align-items-end justify-content-center fw-bold ' style={{ height: '14%', fontFamily: 'nstc' }}>
                            參展動線
                        </div>
                        <div className='w-100 d-flex align-items-center  justify-content-center' style={{ height: '86%' }}>
                            <img onLoad={getBackgroundImageDimensions} ref={containerRef} src={mapImg} style={{ maxHeight: '120%', maxWidth: '100%' }} />

                            <PositionPin
                                offset={{ x: bgImgOffset.x + bgImgSize.width * 0.305, y: bgImgOffset.y + bgImgSize.height * 0.515 }}
                                size={{ width: 100, height: 120 }}
                                content={'步入時光迴廊，回到1945年— 新竹州的天空'}
                                title={'A\n空\n襲\n時\n代'}
                                contentPosition={0}
                                contentWidth={300}
                                goto='areaA'
                                fontSize={15}
                                isMobile={true}
                                zIndex={2}
                                pop={counter % 4 === 0}
                            />
                            <PositionPin
                                offset={{ x: bgImgOffset.x + bgImgSize.width * 0.536, y: bgImgOffset.y + bgImgSize.height * 0.39 }}
                                size={{ width: 100, height: 170 }}
                                content={'翻開泛黃的扉頁、按下老舊的播放鍵，與黃旺成一同經歷流離的那3個月'}
                                title={'B\n新\n竹\n陳\n的\n日\n記\n本'}
                                contentPosition={0}
                                contentWidth={340}
                                goto='areaB'
                                fontSize={15}
                                isMobile={true}
                                zIndex={0}
                                pop={counter % 4 === 1}
                            />
                            <PositionPin
                                offset={{ x: bgImgOffset.x + bgImgSize.width * 0.729, y: bgImgOffset.y + bgImgSize.height * 0.503 }}
                                size={{ width: 100, height: 160 }}
                                content={'只要閉上眼睛，在黑暗之中，那空襲時代的轟鳴仍在耳邊回響'}
                                title={'C\n空\n襲\n記\n憶\n體\n驗'}
                                contentPosition={1}
                                contentWidth={350}
                                goto='areaC'
                                fontSize={15}
                                isMobile={true}
                                zIndex={1}
                                pop={counter % 4 === 2}
                            />
                            <PositionPin
                                offset={{ x: bgImgOffset.x + bgImgSize.width * 0.45, y: bgImgOffset.y + bgImgSize.height * 0.7 }}
                                size={{ width: 100, height: 170 }}
                                content='死亡不是終點，遺忘才是'
                                title={'Re-thinking'}
                                contentPosition={0}
                                contentWidth={279}
                                goto='areaD'
                                fontSize={15}
                                isMobile={true}
                                rotateTitle={true}
                                zIndex={1}
                                pop={counter % 4 === 3}
                            />
                        </div>

                    </div>
                </>
            ) : (
                <>
                    <div className='h-100 w-100 text-center d-flex flex-column'>
                        <div className='text-black fs-1 d-flex align-items-end justify-content-center fw-bold ' style={{ height: '14%', fontFamily: 'nstc' }}>
                            參展動線
                        </div>
                        <div className='w-100 d-flex align-items-center  justify-content-center' style={{ height: '86%' }}>
                            <img onLoad={getBackgroundImageDimensions} ref={containerRef} src={mapImg} style={{ maxHeight: '120%', maxWidth: '100%' }} />

                            <PositionPin
                                offset={{ x: bgImgOffset.x + bgImgSize.width * 0.305, y: bgImgOffset.y + bgImgSize.height * 0.515 }}
                                size={{ width: 100, height: pinHeight }}
                                content={'步入時光迴廊，回到1945年\n— 新竹州的天空'}
                                title={'A\n空襲時代'}
                                contentPosition={0}
                                contentWidth={300}
                                goto='areaA'
                                fontSize={20}
                            />
                            <PositionPin
                                offset={{ x: bgImgOffset.x + bgImgSize.width * 0.536, y: bgImgOffset.y + bgImgSize.height * 0.39 }}
                                size={{ width: 200, height: pinHeight }}
                                content={'翻開泛黃的扉頁、按下老舊的播放鍵\n，與黃旺成一同經歷流離的那3個月'}
                                title={'B\n新竹陳的日記本'}
                                contentPosition={1}
                                contentWidth={340}
                                goto='areaB'
                                fontSize={20}
                            />
                            <PositionPin
                                offset={{ x: bgImgOffset.x + bgImgSize.width * 0.729, y: bgImgOffset.y + bgImgSize.height * 0.503 }}
                                size={{ width: 200, height: pinHeight }}
                                content={'只要閉上眼睛，在黑暗之中，那空\n襲時代的轟鳴仍在耳邊回響'}
                                title={'C\n空襲記憶體驗'}
                                contentPosition={1}
                                contentWidth={350}
                                goto='areaC'
                                fontSize={20}
                            />
                            <PositionPin
                                offset={{ x: bgImgOffset.x + bgImgSize.width * 0.5, y: bgImgOffset.y + bgImgSize.height * 0.7 }}
                                size={{ width: 200, height: pinHeight - 60 }}
                                content='死亡不是終點，遺忘才是'
                                title={'D\nRe-thinking'}
                                contentPosition={1}
                                contentWidth={279}
                                goto='areaD'
                                fontSize={20}
                            />
                        </div>

                    </div>
                </>
            )}
        </>

    );
};

export default Page4;