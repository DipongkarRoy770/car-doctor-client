import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import NavBar from "../pages/NavBar";


const Main = () => {
    return (
        <>
           <NavBar></NavBar> 
           <Outlet></Outlet>
           <Footer></Footer>
        </>
    );
};

export default Main;