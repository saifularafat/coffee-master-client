import { Link } from 'react-router-dom';
import {  EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import {  FaCoffee } from 'react-icons/fa';

import cover from '../../../assets/images/more/1.png'
import coffee1 from '../../../assets/images/coffee/1.png'
import coffee2 from '../../../assets/images/coffee/2.png'
import coffee3 from '../../../assets/images/coffee/3.png'
import coffee4 from '../../../assets/images/coffee/4.png'
import coffee5 from '../../../assets/images/coffee/5.png'
import coffee6 from '../../../assets/images/coffee/6.png'
const Products = () => {
    return (
        <div className='mt-32'
            style={{
                backgroundImage: `url(${cover})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',
                // width: "100vw"
            }}>
            <div className='my_container text-center'>
                <p className='font-raleway text-base text-text-one'>--- Sip & Savor ---</p>
                <h2 className='font-rancho text-5xl font-medium pt-2 mb-6'>Our Popular Products</h2>
                <Link to='addcoffee' className=''>
                    <button
                        className='btn_two  inline-flex'
                    >
                        <span className='pr-2'>
                            Add Coffee
                        </span>
                        <FaCoffee
                            className='w-6 h-6 text-white'
                        />
                    </button>
                </Link>
            </div>
            <div className='my_container grid md:grid-cols-2 grid-cols-1 gap-5 py-12'>
                <div className='bg-bg-color rounded-lg py-2 px-7 md:flex justify-between items-center'>
                    <img src={coffee1} alt="" />
                    <div>
                        <h3 className='py-1'>
                            <span className='product_text'>Name: </span>
                            <span className='product_description'> Espresso Coffee</span>
                        </h3>
                        <h3 className='py-1'>
                            <span className='product_text'>Chef: </span>
                            <span className='product_description'> Mrs. Morisha</span>
                        </h3>
                        <h3 className='py-1'>
                            <span className='product_text'>Price: </span><span className='product_description'> 890 Taka</span></h3>
                    </div>
                    <div className=''>
                        <button className='product_btn bg-btn-first '>
                            <EyeIcon className='w-5 h-5 text-white '/>
                        </button> <br />
                        <button className='product_btn bg-text-one '>
                            <PencilIcon className='w-5 h-5 text-white'/>
                        </button> <br />
                        <button className='product_btn bg-[#EA4744] '>
                            <TrashIcon className='w-5 h-5 bg-r text-white'/>
                        </button>
                    </div>
                </div>
                <div className='bg-bg-color rounded-lg py-2 px-7 md:flex justify-between items-center'>
                    <img src={coffee2} alt="" />
                    <div>
                        <h3 className='py-1'>
                            <span className='product_text'>Name: </span>
                            <span className='product_description'> Espresso Coffee</span>
                        </h3>
                        <h3 className='py-1'>
                            <span className='product_text'>Chef: </span>
                            <span className='product_description'> Mrs. Morisha</span>
                        </h3>
                        <h3 className='py-1'>
                            <span className='product_text'>Price: </span><span className='product_description'> 890 Taka</span></h3>
                    </div>
                    <div className=''>
                        <button className='product_btn bg-btn-first '>
                            <EyeIcon className='w-5 h-5 text-white'/>
                        </button> <br />
                        <button className='product_btn bg-text-one '>
                            <PencilIcon className='w-5 h-5 text-white'/>
                        </button> <br />
                        <button className='product_btn bg-[#EA4744] '>
                            <TrashIcon className='w-5 h-5 bg-r text-white'/>
                        </button>
                    </div>
                </div>
                <div className='bg-bg-color rounded-lg py-2 px-7 md:flex justify-between items-center'>
                    <img src={coffee3} alt="" />
                    <div>
                        <h3 className='py-1'>
                            <span className='product_text'>Name: </span>
                            <span className='product_description'> Espresso Coffee</span>
                        </h3>
                        <h3 className='py-1'>
                            <span className='product_text'>Chef: </span>
                            <span className='product_description'> Mrs. Morisha</span>
                        </h3>
                        <h3 className='py-1'>
                            <span className='product_text'>Price: </span><span className='product_description'> 890 Taka</span></h3>
                    </div>
                    <div className=''>
                        <button className='product_btn bg-btn-first '>
                            <EyeIcon className='w-5 h-5 text-white'/>
                        </button> <br />
                        <button className='product_btn bg-text-one '>
                            <PencilIcon className='w-5 h-5 text-white'/>
                        </button> <br />
                        <button className='product_btn bg-[#EA4744] '>
                            <TrashIcon className='w-5 h-5 bg-r text-white'/>
                        </button>
                    </div>
                </div>
                <div className='bg-bg-color rounded-lg py-2 px-7 md:flex justify-between items-center'>
                    <img src={coffee4} alt="" />
                    <div>
                        <h3 className='py-1'>
                            <span className='product_text'>Name: </span>
                            <span className='product_description'> Espresso Coffee</span>
                        </h3>
                        <h3 className='py-1'>
                            <span className='product_text'>Chef: </span>
                            <span className='product_description'> Mrs. Morisha</span>
                        </h3>
                        <h3 className='py-1'>
                            <span className='product_text'>Price: </span><span className='product_description'> 890 Taka</span></h3>
                    </div>
                    <div className=''>
                        <button className='product_btn bg-btn-first '>
                            <EyeIcon className='w-5 h-5 text-white'/>
                        </button> <br />
                        <button className='product_btn bg-text-one '>
                            <PencilIcon className='w-5 h-5 text-white'/>
                        </button> <br />
                        <button className='product_btn bg-[#EA4744] '>
                            <TrashIcon className='w-5 h-5 bg-r text-white'/>
                        </button>
                    </div>
                </div>
                <div className='bg-bg-color rounded-lg py-2 px-7 md:flex justify-between items-center'>
                    <img src={coffee5} alt="" />
                    <div>
                        <h3 className='py-1'>
                            <span className='product_text'>Name: </span>
                            <span className='product_description'> Espresso Coffee</span>
                        </h3>
                        <h3 className='py-1'>
                            <span className='product_text'>Chef: </span>
                            <span className='product_description'> Mrs. Morisha</span>
                        </h3>
                        <h3 className='py-1'>
                            <span className='product_text'>Price: </span><span className='product_description'> 890 Taka</span></h3>
                    </div>
                    <div className=''>
                        <button className='product_btn bg-btn-first '>
                            <EyeIcon className='w-5 h-5 text-white'/>
                        </button> <br />
                        <button className='product_btn bg-text-one '>
                            <PencilIcon className='w-5 h-5 text-white'/>
                        </button> <br />
                        <button className='product_btn bg-[#EA4744] '>
                            <TrashIcon className='w-5 h-5 bg-r text-white'/>
                        </button>
                    </div>
                </div>
                <div className='bg-bg-color rounded-lg py-2 px-7 md:flex justify-between items-center'>
                    <img src={coffee6} alt="" />
                    <div>
                        <h3 className='py-1'>
                            <span className='product_text'>Name: </span>
                            <span className='product_description'> Espresso Coffee</span>
                        </h3>
                        <h3 className='py-1'>
                            <span className='product_text'>Chef: </span>
                            <span className='product_description'> Mrs. Morisha</span>
                        </h3>
                        <h3 className='py-1'>
                            <span className='product_text'>Price: </span><span className='product_description'> 890 Taka</span></h3>
                    </div>
                    <div className=''>
                        <button className='product_btn bg-btn-first '>
                            <EyeIcon className='w-5 h-5 text-white'/>
                        </button> <br />
                        <button className='product_btn bg-text-one '>
                            <PencilIcon className='w-5 h-5 text-white'/>
                        </button> <br />
                        <button className='product_btn bg-[#EA4744] '>
                            <TrashIcon className='w-5 h-5 bg-r text-white'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;