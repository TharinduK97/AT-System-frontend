import React, {Component,useState, useEffect} from 'react';
import './home.css';
import {Link} from 'react-router-dom';


const Home = (props) => {

    return (
        <div>
<br/>

            <div className="container">
                <div className="row">
                    <div className="col-sm-1">

                    </div>
                    <div className="col">

                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <div className="card border-secondary mb-3" style={{width: "18rem"}}>
                                    <div className="card-body text-secondary">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to
                                            additional content.</p>
                                        <Link to="" className="btn btn-secondary">View More</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card border-secondary mb-3" style={{width: "18rem"}}>
                                    <div className="card-body text-secondary">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to
                                            additional content.</p>
                                        <a href="#" className="btn btn-secondary">View More</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card border-secondary mb-3" style={{width: "18rem"}}>
                                    <div className="card-body text-secondary">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to
                                            additional content.</p>
                                        <a href="#" className="btn btn-secondary">View More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col ">
                                <div className="card border-secondary mb-3" style={{width: "18rem"}}>
                                    <div className="card-body text-secondary">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to
                                            additional content.</p>
                                        <a href="#" className="btn btn-secondary">View More</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-sm-1">

                    </div>
                </div>
            </div>

        </div>

    );
}



export default Home;