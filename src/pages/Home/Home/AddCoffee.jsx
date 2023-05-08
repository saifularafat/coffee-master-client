import { Link } from "react-router-dom";
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import cover from '../../../assets/images/more/11.png'


const AddCoffee = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${cover})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',
                height: '100vh'
            }}>
            <div className="my_container my-12 h-screen">
                <Link to='/'>
                    <button className="addCoffee_btn_back inline-flex items-center">
                        <ArrowLeftIcon className="w-12 h-6" />
                        <span className="">Back to Home</span>
                    </button>
                </Link>

                <div className="bg-[#F4F3F0] py-16 px-8 my-5 rounded-md">
                    <h2 className='font-rancho text-5xl text-center font-medium pt-2 mt-4 mb-7'>
                        Add New Coffee
                    </h2>
                    <p className='font-raleway text-base text-text-one pb-7 text-center'>
                        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                    <form className="">
                        <div className="md:w-940px mx-auto grid md:grid-cols-2 gap-5 mt-3">
                            <div className="w-full">
                                <p className="label_style">Name
                                </ p>
                                <input
                                    type="text"
                                    placeholder="Enter coffee supplier"
                                    required
                                    className="input w-full" />
                                <p className="label_style">Supplier</p>
                                <input
                                    type="text"
                                    placeholder="Enter coffee name"
                                    required
                                    className="input w-full" />
                                <p className="label_style">Category</p>
                                <input
                                    type="number"
                                    placeholder="Enter coffee category"
                                    required
                                    className="input w-full" />
                            </div>
                            <div className="w-full">
                                <p className="label_style">Chef</p>
                                <input
                                    type="text"
                                    placeholder="Enter coffee chef"
                                    required
                                    className="input w-full" />
                                <p className="label_style">Taste</p>
                                <input
                                    type="text"
                                    placeholder="Enter coffee taste"
                                    required
                                    className="input w-full" />
                                <p className="label_style">Details</p>
                                <input
                                    type="text"
                                    placeholder="Enter coffee details"
                                    required
                                    className="input w-full" />
                            </div>
                        </div>
                        <div className="my-10">
                            <p className="label_style">Photo url</p>
                            <input
                                type="text"
                                placeholder="Enter photo URL"
                                required
                                className="input w-full" />
                            <input
                                type="submit"
                                value="Submit"
                                className="addCoffee_btn" />
                        </div>
                    </form>


                </div>
            </div>
        </div >
    );
};

export default AddCoffee;