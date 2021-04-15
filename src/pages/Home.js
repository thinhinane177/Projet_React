import React from "react";
import Countries from "../components/countries";
import Logo from "../components/logos";
import Navigation from "../components/Navigation";

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <Logo/>
            <Countries/>

        </div>
    );
};

export default Home;