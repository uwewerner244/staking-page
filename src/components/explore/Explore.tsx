import { FC } from "react";
import "./Explore.scss";
import Button from "../site/Button";

const Explore: FC = () => {
    // const cardTexts = [
    //     "Advanced AI and machine learning",
    //     "Multi-platform integration",
    //     "Custom dataset training",
    //     "Adaptable and Evolving",
    // ];

    const listTexts = [
        "1% of all $PAAL trading volume.",
        "AI tools subscription.",
        "Service revenue sharing.",
        "15% referral rewards.",
        "Partner projects Airdrops.",
    ];

    return (
        <section
            className="explore-container site-content-container"
            id="stake"
        >
            <p className="explore-info">
                PAAL is a robust AI ecosystem leveraging advanced AI and ML
                technologies. It enables users to create personalized AI, deploy
                it across multiple platforms including Telegram and Discord, and
                offers comprehensive AI solutions for businesses and projects
            </p>

            {/*<div className="explore-cards">*/}
            {/*    {cardTexts.map((label, index) => (*/}
            {/*        <ExploreCard key={index} label={label} />*/}
            {/*    ))}*/}
            {/*</div>*/}

            <h2 className="explore-heading">
                Revenue Sharing & Rewards for Stakers
            </h2>

            <ul className="explore-list">
                {listTexts.map((text, index) => (
                    <li key={index}>{text}</li>
                ))}
            </ul>

            <div className="center-items explore-actions">
                <Button
                    label="Stake Now"
                    mini
                    link="https://rewards.paalai.io/"
                />
            </div>
        </section>
    );
};

export default Explore;

// type ExploreCardProps = { label: string };
//
// const ExploreCard: FC<ExploreCardProps> = ({ label }) => {
//     return (
//         <div className="explore-card">
//             <span className="explore-card-label">{label}</span>
//         </div>
//     );
// };
