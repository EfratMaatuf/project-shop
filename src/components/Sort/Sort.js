import React from "react";
import "./Sort.css";
import Filter from "../Filter/Filter";
import PropTypes from "prop-types";

class Sort extends React.Component {
  optionsSort = [
    "Featured",
    "Best Selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
    "Date, new to old",
    "Date, old to new",
  ];

  render() {
    return (
      <div className="sort">
        <Filter
          options={this.props.categories}
          category={(category) => this.props.category(category)}
        />
        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            {this.optionsSort.map((option, index) => (
              <option value="/" key={index}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
Sort.propTypes = {
  categories: PropTypes.array,
  category: PropTypes.func,
};
export default Sort;
