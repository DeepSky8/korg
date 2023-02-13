import React from "react";
import Body from "./body/Body";
import Header from "./header/Header";


const Home = () => {
    return (
        <div className="page-container">
            <div className="display-container">
                <div className="center-container">
                    <Header />
                    <Body />

                </div>

            </div>

        </div>
    )
}

export default Home