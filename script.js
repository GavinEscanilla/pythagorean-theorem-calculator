    const input1 = document.getElementById('a');
    const input2 = document.getElementById('b');
    const input3 = document.getElementById('c');
    const answer = document.getElementById('answer');
const calculate = () => {
    const a = input1.value;
    const b = input2.value;
    const c = input3.value;
 if( a > 0 && b > 0 && c === ''){
   if(a > b){
    let calc = Math.sqrt(a * a + b * b);
    answer.textContent = 'answer: ' +calc;
 }else{
   let calc = Math.sqrt(b * b + a * a);
    answer.textContent = 'answer: ' +calc;
 }
 } else if( a > 0 && b === '' && c > 0){
   if(c > a){
    let calc = Math.sqrt(c *c - a * a);
    answer.textContent = 'answer: ' +calc;
   }else{
      let calc = Math.sqrt(a *a - c * c);
      answer.textContent = 'answer: ' +calc;
   }
 }else if( a === '' && b > 0 && c > 0){
   if(c > b){
      let calc = Math.sqrt(c *c - b * b);
      answer.textContent = 'answer: ' +calc;
     }else{
        let calc = Math.sqrt(b *b - c * c);
        answer.textContent = 'answer: ' +calc;
     }
 }else if( a=== '' && b === '' && c === ''){
   answer.textContent = 'Please enter number';
 }
 
    }
