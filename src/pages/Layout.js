import React from "react";
import { Outlet} from "react-router-dom";
import '../styles/Layout.css'
import NavBar from "../components/NavBar";
function Layout() {
    return (
        <div >
            <Outlet />
        </div>
    );
}

export default Layout;