import React from 'react';
import './Footer.css';

const footer=()=>{
    return(
        <div className="">

            <div className="row" style={{textalign:"center"}}>

            </div>


            <footer className="footer-bs ">
                <div className="row">
                    <div className="col-md-3 footer-brand animated fadeInLeft">
                        <h2></h2>
                        <p></p>
                        <p>Conqureos, All rights reserved</p>
        </div>
                    <div className="col-md-4 footer-nav animated fadeInUp">

                        <div className="col-md-6">
                            <ul className="list">

                                <li><a href="#">Terms & Condition</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 footer-social animated fadeInDown">
                        <h4>Follow Us</h4>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>

                        </ul>
                    </div>
                    <div className="col-md-3 footer-ns animated fadeInRight">
                        <h4>Newsletter</h4>
                        <p>A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>
                        <p>


                        </p>
                    </div>
                </div>
            </footer>

        </div>
    )
};

export default footer;