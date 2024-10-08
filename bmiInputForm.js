import '../App.css';
const BmiInputForm = ({ height, weight, setHeight, setWeight, handleCalculateBMI, handleReset }) => {
    return (
        <div id="inputForm">
            <input className="inputs"
                type="number"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
            />
            <input className="inputs"
                type="number"
                placeholder="Height (cm)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
            />
            <button className="btn" onClick={handleCalculateBMI}>Calculate BMI</button>
            <button className="btn" id="reset" onClick={handleReset}>Reset</button>
        </div>
    );
}
export default BmiInputForm;