import React from "react";
import NavTabs from "./NavTabs";



function Header() {
    return (
        <header className="header">
            
            <h1>Brooke Cline</h1>
            <div className="nav-border">
            <NavTabs/>
            </div>

        </header>
    )
}

export default Header;