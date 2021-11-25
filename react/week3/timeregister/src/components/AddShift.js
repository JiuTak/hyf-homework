import React, { useState } from "react";
import CalculatedShift from "./CalculatedShift";

function AddShift(props) {
  const { onsubmit, onChangeName, onChangeStart, onChangeEnd } = props;
  const { name, startTime, endTime } = props;

  return (
    <>
      <h1> Submit shift</h1>
      <div>
        <label> Employee </label>{" "}
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={onChangeName}
        ></input>
        <br />
        <label> Start </label>{" "}
        <input
          type="datetime-local"
          value={startTime}
          placeholder="Date and Time"
          onChange={onChangeStart}
        ></input>
        <br />
        <label> End </label>{" "}
        <input
          type="time"
          value={endTime}
          placeholder="Date and Time"
          onChange={onChangeEnd}
        ></input>
        <br />
        <br />
        <button type="submit" onClick={onsubmit}>
          Submit shift
        </button>
      </div>
    </>
  );
}

export default AddShift;
