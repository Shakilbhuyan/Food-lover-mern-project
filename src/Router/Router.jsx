import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home/Home";
import MainLayouts from "../layouts/MainLayouts";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayouts></MainLayouts>,
      children: [
        {
          path:'/',
          element:<Home></Home>
        }
      ]
    },
  ]);

  export default router;