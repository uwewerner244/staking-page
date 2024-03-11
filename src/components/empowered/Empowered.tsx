import { FC, useEffect, useState } from "react";
import "./Empowered.scss";
import { useInView } from "react-intersection-observer";

import EmpoweredImage from "../../assets/empowered/empowered.png";
import EmpoweredShowcaseImage from "../../assets/empowered/empowered-showcase.png";
// import BubbleFloat from "../transitions/BubbleFloat";
import Services from "../services/Services";

const Parallax: FC = () => {
    const parallaxTexts = [
        "PAAL is empowered by",
        "cutting-edge machine",
        "learning algorithms",
    ];

    return (
        <section className="empowered-parallax-container">
            {/* <div className="vanta-background" ref={vantaRef} /> */}
            <div
                className="empowered-background"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            rgba(0, 0, 0, 0.1),
                            rgba(0, 0, 0, 0.6)
                        ),
                        url(${EmpoweredImage})
                    `,
                }}
            />

            <img
                src={EmpoweredShowcaseImage}
                alt="Empowered Showcase"
                className="empowered-showcase"
            />

            {parallaxTexts.map((text, index) => (
                <ParallaxItem
                    key={index}
                    label={text}
                    mini={index === 0}
                    offset={index * 75 + 160}
                    // offset={index * 75 + 190}
                />
            ))}

            {/* SPACER */}
            <div style={{ height: "30vh" }} />

            {/* <div className="parallax-item" style={{ background: "black" }}>
                <Services />
            </div> */}

            <div
                style={{
                    position: "sticky",
                    background: "black",
                }}
            >
                {/* <BubbleFloat /> */}
                <Services />
            </div>
        </section>
    );
};

export default Parallax;

type ParallaxItemProps = {
    label: string;
    mini: boolean;
    offset: number;
};

const ParallaxItem: FC<ParallaxItemProps> = ({ label, mini, offset }) => {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    const [shownText, setShownText] = useState("");

    useEffect(() => {
        const RATE = 50;

        if (inView) {
            const interval = setInterval(() => {
                setShownText((curr) => label.slice(0, curr.length + 1));
            }, RATE);

            return () => clearInterval(interval);
        } else {
            setShownText("");
        }
    }, [inView, label]);

    return (
        <div
            className="empowered-item"
            ref={ref}
            style={{
                top: offset,
            }}
        >
            <span
                className={`${
                    mini ? "empowered-text-mini" : ""
                } empowered-text`}
            >
                {shownText}
            </span>
        </div>
    );
};
