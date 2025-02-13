const platformIcons = new Map([
    ["windows", <i className="fa-brands fa-windows" />],
    ["mac", <i className="fa-brands fa-apple" />],
]);

export function BannerSection() {
    return (
        <section className="bg-banner py-4 pl-12 text-white">
            <a
                className="inline-block rounded-md border-2 p-2 text-sm text-gray-200 transition-colors hover:border-red-600 hover:bg-red-600"
                href="#"
            >
                Download app
            </a>
            <span className="ml-4 font-bold">
                Get the most out of itch.io!{" "}
            </span>
            Install and manage your games with our desktop app
        </section>
    );
}

export function PromoSection({ embedUrl, gameDataProp }) {
    return (
        <section className="bg-promo p-8 text-white">
            <div className="grid grid-cols-[40%_1fr] gap-8">
                <PromoVideo embedUrl={embedUrl} />
                <PromoGameDetail {...gameDataProp} />
            </div>
        </section>
    );
}

function PromoVideo({ embedUrl }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <iframe className="aspect-video w-full" src={embedUrl} />
            <a
                className="text-sm font-semibold text-gray-300 hover:text-white"
                href="#"
            >
                See more on itch.io's YouTube{" "}
                <i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
        </div>
    );
}

function PromoGameDetail({
    title,
    description,
    screenshotUrls,
    price,
    platforms,
    tags,
}) {
    return (
        <div className="flex flex-col items-start gap-2">
            <h3 className="text-3xl font-bold">{title}</h3>
            <div className="max-w-lg font-semibold">{description}</div>
            <div className="flex gap-2">
                {screenshotUrls.map((url, idx) => (
                    <img src={url} alt={`screen shot ${idx} of ${title}`} />
                ))}
            </div>
            <div className="flex w-full items-center gap-2">
                <span className="rounded-md bg-white px-2 py-1 text-sm font-bold text-black">
                    {price}
                </span>
                {platforms.map((platform) => platformIcons.get(platform))}
                <span className="ml-auto text-sm font-semibold">
                    {tags.map((tag) => "#" + tag).join(", ")}
                </span>
            </div>
            <a
                className="flex items-center rounded-md border-2 border-white px-3 py-2 text-lg font-bold transition-colors hover:bg-white hover:text-black"
                href="#"
            >
                Get the game
                <i className="fa-solid fa-arrow-right-long ml-[0.5ch]" />
            </a>
        </div>
    );
}
