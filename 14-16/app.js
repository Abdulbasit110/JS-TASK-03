//? ------------------------------------------SMIT-3to5/JS -Tasks chapters14-16---------------------------------

//* Q1-7:  

let std_names =[];

let strings = [`brother`,`sister`, `mother`];

let number = [1,2,3,4];
let boolean = [true,false];
let array = [`basit`,20,true]

let education = [`SSC`,`HSC`,`BCS`,`BS`,`BCOM`,`MS`,`M.Phil`,`Phd`]
document.write('Qualifications: <br>')
for(let i =0 ; i<education.length ;i++) {
  document.write(`${i+1}) ${education[i]} <br>`)
}

//* Q8

const students = [`Micheal` , `John` , `Tony`];
const scores = [ 320,230,480];
const percentages = []; 

for(item of scores) {
  let percentage = Math.round((item / 500) * 100);
  percentages.push(percentage);
}

for(i=0; i < students.length ; i++) {
  document.write(`Score of ${students[i]} is ${scores[i]}. Percentage : ${percentages[i]}% <br>`);
}
// console.log(percentages);