import footerbg from '../../../../assets/images/more/24.jpg'
import Sock from './Sock'

const Footer = () => {
    return (
        <div>
            {/* Socket section link up */}
            <Sock />

            <div className="mt-5 py-5 text-center text-xl text-white"
                style={{
                    backgroundImage: `url(${footerbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: 'cover',
                    height: '',
                }}>
                <h2>Copyright ! All Rights @
                    <span className="text-white text-2xl italic font-mono">
                        saiful arafat
                    </span>
                </h2>
            </div>
        </div>
    );
};

export default Footer;