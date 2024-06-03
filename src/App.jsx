import { useState } from "react";
import "./App.css";

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const parsedHeight = parseInt(height);
    const parsedWeight = parseInt(weight);

    if (
      isNaN(parsedHeight) ||
      parsedHeight <= 0 ||
      isNaN(parsedWeight) ||
      parsedWeight <= 0
    ) {
      setBMI("Please enter valid height & weight");
      return;
    }

    const calculatedBMI = (parsedWeight / (parsedHeight / 100) ** 2).toFixed(2);
    setBMI(calculatedBMI);
  };

  const getCategory = () => {
    if (bmi < 18.5) return "Under Weight";
    if (bmi < 24.9) return "Normal Weight";
    if (bmi < 29.9) return "Over Weight";
    if (bmi > 30) return "Obesity";
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateBMI();
        }}
      >
        <div className="centre">
          <div className="mesure">
            <label className="label">Height:</label>
            <input
              className="input-box"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <label className="label">Cm</label>
          </div>
          <div className="mesure">
            <label className="label label-weight">Weight:</label>
            <input
              type="number"
              className="input-box input-weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <label className="label">Kg</label>
          </div>
          {/* <div className='calculate-result'> */}
          <button type="submit">Calculate</button>
          {bmi !== null && (
            <div id="results">
              <span className="bmi">{bmi}</span>
              <span className="getCategory">{getCategory()}</span>
            </div>
          )}
          {/* </div> */}
        </div>
      </form>

      <div id="weight-guide">
        <h2>BMI Weight Guide</h2>
        <p>Under Weight = Below 18.5</p>

        <p>Under Weight = 18.6 to 24.9</p>

        <p>Over Weight = 25 to 29.9 </p>

        <p>Obsity = 30 and above</p>
      </div>
    </div>
  );
}

export default BMICalculator;
