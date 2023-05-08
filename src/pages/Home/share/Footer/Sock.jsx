import { Link } from 'react-router-dom';
import cover from '../../../../assets/images/more/13.jpg'
import logo from '../../../../assets/images/more/logo1.png'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarker } from 'react-icons/fa';

const Sock = () => {
    const handlerHomeSubmit = event => {
        event.preventDefault();
    }
    return (
        <div className="mt-16"
            style={{
                backgroundImage: `url(${cover})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover'
            }}>
            <div className='my_container grid md:grid-cols-2 gap-7 pt-12 md:pt-24'>
                <div className=''>
                    <img src={logo} alt="" className='w-20 h-24' />
                    <h2 className='font-rancho text-5xl font-medium pt-2 mt-4 mb-7'>Espresso Emporium</h2>
                    <p className='font-raleway text-base text-text-one pb-7'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div>
                        <p className='md:inline-flex gap-3'>
                            <Link >
                                <span>
                                    <FaFacebook className='fa_social' />
                                </span>
                            </Link>
                            <Link>
                                <span><FaTwitter className='fa_social' />
                                </span>
                            </Link>
                            <Link>
                                <span><FaInstagram className='fa_social' />
                                </span>
                            </Link>
                            <Link>
                                <span><FaLinkedin className='fa_social' />
                                </span>
                            </Link>
                        </p>
                    </div>
                    <h2 className='font-rancho text-5xl font-medium pt-2 my-5'>Get in Touch</h2>
                    <div className=''>
                        <p className='font-raleway inline-flex gap-3 items-center text-text-one font-medium'>
                            <FaPhoneAlt /> +88 01533 333 333</p> <br />
                        <p className='py-3 font-raleway inline-flex gap-3 items-center text-text-one font-medium'>
                            <FaEnvelope />info@gmail.com</p> <br />
                        <p className='font-raleway inline-flex gap-3 items-center text-text-one font-medium'>
                            <FaMapMarker /> 72, Wall street, King Road, Dhaka
                        </p>
                    </div>
                </div>
                <div className=' md:pt-32'>
                    <h2 className='font-rancho text-3xl md:text-5xl font-medium pt-2 mt-4 mb-7'>Connect with Us</h2>
                    <div className='md:w-[500px]'>
                        <form onSubmit={handlerHomeSubmit}>
                            <input
                                type="text"
                                name='text'
                                placeholder="Name"
                                required
                                className="input input-bordered w-full max-w-xs mb-3" />
                            <input
                                type="email"
                                name='email'
                                required
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs mb-3" />
                            <input
                                type="text"
                                placeholder="Message"
                                required
                                className="input input-bordered w-full max-w-xs mb-3" />
                            <br />
                            <input
                                type="submit"
                                value="Send Message"
                                className='sock_btn' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sock;