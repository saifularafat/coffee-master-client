import img1 from '../../../assets/images/cups/Rectangle 9.png'
import img2 from '../../../assets/images/cups/Rectangle 10.png'
import img3 from '../../../assets/images/cups/Rectangle 11.png'
import img4 from '../../../assets/images/cups/Rectangle 12.png'
import img5 from '../../../assets/images/cups/Rectangle 13.png'
import img6 from '../../../assets/images/cups/Rectangle 14.png'
import img7 from '../../../assets/images/cups/Rectangle 15.png'
import img8 from '../../../assets/images/cups/Rectangle 16.png'
const Follow = () => {
    return (
        <div className="my-14">
            <div className='my_container text-center'>
                <p className='font-raleway text-base text-text-one'>Follow Us Now</p>
                <h2 className='font-rancho text-5xl font-medium pt-2 mb-6'>Follow on Instagram</h2>
            </div>
            <div className="my_container grid md:grid-cols-4 grid-cols-2 gap-5 mt-12">
                <div>
                    <img src={img1} alt="" className='rounded-lg' />
                </div>
                <div>
                    <img src={img2} alt="" className='rounded-lg' />
                </div>
                <div>
                    <img src={img3} alt="" className='rounded-lg' />
                </div>
                <div>
                    <img src={img4} alt="" className='rounded-lg' />
                </div>
                <div>
                    <img src={img5} alt="" className='rounded-lg' />
                </div>
                <div>
                    <img src={img6} alt="" className='rounded-lg' />
                </div>
                <div>
                    <img src={img7} alt="" className='rounded-lg' />
                </div>
                <div>
                    <img src={img8} alt="" className='rounded-lg' />
                </div>
            </div>
        </div>
    );
};

export default Follow;