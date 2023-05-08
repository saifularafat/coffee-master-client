import { Outlet } from "react-router-dom";
import Header from "../pages/Home/share/Header/Header";
import Footer from "../pages/Home/share/Footer/Footer";

const Main = () => {
    return (
        <>
            <Header />
            <div className="min-h-[calc(100vh-56px)]">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Main;