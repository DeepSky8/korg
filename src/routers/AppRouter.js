import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFoundPage />,
    }
])

export default AppRouter