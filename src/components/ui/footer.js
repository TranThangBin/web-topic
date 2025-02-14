export function Footer() {
    return (
        <footer className="flex flex-col items-center gap-4 bg-gray-200 py-8 text-sm text-gray-400">
            <ul className="flex gap-8 font-bold">
                <li>
                    <a className="hover:text-gray-300" href="#">
                        <i className="fa-brands fa-twitter text-lg" />
                    </a>
                </li>
                <li>
                    <a className="hover:text-gray-300" href="#">
                        <i className="fa-brands fa-square-facebook text-lg" />
                    </a>
                </li>
                <li>
                    <a className="hover:text-gray-300" href="#">
                        ABOUT
                    </a>
                </li>
                <li>
                    <a className="hover:text-gray-300" href="#">
                        FAQ
                    </a>
                </li>
                <li>
                    <a className="hover:text-gray-300" href="#">
                        BLOG
                    </a>
                </li>
                <li>
                    <a className="hover:text-gray-300" href="#">
                        CONTACT US
                    </a>
                </li>
            </ul>
            <div className="flex gap-4 font-bold">
                <span className="font-normal">Copyright © 2025 itch corp</span>
                .
                <a href="#" className="font-normal underline">
                    Directory
                </a>
                .
                <a href="#" className="font-normal underline">
                    Terms
                </a>
                .
                <a href="#" className="font-normal underline">
                    Privacy
                </a>
                .
                <a href="#" className="font-normal underline">
                    Cookies
                </a>
            </div>
        </footer>
    );
}
