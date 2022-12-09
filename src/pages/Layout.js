import React from "react";
import { Outlet} from "react-router-dom";
import '../styles/Layout.css'
function Layout() {
    const style = {
        height: "100vh",
        width: "100vw"
    }

    return (
        <div style={style}>
            <Outlet />
        </div>
    );
}

export default Layout;