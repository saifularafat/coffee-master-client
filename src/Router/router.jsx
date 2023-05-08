import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import AddCoffee from "../pages/Home/Home/addCoffee";
import UpdateCoffee from "../pages/Home/Home/UpdateCoffee";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'addcoffee',
                element: <AddCoffee />
            },
            {
                path: 'updatecoffee',
                element: <UpdateCoffee />
            }
        ]
    }
])

export default router;