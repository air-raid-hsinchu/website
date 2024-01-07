import backgroundImg from '../../assets/images/1-1.png';

const Page2 = () => {
    return (
        <>
            <div
                className="container w-100 h-100"
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
            </div>

        </>
    )
};

export default Page2;