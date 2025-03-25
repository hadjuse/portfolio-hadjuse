import '../assets/css/header.css';
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="App-header">
            <nav className="App-nav">
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) => isActive ? "active" : ""}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => isActive ? "active" : ""}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/portfolio"
                            className={({ isActive }) => isActive ? "active" : ""}
                        >
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => isActive ? "active" : ""}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}