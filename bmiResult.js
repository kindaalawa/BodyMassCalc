const BmiResult = ({bmi, result}) => {
    return (
        <div id="result">
            <h2> BMI: {bmi}</h2>
            <h2>You are: {result}</h2>
        </div>
    );
}   
export default BmiResult;