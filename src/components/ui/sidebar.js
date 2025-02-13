import "../../fontawesome-free-6.7.2-web/css/all.min.css";

export function Sidebar() {
    return (
        <aside className="fixed max-h-[calc(100vh-4rem)] overflow-auto bg-gray-200 px-4 py-2">
            <SidebarSection
                title="POPULAR TAGS"
                listItemDatas={[
                    { href: "#", content: "Browser games" },
                    { href: "#", content: "Horror games" },
                    { href: "#", content: "Multiplayer" },
                    { href: "#", content: "Visual novels" },
                    { href: "#", content: "Simulation" },
                    { href: "#", content: "macOS" },
                    { href: "#", content: "Roguelike" },
                    { href: "#", content: "Linux games" },
                    { href: "#", content: "Browse all tags" },
                ]}
            />
            <SidebarSection
                title="BROWSE"
                listItemDatas={[
                    { href: "#", content: "Games" },
                    { href: "#", content: "Game assets" },
                    { href: "#", content: "Tools" },
                    { href: "#", content: "Album & soundtracks" },
                    { href: "#", content: "Physical games" },
                    { href: "#", content: "Comics" },
                    { href: "#", content: "Books" },
                    { href: "#", content: "Randomizer" },
                ]}
            />
            <SidebarSection
                title="GAMES BY PRICE"
                listItemDatas={[
                    { href: "#", content: "On Sale" },
                    { href: "#", content: "Free games" },
                    { href: "#", content: "With demo" },
                    { href: "#", content: "Top sellers" },
                    { href: "#", content: "$5 or less" },
                    { href: "#", content: "$15 or less" },
                ]}
            />
            <MediaSection />
            <BlogSection />
        </aside>
    );
}

function SidebarSection({ title, listItemDatas }) {
    return (
        <section className="my-4">
            <h2 className="px-2 py-1 text-lg font-bold">{title}</h2>
            <ul className="grid grid-cols-2 items-center gap-y-1">
                {listItemDatas.map(({ href, content }) => (
                    <ListItem href={href} content={content} />
                ))}
            </ul>
        </section>
    );
}

function ListItem({ href, content }) {
    return (
        <li>
            <a
                className="inline-block w-32 px-2 text-gray-600 hover:text-red-700 hover:underline"
                href={href}
            >
                {content}
            </a>
        </li>
    );
}

function MediaSection() {
    return (
        <section className="my-4 flex items-center justify-center gap-2 text-lg">
            <a className="hover:text-red-700" href="#">
                <i className="fa-brands fa-reddit-alien" />
            </a>
            <a className="hover:text-red-700" href="#">
                <i className="fa-brands fa-square-facebook" />
            </a>
            <a className="hover:text-red-700" href="#">
                <i className="fa-brands fa-twitter" />
            </a>
            <a className="ml-5 text-sm hover:text-red-700" href="#">
                Download app
            </a>
        </section>
    );
}

function BlogSection() {
    return (
        <section>
            <h2 className="px-2 py-1 text-lg font-bold">
                FROM THE ITCH.IO BLOG
            </h2>
            <ul>
                <BlogListItem
                    href="#"
                    content="Kick off 2025 with these game jams"
                    date="27d"
                />
                <BlogListItem
                    href="#"
                    content="The Autumn Sale starts this Wednesday, plus Creator Day on Friday!"
                    date="79d"
                />
                <BlogListItem
                    href="#"
                    content="Top Rated Spooky Games to Play This Halloween"
                    date="111d"
                />
                <BlogListItem
                    href="#"
                    content="Fresh action games you can play right in your browser"
                    date="117d"
                />
                <BlogListItem
                    href="#"
                    content="itch.io Recommends: More Ludum Dare 56 Games"
                    date="120d"
                />
                <BlogListItem
                    href="#"
                    content="Get Ready for Spooky Season with These Game Jams!"
                    date="121d"
                />
                <BlogListItem
                    href="#"
                    content="Free and fresh browser games for your weekend"
                    date="123d"
                />
                <BlogListItem
                    href="#"
                    content="Pixel Perfect: GB Pixel Art Jam 2024"
                    date="124d"
                />
            </ul>
        </section>
    );
}

function BlogListItem({ href, content, date }) {
    return (
        <li className="my-2">
            <a
                className="group grid w-60 grid-cols-[auto_1fr] px-2 text-gray-600 hover:text-red-700 hover:underline"
                href={href}
            >
                <span>{content}</span>
                <span className="ml-auto text-gray-400 group-hover:text-red-400">
                    {date}
                </span>
            </a>
        </li>
    );
}
