import { useState } from "react";
import BmiInputForm from "./bmiInputForm";
import BmiResult from "./bmiResult";

const BmiCalculator = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState("");
    const [result, setResult] = useState("");

    const calculateBmi = () => {
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        setBmi(bmi.toFixed(2));
        if (bmi < 18.5) {
            setResult("Underweight");
        } else if (bmi <= 24.9) {
            setResult("Normal weight  ");
        } else if (bmi <= 29.9) {
            setResult("Overweight");
        } else {
            setResult("Obesity");
        }
    }

    const handleCalculateBMI = () => {
        if (weight === "" || height === "") {
            alert("Please enter both weight and height");
            return;
        }
        if (weight <= 0 || height <= 0) {
            alert("Please enter valid weight and height");
            return;
        }
        calculateBmi();
    };

    const handleReset = () => {
        setWeight("");
        setHeight("");
        setBmi("");
        setResult("");
    };

    return (
        <div className="mainDiv">
            <h1>BMI Calculator</h1>
            <BmiInputForm
                height={height}
                weight={weight}
                setHeight={setHeight}
                setWeight={setWeight}
                handleCalculateBMI={handleCalculateBMI}
                handleReset={handleReset}
            />
            <BmiResult
                bmi={bmi}
                result={result}
            />
        </div>
    );
};
export default BmiCalculator;