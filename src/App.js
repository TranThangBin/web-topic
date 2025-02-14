import { BannerSection, PromoSection } from "./components/ui/banner";
import { Footer } from "./components/ui/footer";
import {
    FeaturedBundleSection,
    FeaturedJamSection,
    GameCollection,
    RecommendedForYou,
    SeeMoreSection,
} from "./components/ui/main-content";
import { NavBar } from "./components/ui/nav-bar";
import { Sidebar } from "./components/ui/sidebar";

const latestFeaturedGames = [
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
];

const freshGames = [
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
];

const recommendedTags = [
    "No AI",
    "Horror",
    "2D",
    "Singleplayer",
    "Pixel Art",
    "Adventure",
    "Visual Novel",
    "Short",
    "3D",
    "Retro",
];

const recommendedForYou = [
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
];

const featuredJams = [
    {
        banner: "/images/brackey_game_jam.png",
        title: "Brackeys Game Jam 2025.1",
        joinedCount: 10947,
        submissionCount: 14,
        description:
            "Make a game in one week - The 13th official Brackeys Game Jam!",
    },
    {
        banner: "/images/brackey_game_jam.png",
        title: "Brackeys Game Jam 2025.1",
        joinedCount: 10947,
        submissionCount: 14,
        description:
            "Make a game in one week - The 13th official Brackeys Game Jam!",
    },
    {
        banner: "/images/brackey_game_jam.png",
        title: "Brackeys Game Jam 2025.1",
        joinedCount: 10947,
        submissionCount: 14,
        description:
            "Make a game in one week - The 13th official Brackeys Game Jam!",
    },
    {
        banner: "/images/brackey_game_jam.png",
        title: "Brackeys Game Jam 2025.1",
        joinedCount: 10947,
        submissionCount: 14,
        description:
            "Make a game in one week - The 13th official Brackeys Game Jam!",
    },
];

const moreFeaturedGames = [
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
    {
        icon: "/images/tower_wizard.png",
        title: "Tower Wizard",
        price: "WEB",
        tags: ["upgrades", "Idle"],
        description: "Construct the mightiest wizard tower!",
    },
];

function App() {
    return (
        <>
            <NavBar />
            <main className="mt-16 grid grid-cols-[auto_1fr]">
                <Sidebar />
                <div className="ml-72 flex flex-col">
                    <BannerSection />
                    <PromoSection
                        embedUrl="https://www.youtube.com/embed/_qu03DZRDqc"
                        gameDataProp={{
                            title: "Pretend it's not There",
                            description:
                                "Pretend that you can't see the monster, that may be the only way to survive.",
                            screenshotUrls: [
                                "/images/80awOh.png",
                                "/images/bT68k6.png",
                                "/images/4yI3I9.png",
                            ],
                            price: "FREE",
                            platforms: ["windows", "mac"],
                            tags: ["First-Person", "Horror", "Atmospheric"],
                        }}
                    />
                    <FeaturedBundleSection />
                    <GameCollection
                        heading="Latest Featured Games"
                        games={latestFeaturedGames}
                        haveViewAll
                    />
                    <GameCollection
                        heading="Fresh Games"
                        games={freshGames}
                        haveViewAll
                    />
                    <RecommendedForYou
                        tags={recommendedTags}
                        games={recommendedForYou}
                    />
                    <FeaturedJamSection jams={featuredJams} />
                    <GameCollection
                        heading="More Featured Games"
                        games={moreFeaturedGames}
                    />
                    <SeeMoreSection />
                    <Footer />
                </div>
            </main>
        </>
    );
}

export default App;
