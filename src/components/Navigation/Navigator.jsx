import { Link } from "react-router";
import UserNav from '../Forms/UserNav.jsx';

const Navigator = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">LandinPage</Link>
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/counter" className="nav-link">Counter</Link>
            <Link to="/think" className="nav-link">Think</Link>
            <Link to="/products" className="nav-link">Product</Link>
            <Link to="/about" className="nav-link">About</Link>
            <div className="nav-user"><UserNav></UserNav></div>
        </nav>
    );
}

export default Navigator;