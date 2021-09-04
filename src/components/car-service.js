import React, { Fragment } from 'react';
import carServiceImage from './../assets/img/header-banner.svg';

const CarService = () => (
    <Fragment>
        <div class="container first_sec">
            <div class="row pl-5 pr-5">
                <div class="col-7 col-sm-5 col-md-6 col-lg-6 left_content wow fadeInLeft " >
                    <h1>Welcome to MySyara Pro</h1>
                    <p class="pt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <div class="left_sel_box">
                        <button class="select-car select-car-home mt-4">
                            Select Your Car
                            <i class="fa fa-caret-down p-1" aria-hidden="true"></i>
                        </button>
                        <div class="select-inner-box hidden" id="car_item">
                            <div class="sel_bra_box">
                                <label class="brand-label">Select Brand</label>
                                <div class="sel_bra_box_inner">
                                    <input class="form-control search_box" type="search" id="search" placeholder="Search" aria-label="Search" autocomplete="off" />
                                    <i class="fa fa-search"></i>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="border_bot">
                                <hr />
                            </div>
                            <div class="sel_box_inn_item text-center" id="cars-brands"></div>
                            <div class="no-result hidden text-center">No Result Found!</div>
                        </div>
                    </div>
                    <button class="check-service mt-3 z-1" onclick="checkService();">Check Service</button>
                    <div class="or_sec mt-3">
                        <ul class="pl-0">
                            <li>
                                <div class="border-line"></div>
                            </li>
                            <li>OR</li>
                            <li>
                                <div class="border-line"></div>
                            </li>
                        </ul>
                    </div>
                    <a id="regionSupportPhone" href="#">
                        <button class="mt-3 talk-btn z-1"><i class="fa fa-phone mr-2" aria-hidden="true"></i>
                            Talk to An Expert
                        </button>
                    </a>
                </div>
                <div class="col-5 col-sm-5 col-md-6 col-lg-6 right_img wow fadeInRight ">
                    <img src={carServiceImage} />
                </div>
            </div>
        </div>
    </Fragment>
)

export default CarService