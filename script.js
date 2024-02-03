    const input1 = document.getElementById('a');
    const input2 = document.getElementById('b');
    const input3 = document.getElementById('c');
    const answer = document.getElementById('answer');
const calculate = () => {
    const a = input1.value;
    const b = input2.value;
    const c = inout3.value;
 if( a > 0 && b > 0 && c === ''){
    let calc = Math.sqrt(a * a + b * b);
    answer.textContent = 'answer: ' +calc;
 }
    }
