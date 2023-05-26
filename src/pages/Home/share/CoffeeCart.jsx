
import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const CoffeeCart = ({ coffee, setCoffees }) => {
    const { _id, name, chefName, price, photo } = coffee

    const handlerDelete = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then( (result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            // eslint-disable-next-line react/prop-types
                            const remaining = coffee.filter(cof => cof._id !== _id)
                            setCoffees(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div className='bg-bg-color rounded-lg py-2 px-7 md:flex justify-between items-center'>
            <img src={photo} alt="" />
            <div>
                <h3 className='py-1'>
                    <span className='product_text'>Name: </span>
                    <span className='product_description'> {name}</span>
                </h3>
                <h3 className='py-1'>
                    <span className='product_text'>Chef: </span>
                    <span className='product_description'> {chefName}</span>
                </h3>
                <h3 className='py-1'>
                    <span className='product_text'>Price: </span><span className='product_description'>{price}</span>
                </h3>
            </div>
            <div className=''>
                <button className='product_btn bg-btn-first '>
                    <EyeIcon className='w-5 h-5 text-white ' />
                </button> <br />
                <Link to={`/updatecoffee/${_id}`}>
                    <button className='product_btn bg-text-one '>
                        <PencilIcon className='w-5 h-5 text-white' />
                    </button>
                </Link>
                <br />

                <button
                    onClick={() => handlerDelete(_id)}
                    className='product_btn bg-[#EA4744] '>
                    <TrashIcon
                        className='w-5 h-5 bg-r text-white'
                    />
                </button>
            </div>
        </div>
    );
};

export default CoffeeCart;