import React from 'react';
import proIcon from './../assets/img/pro2x.png';

const Packages = () => (
    <div className="container-fluid sec_padding four">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="text-center sec_head wow fadeInDown">
                        Select Package
                    </h3>
                    <p className="text-center sec_sub_head">
                        We have 3 packages to fulfill your need.
                    </p>
                    <div className="border_btm"></div>
                </div>
            </div>
            <div className="row ml-0">
                <div className="card col-lg-4 col-sm-12">
                    <div className="card-body card-border m-2">
                        <div className="card-title basic-card-bg-image">
                            <div className="row">
                                <div className="col-8">
                                    <h5 className="px-4 pt-4">Basic</h5>
                                    <h2 className="px-4">AED 200</h2>
                                </div>
                                <div className="col-4"><img className="pro-icon" src={proIcon} alt="pro icon"/></div>
                            </div>
                            <p className="badge badge-dark px-4 p-2 mx-auto save-text">18% Savings</p>
                        </div>
                        <ul className="pt-3 font-weight-bold">
                            <li>Cras justo odio</li>
                            <li>Dapibus ac facilisis in</li>
                            <li>Vestibulum at eros</li>
                            <li>Cras justo odio</li>
                            <li>Dapibus ac facilisis in</li>
                            <li>Vestibulum at eros</li>
                        </ul>
                        <p className="text-center mb-1">Choose Plan Duration</p>
                        <div className="btn-group btn-block" role="group">
                            <button type="button" className="badge badge-dark btn-block m-0 p-2">One-time</button>
                            <button type="button" className="badge badge-light border-0 btn-block m-0 p-2">Weekly</button>
                            <button type="button" className="badge badge-light border-0 btn-block m-0 p-2">Monthly</button>
                            <button type="button" className="badge badge-light border-0 btn-block m-0 p-2">Yearly</button>
                        </div>
                        <a href="###" className="btn btn-dark btn-block p-3 font-weight-bold mt-3">Check Price</a>
                    </div>
                </div>
                <div className="card col-lg-4 col-sm-12">
                    <div className="card-body card-border m-2">
                        <div className="card-title gold-card-bg-image">
                            <div className="row">
                                <div className="col-8">
                                    <h5 className="px-4 pt-4">Gold</h5>
                                    <h2 className="px-4">AED 250</h2>
                                </div>
                                <div className="col-4"><img className="pro-icon" src={proIcon} alt="pro icon" /></div>
                            </div>
                            <p className="badge badge-dark px-4 p-2 mx-auto save-text">24% Savings</p>
                        </div>
                        <ul className="pt-3 font-weight-bold">
                            <li>Cras justo odio</li>
                            <li>Dapibus ac facilisis in</li>
                            <li>Vestibulum at eros</li>
                            <li>Cras justo odio</li>
                            <li>Dapibus ac facilisis in</li>
                            <li>Vestibulum at eros</li>
                        </ul>
                        <p className="text-center mb-1">Choose Plan Duration</p>
                        <div className="btn-group btn-block" role="group">
                            <button type="button" className="badge badge-dark btn-block m-0 p-2">One-time</button>
                            <button type="button" className="badge badge-light border-0 btn-block m-0 p-2">Weekly</button>
                            <button type="button" className="badge badge-light border-0 btn-block m-0 p-2">Monthly</button>
                            <button type="button" className="badge badge-light border-0 btn-block m-0 p-2">Yearly</button>
                        </div>
                        <a href="###" class="btn btn-dark btn-block p-3 font-weight-bold mt-3">Check Price</a>
                    </div>
                </div>
                <div className="card col-lg-4 col-sm-12">
                    <div className="card-body card-border m-2">
                        <div className="card-title platinum-card-bg-image">
                            <div className="row">
                                <div className="col-8">
                                    <h5 className="px-4 pt-4">Platinum</h5>
                                    <h2 className="px-4">AED 350</h2>
                                </div>
                                <div className="col-4"><img className="pro-icon" src={proIcon} alt="pro icon"/></div>
                            </div>
                            <p className="badge badge-dark px-4 p-2 mx-auto save-text">33% Savings</p>
                        </div>
                        <ul className="pt-3 font-weight-bold">
                            <li>Cras justo odio Lorem</li>
                            <li>Dapibus ac facilisis in</li>
                            <li>Vestibulum at eros</li>
                            <li>Cras justo odio</li>
                            <li>Dapibus ac facilisis in</li>
                            <li>Vestibulum at eros</li>
                        </ul>
                        <p className="text-center mb-1">Choose Plan Duration</p>
                        <div className="btn-group btn-block" role="group">
                            <button type="button" className="badge badge-dark btn-block m-0 p-2">One-time</button>
                            <button type="button" className="badge badge-light border-0 btn-block m-0 p-2">Weekly</button>
                            <button type="button" className="badge badge-light border-0 btn-block m-0 p-2">Monthly</button>
                            <button type="button" className="badge badge-light border-0 btn-block m-0 p-2">Yearly</button>
                        </div>
                        <a href="###" className="btn btn-dark btn-block p-3 font-weight-bold mt-3">Check Price</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Packages
