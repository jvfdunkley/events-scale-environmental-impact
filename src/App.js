import './App.css';
import CO2 from "./CO2-bg-white.gif";
import joule from "./Joule-white-bg.gif";
import liter from "./Liter-white-bg.gif";

import React, { useEffect, useState } from "react"; 
function App() {
  const [kilos, setKilos] = useState("");
  useEffect(() => 
  {
    setTimeout(() => setKilos(""), 10000);
  }, [kilos]);
  //{(parseFloat(kilos.replace(".", ",")) * 40).toFixed(2).toString().replace(".", ",")}
  console.log(kilos);
  console.log(kilos.replace(",", "."))
  return (
    <div className="App">
      <header className="App-header">
        <div style={{position: "relative", top: 170, right: 50, fontFamily:"roc-grotesk"}}>
          <p class="title">
          <input name="user-name" type="string" placeholder="kilos" value={kilos} autoFocus onChange={(e) => {  setKilos(e.target.value)}}/> 
          kg = {kilos !== "" ? (parseFloat(kilos.replace(",", ".")) * 45).toFixed(2).toString().replace(".", ","): 0.00} €
          </p>
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", paddingTop: 60}}>
          <img src={CO2} alt="CO2" width="1000" height="1000" style={{}}/>
          <img src={joule} alt="CO2" width="1000" height="1000" />
          <img src={liter} alt="CO2" width="1000" height="1000" />

        </div>
        <div>
          <p class="numbers" style={{position: "absolute", fontSize: "5rem", bottom: "30.3%", left: "6%"}}>{kilos !== "" ? (parseFloat(kilos.replace(",", ".")) * 36.06).toFixed(2).toString().replace(".", ","): 0.00}</p>
          <p class="numbers" style={{position: "absolute",fontSize: "4rem", bottom: "26%", left: "16%", color: "white"}}>{kilos !== "" ?(parseFloat(kilos.replace(",", ".")) * 196.39).toFixed(2).toString().replace(".", ","): 0.00}</p>
        </div>
        <div>
          <p class="numbers" style={{position: "absolute", fontSize: "5rem", top: "58%", left: "39.5%"}}>{kilos !== "" ? (parseFloat(kilos.replace(",", ".")) * 110.10).toFixed(2).toString().replace(".", ","): 0.00}</p>
          <p class="numbers" style={{position: "absolute", fontSize: "4rem", top: "64.7%", left: "47.7%", color: "white"}}>{kilos !== "" ? (parseFloat(kilos.replace(",", ".")) * 22.60).toFixed(2).toString().replace(".", ","): 0.00}</p>
        </div>
        <div>
          <p class="numbers" style={{position: "absolute", fontSize: "5rem", top: "58.2%", left: "67.5%"}}>{kilos !== "" ? (parseFloat(kilos.replace(",", ".")) * 2403.85).toFixed(2).toString().replace(".", ","): 0.00}</p>
          <p class="numbers" style={{position: "absolute", fontSize: "4rem", top: "64.7%", left: "78%", color: "white"}}>{kilos !== "" ? (parseFloat(kilos.replace(",", ".")) * 14.9).toFixed(2).toString().replace(".", ","): 0.00}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
