import React from "react";
import web from "./images/about-image.png";
import Common from "./Common";
const About = () => {
    return (
        <>
            <Common name="Welcome to About page" imgsrc={web} visit="/contact" btname="Contact Us" />
        </>
    );
};

export default About;