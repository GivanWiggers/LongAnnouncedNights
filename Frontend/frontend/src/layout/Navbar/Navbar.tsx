import { useLocation, useHistory } from 'react-router';
import { VscAccount as AccountIcon } from 'react-icons/vsc';
import { FiLogOut as LogOutIcon } from 'react-icons/fi';
import { FaBell as BellIcon } from 'react-icons/fa'
import { MdAddBox as AddIcon } from "react-icons/md"
import "./NavbarStyles.scss";
import { useContext } from 'react';

export default function Navbar() {

    return (
        <nav>
            <NavbarRedirects />
            <NavbarUserSection />
        </nav>
    )
}

function NavbarRedirects() {
    const { pathname } = useLocation();
    const history = useHistory();

    return (
        <section>
            <img alt="LAN" src={""} /> {/*Nog een logo maken om hier in te zetten*/}
            <p className={pathname === "/party" ? "bold-text" : ""} onClick={() => history.push("party")}>Party</p>
            <p className={pathname === "/login" ? "bold-text" : ""} onClick={() => history.push("login")}>Login</p>
            <p className={pathname === "/history" ? "bold-text" : ""} onClick={() => history.push("history")}>History</p>
        </section>
    )
}

function NavbarUserSection() {
        return (
        <section>
            <AddIcon />
            <AccountIcon />
            <div className="Name-Container">
                <p>First name</p>
                <p>Last name</p>
            </div>
            <div className='Notification-Dropdown'>
                <BellIcon />
                <div className='Notification-Dropdown-Content'>
                    
                </div>
            </div>
            <LogOutIcon />
        </section>
    )
}