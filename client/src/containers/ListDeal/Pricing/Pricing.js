import React, { Component } from "react";
import "./Pricing.css";

const Pricing = props => {
  // const {} = props;

  return (
    <div className="add-price-for-deal">
      <div className="listed-price-in-dollar">
        <div className="pricing-titles">Price in Dollar</div>
        <div className="pricing-input-row">
          <i class="fas fa-dollar-sign fa-2x" />
          <input
            autofocus="autofocus"
            className="pricing-input"
            type="number"
            placeholder="Enter a price"
          />
        </div>
        <small className="pricing-footer-note">
          This is your price if buyer pay in USD.
        </small>
      </div>
      <div className="listed-price-in-crypto">
        <div className="listed-price-in-crypto-left">
          <div className="pricing-titles">Price in Cryptocurrency</div>
          <div className="pricing-input-row">
            <i class="fas fa-dollar-sign fa-2x" />
            <input
              className="pricing-input pricing-input-crypto"
              type="number"
              placeholder="Enter a price"
            />
          </div>
          <small className="pricing-footer-note">
            This is your price if buyer pay in Cryptocurrency.
          </small>
        </div>
        <div className="listed-price-in-crypto-right">
          <div className="create-deal-discount-percent">
            {props.showDiscountPercent}% OFF
          </div>
          <input
            onChange={props.changeDiscountPercent}
            type="range"
            min="10"
            max="100"
            defaultValue={props.showDiscountPercent}
            value={props.showDiscountPercent}
            id="percent-slider"
          />
          <div className="pricing-slider-footer-note">
            <small>
              Minimum 10% off is required.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
