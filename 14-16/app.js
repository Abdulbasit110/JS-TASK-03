//? ------------------------------------------SMIT-3to5/JS -Tasks chapters14-16---------------------------------

//* Q1-7:

let std_names = [];

let strings = [`brother`, `sister`, `mother`];

let number = [1, 2, 3, 4];
let boolean = [true, false];
let array = [`basit`, 20, true];

let education = [`SSC`, `HSC`, `BCS`, `BS`, `BCOM`, `MS`, `M.Phil`, `Phd`];
document.write("Qualifications: <br>");
for (let i = 0; i < education.length; i++) {
  document.write(`${i + 1}) ${education[i]} <br>`);
}

//* Q8

const students = [`Micheal`, `John`, `Tony`];
const scores = [320, 230, 480];
const percentages = [];

for (item of scores) {
  let percentage = Math.round((item / 500) * 100);
  percentages.push(percentage);
}

for (i = 0; i < students.length; i++) {
  document.write(
    `Score of ${students[i]} is ${scores[i]}. Percentage : ${percentages[i]}% <br>`
  );
}
// console.log(percentages);

//* Q9:

const colors = [`white`, `black`, `red`, `yellow`, `green`];
// for (let items of colors) {
//   document.write(`${items}<br>`)
// }

//todo a:
document.write(`${colors}<br>`);
let ele = prompt(`what color you want to add at the begining of the array?`);
colors.unshift(`${ele}`);
document.write(`${colors}<br>`);

//todo  b:
let ele1 = prompt(`what color you want to add at the ending of the array?`);
colors.push(`${ele1}`);
document.write(`${colors}<br>`);

//todo c:
colors.unshift(`golden`);
colors.unshift(`offwhite`);
document.write(`${colors}<br>`);

//todo d:
colors.shift();
document.write(`${colors}<br>`);

//todo e:
colors.pop();
document.write(`${colors}<br>`);

//todo f:
let favColor = prompt(`Any color you want to add ?`, "");
let index = +prompt(`At what index ?`, 0);
colors.splice(index, 0, favColor);
// console.log(colors)
document.write(`${colors}<br>`);

//todo g:
let d_index = +prompt(`Enter the index of the color you want to delete`, 0);
let deleteCount = +prompt(`how many colors you want to remove ?`, 1);
colors.splice(d_index, deleteCount);
// console.log(colors)
document.write(`${colors}<br>`);

//* Q10:

let Scores = [320, 230, 480, 120];
document.write(`Scores of Students : ${Scores}<br>`);

let sortedMarks = Scores.sort((a, b) => {
  return a - b;
});
document.write(`Ordered Scores of Students : ${sortedMarks}`);

//* Q11:

const Cities = [`karachi`, `lahore`, `islamabad`, `quetta`, `peshawar`];
document.write(`Cities list:<br>${Cities}<br>`);

const selectedCities = Cities.slice(2, 4);
document.write(`Selected cities list:<br>${selectedCities}`);

//* Q12:

const Array = [`This`, `is`, `my`, `cat`];
document.write(`Array:<br>${Array}<br>`);

let string = Array.join(` `);
document.write(`String:<br>${string}`);

//* Q13:

let queue = [];
queue.push(`1`);
queue.push(`2`);
queue.push(`3`);

document.write(`Number: ${queue}<br><br>`);
let length = queue.length;

for (let i = 0; i < length; i++) {
  document.write(`Out:<br>`);
  document.write(`${queue.shift()}<br>`);
}

//* Q14:

let stack = [];
stack.push(`1`);
stack.push(`2`);
stack.push(`3`);

document.write(`Stack Number:${stack}<br><br>`)
let Length = stack.length;  

for (let i = 0; i < Length; i++){
  document.write(`Out:<br>`);
  document.write(`${stack.pop()}<br>`);
}

//* Q15:

const Phone = [`Apple`, `Samsung`, `Motorola`, `Nokia`, `Sony`, `Haier`];

document.write(`<select><option>---Select Phone Brand---</option>`);

for (let i of Phone) {
  document.write(`<option value = "${i}">${i}</option>`);
}
document.write(`</select>`);
