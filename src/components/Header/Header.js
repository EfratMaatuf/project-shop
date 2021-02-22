import React from "react";
import "./Header.css";
import Sort from "../Sort/Sort";
// import SliderPrice from "../SliderPrice/SliderPrice";
import PropTypes from "prop-types";

const Header = ({ categories, changeCategory }) => {
  return (
    <nav className="product-filter">
      <h1 className="titleHome">Jackets</h1>
      {/* <SliderPrice /> */}
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
