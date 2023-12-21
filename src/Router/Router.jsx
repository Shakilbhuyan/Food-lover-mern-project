import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path:'/',
          element:<Home></Home>
        }
      ]
    },
  ]);

  export default router;