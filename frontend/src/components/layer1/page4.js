import mapImg from '../../assets/images/展場動線圖.png';
import SocialBar from '../socialBar';

const Page4 = () => {
    return (
        <>
            <div className='h-100 w-100 text-center d-flex flex-column'>
                <div className='text-black fs-1 d-flex align-items-end justify-content-center fw-bold ' style={{height: '14%', fontFamily: 'nstc' }}>
                    參展動線
                </div>
                <div className='w-100 d-flex align-items-center justify-content-center' style={{height: '86%'}}>
                    <img src={mapImg} style={{ maxHeight: '90%', maxWidth: '100%' }} />
                </div>
            </div>
        </>
    );
};

export default Page4;