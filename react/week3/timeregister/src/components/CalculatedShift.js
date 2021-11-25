import React from "react";
import PropTypes from "prop-types";
import ResultShifts from "./ResultShifts";
// import AddShift from "./AddShift";

function CalculatedShift(props) {
  console.log(props.shifts);
  return (
    <>
      <div>
        {Object.keys(props.shifts).map((name) => (
          <>
            <ResultShifts name={name} details={props.shifts[name]} />
          </>
        ))}
      </div>
    </>
  );
}
CalculatedShift.prototype = {
  shifts: PropTypes.object,
};

export default CalculatedShift;
