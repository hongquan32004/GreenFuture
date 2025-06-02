import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar";
import "./index.css";
import Footer from "../footer/footer";



const MainLayout = () => {
    return (
        <div className="main-layout">
            <div className="main-header">
                <Header/>
            </div>
            <div className="main-content-container">
                <div className="main-sidebar">
                    <Sidebar/>
                </div>
                <div className="main-content" >
                    <Outlet />
                </div>
            </div>
            <div className="main-footer">
                <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;