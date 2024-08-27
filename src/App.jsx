import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import satData from "./components/satData";
import Table from "./components/Table";
import logo from "/logo192.png";


function App() {
  const [sat, setSat] = useState(satData);
  const orbitTypes = [...new Set(satData.map((data) => data.orbitType))];

  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  };


  return (
    <div>
      <Banner />
      <Buttons filterByType={filterByType}
        setSat={setSat}
        orbitTypes={orbitTypes} />
      <Table sat={sat} />
      <div className="container-div">
        <img src={logo} alt="logo" className="App-logo" />
      </div>
    </div>
  );
}

export default App;