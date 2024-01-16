
const radius = 25;
const strokeWidth = 2;

const SocialBar = (
    <div className='position-fixed h-100 d-flex flex-column justify-content-center align-items-center' style={{ width: 100, zIndex: 3 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${radius * 2} ${radius * 2}`} width={radius * 2} height={radius * 2}>
            <circle cx={radius} cy={radius} r={radius - strokeWidth} fill="none" stroke="black" strokeWidth={strokeWidth} />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="20" fontFamily="Arial">FB</text>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${radius * 2} ${radius * 2}`} width={radius * 2} height={radius * 2} style={{ marginTop: 15 }}>
            <circle cx={radius} cy={radius} r={radius - strokeWidth} fill="none" stroke="black" strokeWidth={strokeWidth} />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="20" fontFamily="Arial">IG</text>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${radius * 2} ${radius * 2}`} width={radius * 2} height={radius * 2} style={{ marginTop: 15 }}>
            <circle cx={radius} cy={radius} r={radius - strokeWidth} fill="none" stroke="black" strokeWidth={strokeWidth} />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="20" fontFamily="Arial">YT</text>
        </svg>
    </div>
)

export default SocialBar;