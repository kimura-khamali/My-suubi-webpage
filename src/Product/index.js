import React from "react";
import Dashboard from "../Assets/Productimages/dashboard.png";
import Android from '../Assets/Productimages/laptop.png';
import "./index.css";

const Product = () => {
  return (
    <div className="products-container" id="products">
      <h2 className="products-heading">Products</h2>

      <div className="product-item">
        <h3 id="dash-subtitle">Dashboard</h3>
        <div className="product-content">
          <img src={Dashboard} alt="Dashboard" className="product-image" />
          <p className="product-description">
            We have Sacco tools which will enable your Sacco to{" "}
            <span className="highlight">APPROVE</span>,{" "}
            <span className="highlight">TRACK</span> and View Sacco{" "}
            <span className="highlight">ANALYTICS</span>.
          </p>
        </div>
      </div>
      <div className="product-check">
        <div className="product-item" id="product">
          <h3 className="product-subtitle">Android App</h3>
          <div className="product-content reverse">
            
            <img
              src={Android}
              alt="Android App"
              className="product-image"
              id="image-andriod"
            />
            <p className="product-description" id="description">
              We have member tools which will enable 
              your Sacco member to <span className="highlight">SAVE</span>,{" "}
              <span className="highlight">BORROW</span> and <br />{" "}
              <span className="highlight">REPAY</span> through their mobile
              phones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

//