import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

class App extends React.Component {
  state = { products: [], category: "View All" };
  async componentDidMount() {
    const res = await fetch("https://fakestoreapi.com/products");
    const json = await res.json();
    this.setState({ products: json });
  }
  render() {
    return (
      <app>
        <script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
        <Header
          products={this.state.products}
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
