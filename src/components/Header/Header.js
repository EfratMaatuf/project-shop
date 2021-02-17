import React from "react";
import "./Header.css";
import Sort from "../Sort/Sort";
import PropTypes from "prop-types";

const Header = ({ categories, changeCategory }) => {
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <Sort
        categories={categories}
        changeCategory={(category) => changeCategory(category)}
      />
    </nav>
  );
};
Header.propTypes = {
  categories: PropTypes.array,
  changeCategory: PropTypes.func,
};
export default Header;
