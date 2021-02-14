import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

class App extends React.Component {
  state = { products: [], category: "View All", categories: [] };

  async componentDidMount() {
    const res = await fetch("https://fakestoreapi.com/products");
    const json = await res.json();
    this.setState({ products: json });

    let categories;
    const groupBy = (xs, key) =>
      xs.reduce((rv, x) => {
        rv[x[key]] = true || [];
        return rv;
      }, {});
    categories = Object.keys(groupBy(this.state.products, "category"));
    categories.unshift("View All");
    this.setState({ categories });
    console.log(this.state.categories);
  }

  render() {
    return (
      <app>
        <Header
          categories={this.state.categories}
          category={(category) => this.setState({ category })}
        />
        <Products
          products={this.state.products}
          category={this.state.category}
        />
      </app>
    );
  }
}
export default App;
