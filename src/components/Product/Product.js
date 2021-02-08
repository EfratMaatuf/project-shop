import React from "react";
import "./Product.css";
import PropTypes from "prop-types";
import saleImage from "./saleImage.png";

class Product extends React.Component {
  render() {
    const { image, title, price, sale } = this.props;
    const style = {
      color: sale ? "red" : "black",
      fontWeight: sale ? "bold" : "normal",
    };

    return (
      <div className="product-card">
        <div className="product-image">
          <img src={image} alt="img"></img>
        </div>
        <div className="product-info">
          <h5>{title}</h5>
          <h6 style={style}>{price}$</h6>
        </div>
        {sale && (
          <img className="product-sale" src={saleImage} alt="sale"></img>
        )}
      </div>
    );
  }
}
Product.propTypes = {
  key: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  sale: PropTypes.bool,
};
export default Product;
