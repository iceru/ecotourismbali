import { Link } from "@inertiajs/react";
import Logo from "../../images/logo.png";

function Navbar() {
    return (
        <nav className="flex bg-white justify-between items-center py-[7px]">
            <div className="logo">
                <img src={Logo} alt="Eco Tourism Bali" />
            </div>
            <div>
                <ul className="flex gap-6 uppercase text-[15px] text-gray-400 items-center">
                    <Link href="#">
                        <li>About</li>
                    </Link>
                    <Link href="#">
                        <li>Programs</li>
                    </Link>
                    <Link href="#">
                        <li>Eco Tourism Tribe</li>
                    </Link>
                    <Link href="#">
                        <li className="bg-primary text-white px-[10px] py-[5px]">
                            Sustainable Verification
                        </li>
                    </Link>
                    <Link href="#">
                        <li>Blog and News</li>
                    </Link>
                    <Link href="#">
                        <li>Member Login</li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
