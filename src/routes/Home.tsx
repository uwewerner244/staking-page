import { FC } from "react";
import Header_navbar from "../components/header/Header-nav";
import Hero from "../components/home/Hero";
import Parallax from "../components/parallax/Parallax";
// import Discover from "../components/discover/Discover";
import Features from "../components/features/Features";
import Benefits from "../components/benefits/Benefits";
import Divider from "../components/site/Divider";
import Explore from "../components/explore/Explore";
import Tagline from "../components/tagline/Tagline";
// import Empowered from "../components/empowered/Empowered";
import Services from "../components/services/Services";
import Whitelist from "../components/whitelist/Whitelist";
import Footer from "../components/site/Footer";

import Tools from "../components/tools/Tools.tsx";
// import Swap from "../components/swap/Swap.tsx";
import Partners from "../components/partners/Partners.tsx";

const Home: FC = () => {
    return (
        <>
            {/* <MobileNavigation /> */}
            <Header_navbar />

            <Hero />

            {/* <Divider /> */}
            {/* <Parallax /> */}
            {/* <Divider /> */}

            {/* NOT ACCESSED FROM HERE */}
            {/* <Discover /> */}

            {/* <Explore /> */}
            {/* <Divider /> */}

            <Tools />

            {/* <Divider />
            <Tagline />
            <Divider />

            <Features />

            <Benefits /> */}

            {/* <Empowered /> */}

            {/* <Divider /> */}
            {/* <Swap /> */}
            {/* <Divider />

            <Services />

            <Partners />

            <Whitelist />

            <Footer /> */}
        </>
    );
};

export default Home;
