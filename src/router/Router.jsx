import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signin from "../Pages/Signin";
const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
      },
      {
        path:"/home",
        element:<Home/>
      },
      {
path:"/login",
element:<Login/>
      },
      {
        path:"/signup",
        element:<Signin/>
      }
]);
export default Router;