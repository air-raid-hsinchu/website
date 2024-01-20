import { useEffect, useState } from 'react';


const SocialBar = () => {
    const strokeWidth = 2;
    const minRadius = 18;
    const maxRadius = 25;
    const [radius, setRadius] = useState(Math.max(Math.min(window.innerWidth * 0.02, maxRadius), minRadius));

    useEffect(() => {
        window.addEventListener('resize', () => {
            setRadius(Math.max(Math.min(window.innerWidth * 0.02, maxRadius), minRadius));
        });
    }, []);

    return (
        <>
            <div className='position-absolute h-100 d-flex flex-column justify-content-center align-items-center' style={{ width: 100, zIndex: 2 }}>
                <a href="https://www.facebook.com/bombingofhsinchiku2024?mibextid=opq0tG">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${radius * 2} ${radius * 2}`} width={radius * 2} height={radius * 2}>
                        <circle cx={radius} cy={radius} r={radius - strokeWidth} fill="none" stroke="black" strokeWidth={strokeWidth} />
                        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="1rem" fontFamily="Arial">FB</text>
                    </svg>
                </a>

                <a href="https://www.instagram.com/bombingofhsinchiku2024?igsh=MWd2NmZwcjV2bGU5OQ==">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${radius * 2} ${radius * 2}`} width={radius * 2} height={radius * 2} style={{ marginTop: 15 }}>
                        <circle cx={radius} cy={radius} r={radius - strokeWidth} fill="none" stroke="black" strokeWidth={strokeWidth} />
                        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="1rem" fontFamily="Arial">IG</text>
                    </svg>
                </a>
                <a href="https://www.youtube.com/@bombingofhsinchiku2024">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${radius * 2} ${radius * 2}`} width={radius * 2} height={radius * 2} style={{ marginTop: 15 }}>
                        <circle cx={radius} cy={radius} r={radius - strokeWidth} fill="none" stroke="black" strokeWidth={strokeWidth} />
                        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="1rem" fontFamily="Arial">YT</text>
                    </svg>
                </a>
            </div>
        </>

    );
}

export default SocialBar;