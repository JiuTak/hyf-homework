import React from "react";
import PropTypes from "prop-types";

function ResultShifts({ name, details }) {
  return (
    <div>
      <h2 key={name}>{name}</h2> <p>Hourly wage:{100} dkk </p>
      {details.map((shift) => shift.start)}
    </div>
  );
}

ResultShifts.prototype = {
  name: PropTypes.string,
  details: PropTypes.array,
};

export default ResultShifts;
