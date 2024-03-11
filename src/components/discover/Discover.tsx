import { FC } from "react";
import "./Discover.scss";

// TODO: get proper transparent image
import DiscoverRobotImage from "../../assets/discover/discover-robot.png";
import Sponsor from "../site/Sponsor";
import Divider from "../site/Divider";

const Discover: FC = () => {
    return (
        <>
            <Divider />
            <section className="discover-container" id="discover">
                <span className="discover-sub-heading">Discover</span>
                <h1 className="discover-heading">
                    The power of AI & machine learning
                </h1>

                <div className="discover-graphic-container">
                    <img
                        src={DiscoverRobotImage}
                        alt="Discover Robot"
                        className="discover-graphic"
                    />

                    <div className="sponsor-container">
                        <Sponsor />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Discover;
