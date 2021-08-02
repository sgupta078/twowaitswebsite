import React from "react";
import { NavLink } from "react-router-dom";
import web from "./images/web-dev.jpeg";
import dsa from "./images/dsa.png";
import cc from "./images/cc.png";
import ds from "./images/Data-Science.jpg";
import ai from "./images/AI.jpg";

const Service = () => {
    return (
        <>
                <section id="header">
                    <div className="Boom">
                    <div className="main-conn">
                    <div className="h-text"><h1 className="h1-text">Our Services</h1></div>
                    <div className="main-con">
                        <div class="card"><div className="images-overflow">
                            <img src={web} className="card-image" alt="Avatar" /></div>
                            <div class="captions">
                                <NavLink className="linkislink" exact to="/">Web Development</NavLink>
                                
                            </div>
                        </div>
                        <div class="card"><div className="images-overflow">
                            <img src={dsa} className="card-image" alt="Avatar" /></div>
                            <div class="captions">
                                <NavLink className="linkislink" exact to="/">Data Structures using C/C++</NavLink>
                                
                            </div>
                        </div>
                        <div class="card"><div className="images-overflow">
                            <img src={ai} className="card-image" alt="Avatar" /></div>
                            <div class="captions">
                                <NavLink className="linkislink" exact to="/">Artificial Intelligence</NavLink>
                                
                            </div>
                        </div>

                    </div>
                    <div className="main-con1">
                        <div class="card"><div className="images-overflow">
                            <img src={cc} className="card-image" alt="Avatar" /></div>
                            <div class="captions">
                                <NavLink className="linkislink" exact to="/">Cloud Computing</NavLink>
                                
                            </div>
                        </div>
                        <div class="card"><div className="images-overflow">
                            <img src={ds} className="card-image" alt="Avatar" /></div>
                            <div class="captions">
                                <NavLink className="linkislink" exact to="">Data Science</NavLink>
                                
                                
                            </div>
                        </div>

                    </div>
                    </div>
                    </div>
                </section>
        </>
    );
};

export default Service;