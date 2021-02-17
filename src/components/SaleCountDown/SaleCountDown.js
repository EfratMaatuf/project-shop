import React, { useState, useEffect, useRef } from "react";
import "./SaleCountDown.css";
import PropTypes from "prop-types";

const SaleCountDown = ({ end }) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
  }, []);
  useEffect(() => {
    if (seconds === -1) {
      setSeconds(59);
      setMinutes((minutes) => minutes - 1);
    }
  }, [seconds]);
  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      console.log("end");
      end();
      clearInterval(interval.current);
      interval.current = null;
    }
  }, [minutes, seconds, end]);

  return (
    <div className="saleCountDown">
      {interval.current && (
        <div>
          נותרו עוד&nbsp;
          {minutes > 9 ? minutes : "0" + minutes}:
          {seconds > 9 ? seconds : "0" + seconds}
          &nbsp;דקות לסוף המבצע
        </div>
      )}
      {!interval.current && <div>המבצע הסתיים</div>}
    </div>
  );
};
SaleCountDown.propTypes = {
  end: PropTypes.func,
};
export default SaleCountDown;
