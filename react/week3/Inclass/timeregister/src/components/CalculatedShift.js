import React from "react";
// import AddShift from "./AddShift";

function CalculatedShift(props) {
  console.log(props.shifts);
  return (
    <>
      <div>
        {Object.keys(props.shifts).map((name) => (
          <>
            <h2 key={name}>{name}</h2>
            {props.shifts[name].map((shift) => shift.start)}
          </>
        ))}
      </div>
    </>
  );
}

export default CalculatedShift;
