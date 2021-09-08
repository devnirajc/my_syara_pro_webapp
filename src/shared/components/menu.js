import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import headerLogo from './../../assets/img/logo-text-light.0fc643efc918.png';
import proLogo from './../../assets/img/pro.png';

const currentTab = (history, path) => {
    if (history) {
        return history?.location?.pathname === path ? 'nav-link active' : 'nav-link';
    }
}

const Menu = ({ history }) => (
    <Fragment>
        <nav className="navbar sticky-top navbar-expand-md container-fluid header-menu mobile hidden">
            <button type="button" className="navbar-toggler float-left" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-brand float-left">
                <a href="index.html"><img src={headerLogo} className="w-75" alt="header logo"/></a>
            </div>
            <div className="country_box float-left">
                <div className="country_sel_box"><span className="selected-city"></span> <i className="fa fa-caret-down" aria-hidden="true"></i></div>
                <div className="country_list hidden">
                    <ul className="pl-0 mb-0 cities-list"></ul>
                </div>
            </div>
            <div className="user float-left" id="user-mobile">
                <a href="###" className="login" data-toggle="modal" data-target="#login" data-backdrop="static" data-keyboard="false"> <i className="fa fa-sign-in p-1" aria-hidden="true"></i> </a>
                <div className="logout" style={{ display: "none" }}>
                    <i className="fa fa-user p-1" aria-hidden="true"></i>
                    <i className="fa fa-caret-down p-1" aria-hidden="true"></i>
                    <div className="hide-user hidden">
                        <a href="my-profile.html" className="my-profile"> <div className="user-sub-menu">My Profile </div></a>
                        <a href="my-wallet.html" className="my-wallet"> <div className="user-sub-menu">My Wallet </div></a>
                        <a href="my-cars.html" className="my-cars"> <div className="user-sub-menu">My Cars </div></a>
                        <a href="my-orders.html" className="my-order"> <div className="user-sub-menu">My Orders </div></a>
                        <a href="referall.html" className="referal"> <div className="user-sub-menu">Refer a Friend </div></a>
                        <a href="###" onclick="logout();"> <div className="user-sub-menu" style={{ border: "none" }}>Logout </div></a>
                    </div>
                </div>
            </div>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <div className="">
                        <a href="index.html" className="index" style={{ color: "black" }}> <div className="user-sub-menu index active"> Home </div></a>
                        <a href="services.html" className="services" style={{ color: "black" }}><div className="user-sub-menu ">Services</div></a>
                        <a href="###" className="about" style={{ color: "black" }}><div className="user-sub-menu ">About</div></a>
                        <a href="###" className="blog" style={{ color: "black" }}><div className="user-sub-menu "> Blog </div></a>
                        <a href="###" className="contact" style={{ color: "black" }}><div className="user-sub-menu "> Contact </div></a>
                        <a href="###" className="social-media" style={{ color: "black" }}> <div className="user-sub-menu  last-menu">Mobile App</div></a>
                    </div>
                </div>
            </div>
        </nav>
        <header className="header-menu">
            <div className="container-fluid">
                <div id="header-fix" className="header">
                    <nav className="navbar navbar-expand-md navbar-light p-0">
                        <div className="logo">
                            <a className="navbar-brand mr-0" href="index.html"><img src={headerLogo} className="img-fluid w-75" alt="header logo"/><img src={proLogo} style={{ width: "45px" }} alt="header logo"/></a>
                        </div>
                        <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto nav">
                                <li className="nav-item">
                                    <Link className={currentTab(history, '/')} to='/'>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={currentTab(history, '/subscription')}
                                        to='/subscription'>
                                        Subscriptions
                                    </Link>
                                </li>
                            </ul>
                            <div className="user" id="user">
                                <a href="###" className="login" data-toggle="modal" data-target="#login" data-backdrop="static" data-keyboard="false"> <i className="fa fa-sign-in p-1" aria-hidden="true"></i> Login </a>
                                <div className="logout" style={{ display: "none" }}>
                                    <i className="fa fa-user p-1" aria-hidden="true"></i>
                                    Hello <span id="username"></span>
                                    <i className="fa fa-caret-down p-1" aria-hidden="true"></i>
                                    <div className="hide-user hidden">
                                        <a href="my-profile.html" className="my-profile"> <div className="user-sub-menu">My Profile </div></a>
                                        <a href="my-wallet.html" className="my-wallet"> <div className="user-sub-menu">My Wallet </div></a>
                                        <a href="my-cars.html" className="my-cars"> <div className="user-sub-menu">My Cars </div></a>
                                        <a href="my-orders.html" className="my-order"> <div className="user-sub-menu">My Orders </div></a>
                                        <a href="referall.html" className="referal"> <div className="user-sub-menu">Refer a Friend </div></a>
                                        <div className="user-sub-menu" style={{ border: "none" }}>Logout</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    </Fragment>
)

export default withRouter(Menu)
