import React from 'react'

const Categories = () => (
    <div class="container-fluid sec_padding service_sec first pb-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h3 class="text-center sec_head wow fadeInDown">
                        Select Categories
                    </h3>
                    <p class="text-center sec_sub_head">
                        Please select a category to get the packages.
                    </p>
                    <div class="border_btm"></div>
                </div>
            </div>
            <div class="row ml-0 center-align" id="home-service-list">
                <div class="wide-range-item wow zoomIn" data-id="detailing-in">
                    <div class="wide_range_inner_item">
                        <img src="https://d3tel2th2e9f0m.cloudfront.net/media/service-category/car-detailing_hiX75SA.png" />
                        <h4 className="pt-4">Car Wash</h4>
                    </div>
                </div>
                <div class="wide-range-item" data-id="car-wash-in">
                    <div class="wide_range_inner_item">
                        <img src="https://d3tel2th2e9f0m.cloudfront.net/media/service-category/doorstep-car-wash-new.png" />
                        <h4 className="pt-4">Car Service</h4>
                    </div>
                </div>
                <div class="wide-range-item" data-id="car-wash-in">
                    <div class="wide_range_inner_item">
                        <img src="https://d3tel2th2e9f0m.cloudfront.net/media/service-category/doorstep-car-wash-new.png" />
                        <h4 className="pt-4">Combo</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Categories
