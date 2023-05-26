import { Link, useLoaderData } from "react-router-dom";
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import cover from '../../../assets/images/more/11.png'
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id,name, chefName, price, taste, category, details, photo } = coffee;

    const handlerUpdateSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chefName = form.chefName.value;
        const price = form.price.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, chefName, price, taste, category, details, photo }
        console.log(updatedCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Wow success!',
                        text: 'Updated Coffee successfully..!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
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
                        Update a Coffee : {name}
                    </h2>
                    <p className='font-raleway text-base text-text-one pb-7 text-center'>
                        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                    <form onSubmit={handlerUpdateSubmit}>
                        {/* form row */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/2">
                                <p className="label_style">Name
                                </ p>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={name}
                                    placeholder="Enter coffee supplier"
                                    required
                                    className="input w-full"
                                />
                            </div>
                            <div className="md:w-1/2 ml-4">
                                <p className="label_style">Chef</p>
                                <input
                                    type="text"
                                    name="chefName"
                                    defaultValue={chefName}
                                    placeholder="Enter coffee chef"
                                    required
                                    className="input w-full"
                                />
                            </div>
                        </div>
                        {/* form row two */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/2">
                                <p className="label_style">Price</p>
                                <input
                                    type="text"
                                    name="price"
                                    defaultValue={price}
                                    placeholder="Enter coffee price"
                                    required
                                    className="input w-full"
                                />
                            </div>
                            <div className="md:w-1/2 ml-4">
                                <p className="label_style">Taste</p>
                                <input
                                    type="text"
                                    name="taste"
                                    defaultValue={taste}
                                    placeholder="Enter coffee taste"
                                    required
                                    className="input w-full"
                                />
                            </div>
                        </div>
                        {/* form row three */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/2">
                                <p className="label_style">Category</p>
                                <input
                                    type="text"
                                    name="category"
                                    defaultValue={category}
                                    placeholder="Enter coffee category"
                                    required
                                    className="input w-full"
                                />
                            </div>
                            <div className="md:w-1/2 ml-4">
                                <p className="label_style">Details</p>
                                <input
                                    type="text"
                                    name="details"
                                    defaultValue={details}
                                    placeholder="Enter coffee details"
                                    required
                                    className="input w-full"
                                />
                            </div>
                        </div>
                        {/* form row three */}
                        <div className=" my-6">
                            <div className="">
                                <p className="label_style">Photo url</p>
                                <input
                                    type="text"
                                    name="photo"
                                    defaultValue={photo}
                                    placeholder="Enter photo URL"
                                    required
                                    className="input w-full"
                                />
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="addCoffee_btn"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default UpdateCoffee;