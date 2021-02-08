import React from "react";
import "./Header.css";
import Sort from "../Sort/Sort";
import PropTypes from "prop-types";

class Header extends React.Component {
  render() {
    return (
      <nav className="product-filter">
        <h1>Jackets</h1>
        <Sort
          products={this.props.products}
          category={(category) => this.props.category(category)}
        />
      </nav>
    );
  }
}
Header.propTypes = {
  products: PropTypes.array,
  category: PropTypes.func,
};
export default Header;
