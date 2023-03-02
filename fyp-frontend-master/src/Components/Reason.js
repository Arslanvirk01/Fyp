import React, { Component } from 'react';

function ReasonsComponent(){
    return(
        <div>
            <div className="section-home about-us fadeIn animated">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="about-us-col">
                                <div className="col-icon-wrapper">
                                    <img src="assets/images/icons/our-mission-icon.png" alt=""/>
                                </div>
                                    <h3 className="col-title">our mission</h3>
                                <div className="col-details">
                                    <p>Our mission is to help needy persons who cannot afford expensive medicines for thier treatment!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                        <div className="about-us-col">
                                <div className="col-icon-wrapper">
                                    <img src="assets/images/icons/make-donation-icon.png" alt=""/>
                                </div>
                                <h3 className="col-title">Make donations</h3>
                                <div className="col-details">
                                    <p>Donate Unused medicine here to help needy people because:</p>
                                    <p>“Giving is not just about making a donation. It is about making a difference!” </p>
                                </div>
                        </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                        <div className="about-us-col">
                                <div className="col-icon-wrapper">
                                    <img src="assets/images/icons/help-icon.png" alt=""/>
                                </div>
                                <h3 className="col-title">Help & support</h3>
                                <div className="col-details">
                                    <p>Help and support us beacuse Alone we can do so little; together we can do so much!</p>
                                </div>
                        </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                        <div className="about-us-col">
                                <div className="col-icon-wrapper">
                                    <img src="assets/images/icons/programs-icon.png" alt=""/>
                                </div>
                                <h3 className="col-title">our program</h3>
                                <div className="col-details">
                                    <p>Our program is to provide needy persons and donor a platform where donor can easily do donation and needy people can get it!</p>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReasonsComponent;