import "./App.css";
import AddShift from "./components/AddShift";
import CalculatedShift from "./components/CalculatedShift";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [shifts, setShifts] = useState({});

  useEffect(() => {
    getResult();
    async function getResult() {
      const result = await fetch(
        "https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw"
      );
      const data = result.json();
      let newShifts = {};
      for (let i = 0; i < data.length; i++) {
        newShifts = generateShift(
          data[i].name,
          data[i].startTime,
          data[i].endTime,
          newShifts
        );
      }
      setShifts(newShifts);
    }
  }, []);

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
    const newShifts = generateShift(name, startTime, endTime, shifts);

    setShifts(newShifts);

    console.log("click", setShifts);
    console.log(newShifts);
  };

  function generateShift(name, startTime, endTime, shifts) {
    let newShifts = { ...shifts };
    if (!(name in shifts)) {
      newShifts[name] = [];
    }
    newShifts[name].push({ start: startTime, end: endTime });
    return newShifts;
  }

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
