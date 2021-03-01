import React from "react";
import "./Header.css";
import Sort from "../Sort/Sort";
// import SliderPrice from "../SliderPrice/SliderPrice";
import PropTypes from "prop-types";
import { Slider } from "antd";
// import { DatePicker } from 'antd';

const Header = ({ categories, changeCategory }) => {
  function onChange(value) {
    console.log("onChange: ", value);
  }

  function onAfterChange(value) {
    console.log("onAfterChange: ", value);
  }

  return (
    <nav className="product-filter">
      <h1 className="titleHome">Jackets</h1>

      <Slider
        style={{ width: "20%" }}
        range
        step={10}
        defaultValue={[20, 50]}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
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
