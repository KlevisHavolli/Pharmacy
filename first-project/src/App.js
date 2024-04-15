import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
     <Navbar/>
     <Home/>
     <Footer/>
    </div>,
  },
  

  
  {
    path: "/",
    element: <div>This is HomePage!</div>,
  },
  
  {
    path: "/register",
    element: <Register/>
  },

  {
    path: "/login",
    element: <Login/>
  },

  {
    path: "/home",
    element: <Home/>
  },

]);



function App() {
  return (
    <div>
      
        <RouterProvider router={router}/>

    </div>
  );
}

export default App;
