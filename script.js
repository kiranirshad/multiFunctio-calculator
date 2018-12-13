// let numbers = [];
// function insert() {
//   let userInput = parseInt(document.querySelector("input").value);
//   numbers.push(userInput);
//   let insertShow = document.querySelector("#insertVal");
//   insertShow.innerHTML += `${userInput} `;
// }
// function calcSum() {
//   let sumOfNumb = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sumOfNumb += numbers[i];
//   }
//   return sumOfNumb;
// }
// function sum() {
//   let answer = calcSum();
//   document.querySelector("#output").innerHTML = `result:sum = ${answer}`;
// }
// function average() {
//   let avgtAns = calcSum();
//   avgtAns = avgtAns / numbers.length;
//   document.querySelector("#output").innerHTML = `Result:Average = ${avgtAns}`;
// }
// function product() {
//   let proAns = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     proAns = proAns * numbers[i];
//   }
//   document.querySelector("#output").innerHTML = `Result:Product = ${proAns}`;
// }
// function remove() {
//   location.reload();
// }

let numbers = [];

function insert(){
    let userInput = parseInt(document.querySelector("input").value);
    numbers.push(userInput);
    let insertShow = document.querySelector("#insertVal");
    insertShow.innerHTML += `${userInput}`;
}
function calcSum() {
       let sumOfNumb = 0;
   for (let i = 0; i < numbers.length; i++) {
     sumOfNumb += numbers[i];
   }
       return sumOfNumb;
     }
     function sum() {
  let answer = calcSum();
    document.querySelector("#output").innerHTML = `Result:Sum = ${answer}`;
     }
     function average(){
         let avgtAns = calcSum();
         avgtAns = avgtAns/ numbers.length;
         document.querySelector("#output").innerHTML = `Result:Average = ${avgtAns}`;

     }
     function product(){
         let proAns = numbers[0];
         for(let i=0; i <numbers.length; i++){
             proAns = proAns*numbers[i];
         }
         document.querySelector("#output").innerHTML= `Result:Product = ${proAns}`
     }
     function remove(){
         location.reload();
     }