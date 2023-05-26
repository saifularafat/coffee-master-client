import { Link } from 'react-router-dom';
import { FaCoffee } from 'react-icons/fa';

import cover from '../../../assets/images/more/1.png'
import { useEffect, useState } from 'react';

import CoffeeCart from './CoffeeCart';

const Products = () => {
    const [loadedCoffees, setLoadedCoffees] = useState([]); //array of object ke fetch korle sheter useState a empty array dite hobe
    const [ coffees, setCoffees] = useState(loadedCoffees)
    useEffect( () =>{
        fetch('http://localhost:5000/coffee')
        .then(res => res.json())
        .then(data => setLoadedCoffees(data))
    },[])
    // const { photo, name, chefName, price } = coffee;
    return (
        <div className='my-32'
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
                        className='btn_two inline-flex'
                    >
                        <span className='pr-2'>
                            Add Coffee
                        </span>
                        <FaCoffee
                            className='w-6 h-6 text-white hover:text-text-one'
                        />
                    </button>
                </Link>
            </div>
            <div className='my_container grid md:grid-cols-2 gap-5 my-12'>
                {
                    loadedCoffees.map(coffee => <CoffeeCart
                    key = {coffee._id}
                    coffee = {coffee}
                    coffees = {coffees}
                    setCoffees = {setCoffees}
                    >
                    </CoffeeCart>)
                }
            </div>
        </div>
    );
};

export default Products;