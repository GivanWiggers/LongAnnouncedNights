import { useLocation, useHistory } from "react-router";
import { VscAccount as AccountIcon } from "react-icons/vsc";
import { FiLogOut as LogOutIcon } from "react-icons/fi";
import { FaBell as BellIcon } from "react-icons/fa";
import { MdAddBox as AddIcon } from "react-icons/md";
import LANLogo from "../../assets/Logo_temp2.png";
import "./NavbarStyles.scss";
import { useContext } from "react";

export default function Navbar() {
    return (
        <nav>
            <NavbarRedirects />
            <NavbarUserSection />
        </nav>
    );
}

function NavbarRedirects() {
    const { pathname } = useLocation();
    const history = useHistory();

    return (
        <section>
            <img alt="LAN" src={LANLogo} onClick={() => history.push("menu")} />
            {/* <AddIcon className="AddButton" onClick={() => history.push("menu")}/> */}
            <p className={pathname === "/party" ? "bold-text" : ""} onClick={() => history.push("party")}>
                Party
            </p>
            <p className={pathname === "/login" ? "bold-text" : ""} onClick={() => history.push("login")}>
                Login
            </p>
            <p className={pathname === "/history" ? "bold-text" : ""} onClick={() => history.push("history")}>
                History
            </p>
            {/* <p className={pathname === "/menu" ? "bold-text" : ""} onClick={() => history.push("menu")}>Menu</p> */}
        </section>
    );
}

function NavbarUserSection() {
    const history = useHistory();
    return (
        <section>
            <AddIcon onClick={() => history.push("menu")} />
            <AccountIcon />
            <div className="Name-Container">
                <p>First name</p>
                <p>Last name</p>
            </div>
            {/* <div className='Notification-Dropdown'>
                <BellIcon />
                <div className='Notification-Dropdown-Content'>
                    
                </div>
            </div> */}
            <LogOutIcon />
        </section>
    );
}
