
const aInput = document.getElementById("a");
const bInput = document.getElementById("b");
const cInput = document.getElementById("c");
const answer = document.getElementById("answer");

const calculate = () => {
    const a = parseFloat(aInput.value);
    const b = parseFloat(bInput.value);
    const c = parseFloat(cInput.value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        answer.textContent = "Please enter valid numbers";
    } else if (a > 0 && b > 0 && c === '') {
        let calc1 = Math.sqrt(a ** 2 + b ** 2);
        answer.textContent = "C: " + calc1;
    } else if (a > 0 && b === 0 && c > 0) {
        let calc2 = Math.sqrt(a ** 2 + c ** 2);
        answer.textContent = "B: " + calc2;
    } else if (a > 0 && b > 0 && c > 0) {
        // Handle the case where all three inputs are greater than 0
        // Add your calculation or message as needed
    }
    answer.textContent = '';
};