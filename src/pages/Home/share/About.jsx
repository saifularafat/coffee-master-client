import icon1 from '../../../assets/images/icons/1.png'
import icon2 from '../../../assets/images/icons/2.png'
import icon3 from '../../../assets/images/icons/3.png'
import icon4 from '../../../assets/images/icons/4.png'
const About = () => {
    return (
        <div className='bg-bg-color py-14'>
            <div className='my_container grid md:grid-cols-4 grid-cols-2 gap-6'>
                <div className=''>
                    <img src={icon1} alt="" />
                    <h2 className='text-3xl text-text-header font-rancho mt-2'>Awesome Aroma</h2>
                    <p className='font-raleway text-text-one mt-2'>You will definitely be a fan of the design
                     & aroma of your coffee</p>
                </div>
                <div>
                <img src={icon2} alt="" />
                    <h2 className='text-3xl text-text-header font-rancho mt-2'>High Quality</h2>
                    <p className='font-raleway text-text-one mt-2'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div>
                <img src={icon3} alt="" />
                    <h2 className='text-3xl text-text-header font-rancho mt-2'>Pure Grades</h2>
                    <p className='font-raleway text-text-one mt-2'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div>
                <img src={icon4} alt="" />
                    <h2 className='text-3xl text-text-header font-rancho mt-2'>Proper Roasting</h2>
                    <p className='font-raleway text-text-one mt-2'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default About;