import "./App.css";
import AddShift from "./components/AddShift";
import CalculatedShift from "./components/CalculatedShift";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [shifts, setShifts] = useState({});

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeStart = (e) => {
    setStartTime(e.target.value);
  };

  const onChangeEnd = (e) => {
    setEndTime(e.target.value);
  };

  const onsubmit = () => {
    let newShifts = { ...shifts };
    if (!(name in shifts)) {
      newShifts[name] = [];
    }
    newShifts[name].push({ start: startTime, end: endTime });

    setShifts(newShifts);

    console.log("click", setShifts);
    console.log(newShifts);
  };

  return (
    <div className="App">
      <AddShift
        onsubmit={onsubmit}
        onChangeName={onChangeName}
        onChangeStart={onChangeStart}
        onChangeEnd={onChangeEnd}
      ></AddShift>
      <CalculatedShift shifts={shifts} />
    </div>
  );
}

export default App;
