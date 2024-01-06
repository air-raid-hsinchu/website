import mapImg from '../../assets/images/展場動線圖.png';

const Page4 = () => {
    return (
        <>
            <div className='container h-100 w-100 text-center'>
                <h1 className='text-black'>參展動線</h1>
                <img src={mapImg} style={{ maxHeight: '90%', maxWidth: '90%' }} />
            </div>
        </>
    );
};

export default Page4;