import React from "react";
import "./SaleCountDown.css";
import PropTypes from "prop-types";

class SaleCountDown extends React.Component {
  state = { minutes: 0, seconds: 30, interval: null };
  componentDidMount() {
    this.state.interval = setInterval(() => {
      if (this.state.seconds - 1 !== -1) {
        this.setState((state) => {
          return { seconds: state.seconds - 1 };
        });
      } else {
        if (this.state.minutes !== 0) {
          this.setState((state) => {
            return { minutes: state.minutes - 1 };
          });
          this.setState({ seconds: 59 });
        } else {
          this.props.end();
          clearInterval(this.state.interval);
          this.setState({ interval: null });
        }
      }
    }, 1000);
  }
  render() {
    return (
      <div className="saleCountDown">
        {this.state.interval && (
          <div>
            נותרו עוד&nbsp;
            {this.state.minutes > 9
              ? this.state.minutes
              : "0" + this.state.minutes}
            :
            {this.state.seconds > 9
              ? this.state.seconds
              : "0" + this.state.seconds}
            &nbsp;דקות לסוף המבצע
          </div>
        )}
        {!this.state.interval && <div>המבצע הסתיים</div>}
      </div>
    );
  }
}
SaleCountDown.propTypes = {
  end: PropTypes.func,
};
export default SaleCountDown;
