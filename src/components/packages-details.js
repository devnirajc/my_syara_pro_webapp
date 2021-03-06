import React from 'react'
import CheckImg from './../assets/img/awesome-check-circle.png';
import CrossImg from './../assets/img/cross.png';

const PackagesDetails = () => (
    <div class="container-fluid sec_padding five service_sec">
            <div class="container">
            <div class="row m-80 mb-20">
            </div>
               <div class="row m-80 mb-20">
               <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 wow fadeInLeft">
                     <div class="plan-group-container">
                        <div class="plan-group">
                          <div class="plan-price">
                          <h6 class="px-4 pt-4">Basic Plan</h6>
                          <h1 class="px-4">AED 200</h1>
                          </div>
                        </div>
                        <p className="mb-1 mt-1 ml-3">Choose Plan Duration</p>
                        <div className="btn-group btn-block" role="group">
                            <button type="button" className="badge badge-dark btn-block m-0 p-2">One-time</button>
                            <button type="button" className="badge badge-light border-0 btn-block m-0 p-2">Weekly</button>
                            <button type="button" className="badge badge-light border-0 btn-block m-0 p-2">Monthly</button>
                            <button type="button" className="badge badge-light border-0 btn-block m-0 p-2">Yearly</button>
                        </div>
                        </div>
                  </div>
               
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 wow fadeInLeft">
                     <div class="cus_say_item">
                        <div class="cus_item_box">
                           <div class="item_box_package_details">
                              <ul class="pl-0">
                                 <li>
                                    <h2>Package Details</h2>
                                 </li>
                                 <hr class="clearfix"/>
                                <li class='item_box_package_details'>
                                    
                                    <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 wow fadeInRight">
                                    <h2>What???s Included</h2>
                                    <ul class="pl-0 check-icon">
                                       <li class='pt-1'><img src={CheckImg} class="w-15 pr-2" alt="check" />04 Exterior Wash</li>
                                       <li><img src={CheckImg} class="w-15 pr-2" alt="check" />Swirl Mark Protection</li>
                                       <li><img src={CheckImg} class="w-15 pr-2" alt="check" />10% Savings on Top</li>
                                       <li><img src={CheckImg} class="w-15 pr-2" alt="check" />Save Over 600 Litres of Water</li>
                                       <li><img src={CheckImg} class="w-15 pr-2" alt="check" />Eco-friendly & Paint Protection</li>
                                    </ul>
                                 </div>
                                 <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 wow fadeInRight">
                                    <h2>What???s Excluded</h2>
                                    <ul class="pl-0 check-icon">
                                       <li class='pt-1'><img src={CrossImg} class="w-15 pr-2" alt="cross icon"/>04 Exterior Wash</li>
                                       <li><img src={CrossImg} class="w-15 pr-2" alt="cross icon" />Swirl Mark Protection</li>
                                       <li><img src={CrossImg} class="w-15 pr-2" alt="cross icon" />10% Savings on Top</li>
                                       <li><img src={CrossImg} class="w-15 pr-2" alt="cross icon" />Save Over 600 Litres of Water</li>
                                       <li><img src={CrossImg} class="w-15 pr-2" alt="cross icon" />Eco-friendly & Paint Protection</li>
                                    </ul>
                                 </div>
                              </div>

                           </li>
                        </ul>
                     </div>
                     <div class="clearfix"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
)

export default PackagesDetails
