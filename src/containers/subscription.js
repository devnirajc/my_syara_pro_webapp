import React, { Fragment } from 'react';
import Header from './../shared/components/header';
import PackagesDetails from './../components/packages-details';
import TermsAndConditions from './../components/terms-and-conditions';
import Discount from './../components/discount';

const Subscription = () => (
    <Fragment>
        <Header />
        <PackagesDetails />
        <Discount />
        <TermsAndConditions />
    </Fragment>
)

export default Subscription
