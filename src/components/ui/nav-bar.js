import Logo from "../../images/itchio-textless-black.svg";
import Avatar from "../../images/frog-cyan.png";
import "../../fontawesome-free-6.7.2-web/css/all.min.css";

export function NavBar() {
    return (
        <nav className="fixed top-0 grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 bg-white px-4 text-lg font-bold">
            <NavList />
            <SearchBar />
            <UserSpace />
        </nav>
    );
}

function NavList() {
    return (
        <ul className="flex items-center gap-4">
            <li>
                <a href="">
                    <img className="w-10" src={Logo} alt="Logo of itch.io" />
                </a>
            </li>
            <NavListItem href="#" content="Browse" />
            <NavListItem href="#" content="Developer Logs" />
            <NavListItem href="#" content="Jams" />
            <NavListItem href="#" content="Dashboard" />
            <NavListItem href="#" content="Feed" />
            <NavListItem href="#" content="Community" />
        </ul>
    );
}

function NavListItem({ href, content }) {
    return (
        <li>
            <a
                className="inline-block border-b-4 border-b-transparent py-4 hover:border-b-red-600"
                href={href}
            >
                {content}
            </a>
        </li>
    );
}

function SearchBar() {
    return (
        <form className="flex w-4/5 items-center bg-gray-100 p-2">
            <input
                className="w-full text-sm font-normal outline-0"
                type="text"
                placeholder="Search for games, jams, tags or creators"
            />
            <a href="#">
                <i className="fa-solid fa-magnifying-glass" />
            </a>
        </form>
    );
}

function UserSpace() {
    return (
        <div className="flex items-center gap-4">
            <a href="#">
                <i className="fa-regular fa-bell" />
            </a>
            <a
                className="inline-flex items-center gap-2 font-normal hover:underline"
                href="#"
            >
                <img className="w-8" src={Avatar} alt="Avatar of the user" />
                Username
            </a>
            <button className="cursor-pointer rounded-lg px-2 py-1 transition-colors hover:bg-gray-200">
                <i className="fa-solid fa-chevron-down" />
            </button>
        </div>
    );
}
