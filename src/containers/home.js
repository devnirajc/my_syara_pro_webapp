import React, { Fragment } from 'react';
import Header from './../shared/components/header';
import CarService from './../components/car-service';
import Categories from './../components/categories';
import Packages from './../components/packages';

const Home = () => (
    <Fragment>
        <Header />
        <CarService />
        <Categories />
        <Packages />
    </Fragment>
)

export default Home
