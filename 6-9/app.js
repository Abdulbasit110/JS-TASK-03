//? -------------------SMIT-3to5/JS Tasks /chapters6-9-------------------------

//* Q1:

let a1 = +prompt(`Enter any number:`,``)
document.write(`Result: <br> The value of a is:${a1}<br> --------------------------------------<br><br>`);

document.write(`The value of ++a is : ${++a1}<br>`)
document.write(`Now the value of a is : ${a1}<br><br>`)

document.write(`The value of a++ is : ${a1++}<br>`)
document.write(`Now the value of a is : ${a1}<br><br>`)

document.write(`The value of --a is : ${--a1}<br>`)
document.write(`Now the value of a is : ${a1}<br><br>`)

document.write(`The value of a-- is : ${a1--}<br>`)
document.write(`Now the value of a is : ${a1}<br><br>`)

//* Q2:

let a = 2 , b = 1;

// let result = --a - --b + ++b + b--;

document.write(`a = ${a}, b =${b}<br>-------------------------<br><br>`);
let result = --a;
document.write(`--a ;<br> a is ${a}<br> b is ${b} <br> result is ${result} <br><br>`);
 result = a - --b;
document.write(`--a - --b ;<br> a is ${a} <br> b is ${b} <br> result is ${result}<br><br>`);
result += ++b; 
document.write(`--a - --b + ++b ;<br> a is ${a} <br> b is ${b} <br> result is ${result}<br><br>`);
result += b--;
 console.log(result)
document.write(`--a - --b + ++b + b-- ;<br> a is ${a} <br> b is ${b} <br> result is ${result}<br><br>`);

// console.log(--a)
// console.log(a,b)
// console.log(--a - --b)
// console.log(a,b)
// console.log(--a - --b + ++b)
// console.log(a,b)
// console.log(--a - --b + ++b + b--)
// console.log(a,b)
// console.log(result);


// let y = 2;
// let x = y--;
// console.log(x)

//* Q3: 

let user = prompt(`Enter your name.`)
alert(`Welcome ${user}! `)

//* Q5:

let input = +prompt(`Enter your favourite number.`,5)
let i = 1;
while(i<=10) {
  document.write(`${input} x ${i} = ${input * i}<br>`)
  i++;
}

// Q6:

let subject1 = prompt(`Enter first subject name.`)
let subject2 = prompt(`Enter second subject name.`)
let subject3 = prompt(`Enter third subject name.`)

let totalMarks = 100;

let subject1Marks =  +prompt(`Enter obtained marks in first subject`) 
let subject2Marks =  +prompt(`Enter obtained marks in second subject`) 
let subject3Marks =  +prompt(`Enter obtained marks in third subject`) 

let subject1Percentage = Math.round((subject1Marks / totalMarks ) * 100);
let subject2Percentage = Math.round((subject2Marks / totalMarks ) * 100);
let subject3Percentage = Math.round((subject3Marks / totalMarks ) * 100)

let avgPercentage =  Math.round(( subject1Percentage + subject2Percentage + subject3Percentage ) / 3);

let totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks ;
let grandTotalMarks = totalMarks * 3;

document.write(`
<table>

<tr>
  <th>SUBJECTS</th>
  <th>TOTAL MARKS</th>
  <th>OBTAINED MARKS</th>
  <th>PERCENTAGE</th>
</tr>

<tr>
  <td>${subject1}</td>
  <td>${totalMarks}</td>
  <td>${subject1Marks}</td>
  <td>${subject1Percentage}%</td>
</tr>
<tr>

  <td>${subject2}</td>
  <td>${totalMarks}</td>
  <td>${subject2Marks}</td>
  <td>${subject2Percentage}%</td>
</tr>

<tr>
  <td>${subject3}</td>
  <td>${totalMarks}</td>
  <td>${subject3Marks}</td>
  <td>${subject3Percentage}%</td>
</tr>

<tr>
  <th colspan = "2">${grandTotalMarks}</th>
  <th>${totalObtainedMarks}</th>
  <th>${avgPercentage}%</th>
</tr>

</table>

`);