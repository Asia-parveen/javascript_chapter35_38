// FUNCTION
// Assignment # 35-38
// JAVASCRIPT

// 1. Write a function that displays current date & time in your
// browser.

// function currentTime(){
//     let currentDate= new Date();
//     console.log(currentDate);
// }
// currentTime();



// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function fullName(fName,lname){
//    return fName  + lname
// }
// console.log(fullName("Asia"," parveen"));

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function sum(num1,num2){
//     return num1 + num2
// }
// console.log(sum(10,5));

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function myCalculator(num1,num2,operator){
//     switch(operator){
//         case '+':
//             return num1 + num2;
//             case '-' :
//                 return num1 - num2;
//                 case '*' :
//                     return num1 * num2;
//                     case '/':
//                     if(num1 !== 0){
//                         return num1 / num2;
//                     }else{
//                         return 'Error! division by zero'
//                     }
//                     default:
//                         return 'Error: Invalid operator';
                   
//     }
    
// }
// let num1 = 10;
// let num2 = 5;
// let operator = '/'
// let res = myCalculator(num1,num2,operator);
// console.log(`${num1} ${operator} ${num2} is: ${res}`);

// function myCalculator2(num1,num2,operators){
//     if(operators === "+"){
//         console.log("The result is: " , num1 + num2);
//     }else if(operators === "-"){
//         console.log("The result is: " , num1 - num2);
//     }else if(operators === "*"){
//         console.log("The result is: " , num1 * num2);
//     }else if(operators === "/"){
//         console.log("The result is: " , num1 / num2);
//     }else{
//         console.log("Invalid operator")
//     }

// }
// let result = myCalculator2(10,4,'-');

// 5. Write a function that squares its argument.

// function square(num){
//     return num*num;
// }
// console.log(square(7));

// 6. Write a function that computes factorial of a number.

// function factorial(n) {
//     // Factorial of a negative number is not defined
//     if (n < 0) {
//         return 'Error: Negative numbers do not have a factorial';
//     }

//     // Factorial of 0 and 1 is 1
//     if (n === 0 || n === 1) {
//         return 1;
//     }

//     // Initialize result to 1
//     let res = 1;

//     // Multiply result by each number from 1 to n
//     for (let i = 1; i <= n; i++) {
//         res *= i;
//     }

//     // Return the final result
//     return res;
// }

// // Example usage:
// let num = 7;
// let res = factorial(num);
// console.log(`The factorial of ${num} is: ${res}`);

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// let startNum = +prompt("Enter start number");
// let endNum = +prompt("Enter end number");
// function counting(){
//     for(let i = startNum;i <= endNum; i++ ){
//         console.log(i);
//     }
    
// }
// counting();

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// // Outer function to calculate the hypotenuse
// function calculateHypotenuse(base, perpendicular) {
//     // Inner function to calculate the square of a number
//     function calculateSquare(number) {
//         return number * number;
//     }

//     // Calculate the squares of base and perpendicular
//     let baseSquare = calculateSquare(base);
//     let perpendicularSquare = calculateSquare(perpendicular);

//     // Calculate the hypotenuse using the squares
//     let hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);

//     // Return the hypotenuse
//     return hypotenuse;
// }

// // Example usage:
// let base = 4;
// let perpendicular = 8;
// let hypotenuse = calculateHypotenuse(base, perpendicular);
// console.log(`The hypotenuse of a triangle with base ${base} and perpendicular ${perpendicular} is: ${hypotenuse}`);

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables

//    let height = 3;
// function calculateArea(width,height){
  
//     return width*height;
// }
// console.log(calculateArea(6, height));

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// let word = "madam";

// function checkWord(str){
//     let newStr = str.toLowerCase();
//     let newWord =  newStr.split('').reverse().join('');
//     return newWord;
// }
// console.log(checkWord("madam"));

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// let string = "the quick brown fox";
// function chngStr(str){
//     let newWord = str.split(" ");
//     let finalWord = newWord.map(Word => {
//         return Word.charAt(0).toUpperCase() + Word.slice(1);
      

//     });
//     return finalWord.join(" ");
  
// }
// console.log(chngStr(string));

// let str = "nazia parveen";
// let str2 = str.split(" ");
// let res = str2.map(item => {
//     return item.charAt(0).toUpperCase() + item.slice(1);
  
    
// });
// let res1 = res.join(" ");
// console.log(res1);

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

















