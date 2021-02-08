import React from "react";
import "./Filter.css";
import PropTypes from "prop-types";

class Filter extends React.Component {
  state = { category: "View All" };
  handleChange = (event) => {
    const value = event.target.value;
    console.log("event.target.value:  " + value);
    if (value) {
      console.log(this.props);
      this.setState({ category: value });
      this.props.category(value);
    }
  };
  render() {
    console.log("this.state.category:  " + this.state.category);
    return (
      <div className="collection-sort">
        <label>Filter by:</label>
        <select value={this.state.category} onChange={this.handleChange}>
          {this.props.options.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
Filter.propTypes = {
  options: PropTypes.array,
  category: PropTypes.func,
};
export default Filter;
