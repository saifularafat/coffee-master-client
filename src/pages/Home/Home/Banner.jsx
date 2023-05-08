import slider1 from '../../../assets/images/more/3.png'

const Banner = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${slider1})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',
                height: '100vh',
                width: "100"
            }}>
            <div className='md:w-12/12 w-full my_container mx-auto'>
                <div className='py-8 md:py-5 md:px-8 relative md:top-1/2 md:translate-y-1/4'>
                    <div className=' flex items-center'>
                        <div className='w-4/12 mx-auto '>

                        </div>
                        <div className='md:w-7/12 mx-auto relative md:top-44 top-16 md:left-12 text-right'>
                            <h2 className='font-rancho text-2xl text-left md:text-3xl font-bold text-white pb-2'>Would you like a Cup of Delicious Coffee?</h2>
                            <p className='text-white font-raleway text-justify text-lg'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                            <div className='text-left'>
                                <button className='btn_one'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;