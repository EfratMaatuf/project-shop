import React from "react";
import "./Products.css";
import SaleCountDown from "../SaleCountDown/SaleCountDown";
import Product from "../Product/Product";
import PropTypes from "prop-types";

class Products extends React.Component {
  state = { sale: true };
  productsOnSale = [2, 3, 4, 7, 9, 12, 15, 16, 17, 18, 20];
  render() {
    let productsFilter;
    if (this.props.category !== "View All") {
      productsFilter = this.props.products.filter(
        ({ category }) => this.props.category === category
      );
    } else {
      productsFilter = this.props.products;
    }
    return (
      <section className="products">
        <SaleCountDown end={() => this.setState({ sale: false })} />
        {productsFilter.map(({ id, title, image, price }) => (
          <Product
            key={id}
            title={title}
            image={image}
            price={price}
            sale={
              this.state.sale && this.productsOnSale.indexOf(id) !== -1
                ? true
                : false
            }
          />
        ))}
      </section>
    );
  }
}
Products.propTypes = {
  products: PropTypes.array,
  category: PropTypes.string,
};
export default Products;
