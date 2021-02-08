import React from "react";
import "./Sort.css";
import Filter from "../Filter/Filter";
import PropTypes from "prop-types";

class Sort extends React.Component {
  categories = [];
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
  insertCategories() {
    const groupBy = (xs, key) =>
      xs.reduce((rv, x) => {
        rv[x[key]] = true || [];
        return rv;
      }, {});
    this.categories = Object.keys(groupBy(this.props.products, "category"));
    this.categories.unshift("View All");
  }
  render() {
    if (this.props.products.length) {
      this.insertCategories();
    }
    return (
      <div className="sort">
        <Filter
          options={this.categories}
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
  products: PropTypes.array,
  category: PropTypes.func,
};
export default Sort;
