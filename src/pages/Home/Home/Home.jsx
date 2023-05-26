// import { useLoaderData } from 'react-router-dom';
import Follow from '../share/Follow';
import Products from '../share/Products';
import About from '../share/about';
import Banner from './Banner';

const Home = () => {
    // const coffees = useLoaderData();
    // console.log(coffees);
    return (
       <div>
        <Banner />
        <About />
        <Products />
        <Follow />
       </div>
    );
};

export default Home;