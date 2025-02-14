import ParticleMace from "../../images/particle_mace.png";
import ForestFloors from "../../images/forest_floors.png";
import SuperExtra from "../../images/super_extra.png";
import ToCare from "../../images/to_care.png";
import SevenSeconds from "../../images/7_seconds.png";
import "../../fontawesome-free-6.7.2-web/css/all.min.css";

export function FeaturedBundle() {
    return (
        <section className="p-8">
            <h2 className="text-xl font-bold">Featured Bundle</h2>
            <div className="grid grid-cols-[auto_1fr]">
                <div className="flex flex-col border py-4 pr-24 pl-8">
                    <a className="text-lg text-red-600" href="#">
                        Games for Watermelon Bundle
                    </a>
                    <span>
                        <a href="#" className="text-gray-600">
                            Jet Simon
                        </a>{" "}
                        and 29 others
                    </span>
                    <span>
                        45 items for <span className="font-bold">$5.00</span>
                    </span>
                    <span className="text-sm font-semibold">
                        Bundle ends in 18 days
                    </span>
                </div>
                <div className="flex border border-l-0">
                    <div className="p-1">
                        <img
                            src={ParticleMace}
                            alt="featured bundle particle mace"
                            className="h-full"
                        />
                    </div>
                    <div className="p-1">
                        <img
                            src={ForestFloors}
                            alt="featured bundle forest floors"
                            className="h-full"
                        />
                    </div>
                    <div className="p-1">
                        <img
                            src={SuperExtra}
                            alt="featured bundle super extra"
                            className="h-full"
                        />
                    </div>
                    <div className="p-1">
                        <img
                            src={ToCare}
                            alt="featured bundle to care"
                            className="h-full"
                        />
                    </div>
                    <div className="p-1">
                        <img
                            src={SevenSeconds}
                            alt="featured bundle 7 seconds"
                            className="h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export function GameCollection({ heading, games, haveViewAll }) {
    return (
        <section className="p-8">
            <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold">{heading}</h2>
                {haveViewAll ? (
                    <a
                        className="rounded-md border px-2 py-1 text-sm font-semibold text-red-600"
                        href="#"
                    >
                        View all <i className="fa-solid fa-arrow-right-long" />
                    </a>
                ) : (
                    <></>
                )}
            </div>
            <ul className="my-4 grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-4">
                {games.map((game) => (
                    <GameItem {...game} />
                ))}
            </ul>
        </section>
    );
}

function GameItem({ icon, title, price, tags, description }) {
    return (
        <li className="flex flex-col gap-1 text-sm">
            <a href="#">
                <img src={icon} alt={`icon of ${title}`} />
            </a>
            <div className="flex items-center justify-between font-bold">
                <a href="#">{title}</a>
                <span className="rounded-md bg-gray-300 px-1">{price}</span>
            </div>
            <div className="">
                {tags.map((tag, idx) => (
                    <>
                        <a className="text-red-400 hover:text-red-600" href="#">
                            #{tag}
                        </a>
                        {idx < tags.length - 1 ? ", " : ""}
                    </>
                ))}
            </div>
            <span className="text-gray-600">{description}</span>
        </li>
    );
}

export function RecommendedForYou({ tags, games }) {
    return (
        <section className="flex flex-col gap-2 border-l-2 border-l-gray-300 bg-gray-200 p-8">
            <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold">Recommended For You</h2>
                <a
                    className="rounded-md border px-2 py-1 text-sm font-semibold text-red-600"
                    href="#"
                >
                    View all <i className="fa-solid fa-arrow-right-long" />
                </a>
            </div>
            <div className="text-gray-600">
                Based on things you've purchased, downloaded, and rated
            </div>
            <div className="flex items-center gap-2">
                <i className="fa-solid fa-tag text-lg" />
                {tags.map((tag) => (
                    <a
                        className="rounded-md border border-gray-400 px-2 py-1 text-sm"
                        href="#"
                    >
                        {tag}
                    </a>
                ))}
            </div>
            <ul className="flex gap-4">
                {games.map((game) => (
                    <GameItem {...game} />
                ))}
            </ul>
        </section>
    );
}

export function SeeMoreSection() {
    return (
        <section className="flex justify-center gap-4 pb-8 font-bold">
            Don't see anything you like
            <a
                className="rounded-md border px-2 py-1 text-sm font-semibold text-red-600"
                href="#"
            >
                View all games <i className="fa-solid fa-arrow-right-long" />
            </a>
            <a
                className="rounded-md border px-2 py-1 text-sm font-semibold text-red-600"
                href="#"
            >
                View something random <i className="fa-solid fa-shuffle" />
            </a>
        </section>
    );
}
