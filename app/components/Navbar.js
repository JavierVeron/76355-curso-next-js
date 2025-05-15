import Logo from "./Logo"
import Menu from "./Menu"

const Navbar = () => {
    return (
        <header className="container m-auto flex flex-row my-5 justify-between">
            <Logo />
            <Menu />
        </header>
    )
}

export default Navbar