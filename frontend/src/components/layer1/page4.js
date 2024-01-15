import mapImg from '../../assets/images/展場動線圖.png';

const Page4 = () => {
    return (
        <>
            <div className='h-100 w-100 text-center d-flex flex-column'>
                <div className='h-25 text-black fs-1 d-flex align-items-center justify-content-center' style={{ lineHeight: 4, fontFamily: 'nstc' }}>
                    參展動線
                </div>
                <div className='h-75 w-100 d-flex align-items-center justify-content-center'>
                    <img src={mapImg} style={{ maxHeight: '90%', maxWidth: '100%' }} />
                </div>
            </div>
        </>
    );
};

export default Page4;