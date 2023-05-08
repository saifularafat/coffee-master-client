import { Link, NavLink } from "react-router-dom";
import headerbg from '../../../../assets/images/more/15.jpg'
import logo from '../../../../assets/images/more/logo1.png'

const Header = () => {
    return (
        <div className="sticky top-0 z-10">
            <div className="relative">
                <img src={headerbg} alt=""
                    className="h-[120px] w-full" />
                <div className="w-full px-10 flex justify-between items-center absolute top-3">
                    <div className="flex items-center">
                        <Link to='/'>
                            <img src={logo} alt="" className="md:w-20 md:h-24" />
                        </Link>
                        <h2 className="font-rancho text-2xl md:text-3xl text-white pl-3">Espresso Emporium</h2>
                    </div>
                    <div>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'active' : 'default'}>
                            Home
                        </NavLink>
                        <NavLink to='addcoffee' className={({ isActive }) => isActive ? 'active' : 'default'}>
                            Add Coffee
                        </NavLink>
                        <NavLink to='updatecoffee' className={({ isActive }) => isActive ? 'active' : 'default'}>
                            Update Coffee
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;