import React from "react";
import Header from './Header';
import Navigation from './Navigation';

const About = () => {
    return (
        <>
            <Header />
            <Navigation />
            <div id="about">
                <p>Simple presentation visualiser with automatic slide progression.</p>
                <p>
                    I built this in early 2020 to learn <a href="https://strapi.io/">Strapi CMS</a> 
                    and get acquainted with <a href="https://reactjs.org/docs/hooks-intro.html">React Hooks</a>.
                </p>
                <p><a href="http://shamgate.co">my website</a></p>
            </div>
        </>
    );
};

export default About;