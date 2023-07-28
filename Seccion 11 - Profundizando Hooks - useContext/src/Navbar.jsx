import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
        </>
    )
}

export default Navbar