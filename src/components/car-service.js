import React, { Fragment } from 'react';
import carServiceImage from './../assets/img/header-banner.svg';

const CarService = () => (
    <Fragment>
        <div className="container first_sec">
            <div className="row pl-5 pr-5">
                <div className="col-7 col-sm-5 col-md-6 col-lg-6 left_content wow fadeInLeft " >
                    <h1>Welcome to MySyara Pro</h1>
                    <p className="pt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <div className="left_sel_box">
                        <button className="select-car select-car-home mt-4">
                            Select Your City
                            <i className="fa fa-caret-down p-1" aria-hidden="true"></i>
                        </button>
                        <div className="select-inner-box hidden" id="car_item">
                            <div className="sel_bra_box">
                                <label className="brand-label">Select Brand</label>
                                <div className="sel_bra_box_inner">
                                    <input className="form-control search_box" type="search" id="search" placeholder="Search" aria-label="Search" autocomplete="off" />
                                    <i className="fa fa-search"></i>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="border_bot">
                                <hr />
                            </div>
                            <div className="sel_box_inn_item text-center" id="cars-brands"></div>
                            <div className="no-result hidden text-center">No Result Found!</div>
                        </div>
                    </div>
                    <div className="left_sel_box">
                        <button className="select-car select-car-home mt-4">
                            Select Your Car
                            <i className="fa fa-caret-down p-1" aria-hidden="true"></i>
                        </button>
                    </div>
                    <button className="check-service mt-4 z-1">Explore Packages</button>
                </div>
                <div className="col-5 col-sm-5 col-md-6 col-lg-6 right_img wow fadeInRight ">
                    <img src={carServiceImage} alt="car service"/>
                </div>
            </div>
        </div>
    </Fragment>
)

export default CarService