import React, { Fragment } from 'react';
import Header from './../shared/components/header';
import CarService from './../components/car-service';
import Categories from './../components/categories';

const Home = () => (
    <Fragment>
        <Header />
        <CarService />
        <Categories />
    </Fragment>
)

export default Home
