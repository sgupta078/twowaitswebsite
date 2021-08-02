import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
    return (
        <>
            <section className="sec" id="header">
                <div className="sec1">
                   <div className="con1">
                        <div className="con1-1">
                            <h1 className="saying">{props.name} <strong className="brand-name">Tathastu-TwoWaits</strong></h1>
                            <h2 className="my-3">We are the team of well-qualified Mentors</h2>
                            <div className="mt-3">
                                <NavLink exact to="{props.visit}" className="btn bbbt">{props.btname}</NavLink>
                            </div>
                        </div>
                        <div className="image">
                            <img src={props.imgsrc} className="img-fluid animated bounce" alt="home_img" />
                        </div>
                    </div>   
                </div>
            </section>
        </>
    );
};

export default Common;