// ?------------------SMIT-3to5/JS -Tasks chapters12-13-----------------------------

//* Q1:

let a = prompt("enter any character:","");
if(Number.isNaN(Number(a))) {
  
  if(a.charCodeAt()>=65 && a.charCodeAt()<=90) {
    
  alert(`${a} is a capital alphabet!!`)
  
}
  
else if(a.charCodeAt()>=97 && a.charCodeAt()<=122) {
  
  alert(`${a} is a small alphabet!!`)
  
}
  else {
    
    alert(`${a} is a character !`) ;
  }
  
}
else if(a===null || a=='') {
  alert(`no character entered!`)
}

else {
  alert(`${a} is a number!`)
}




// * Q2:

let num1 = prompt(`Enter any number!`,0)
let num2 = prompt(`Enter another number!:`,0)

if(num1>num2) {
  
  alert (`${num1} is greater than ${num2}`)
  
}

else if (num1<num2) {
  alert (`${num2} is greater than ${num1}`)
}

else {
  alert (`${num1} is equal to ${num2}`)
}


//*  Q3:

//  let num = '9-6';
//  console.log(num)
//  num = +num;
//  console.log(isNaN(Number(num)));

let num = prompt("Enter any real number!","");

if(!num || isNaN(Number(num)) ){
  alert("No number entered!!")
}
else {
    if(num>0) {
      alert(`${num} is a positive real number`)
}
    else  if(num<0) {
     alert(`${num} is a negetive real number!`)
}
 else  {
  alert("zero!")
 }
}


// *Q4:

let char = prompt(`Enter any one alphabet!`,'a');

if(!char || char.length >1 ) {
  alert(`WRONG INPUT!!!`)
}
  else if (!isNaN(Number(char))) {
    
    alert(`${char} is not an alphabet`)
    
  }
else {
  
  
  let isFound = false;
  
   let arr = ['a','e','i','o','u','A','E','I','O','U'] ;
  
     for(let item of arr) {
      
      if(!isFound) {
       
        if( char === item ) {
          alert(` ${char} is a vowel`)
          isFound=true;
          
        }
     
       }
       
      }
    if(!isFound) {
      alert(`${char} is not a vowel!!`)
    }
   
       }
  
  // console.log(arr.every(check))
   // if(arr.some((ele)=>{
   //   char===ele;
   //    })) {
   //   alert(`vowel found!`)
   //    }
   //   else {
   //     alert(`sorry voewel not found!`)
   //   }
     // if(char === ele) {
     //   alert(`definitely a vowel!!`)
     // }
     // else{
     //   alert(`no vowel found!`)}
// }



// let arr = [1,5,78];
// let check = (ele) =>{
//   return ele > 10;
// }
// let res = arr.some(check);
// console.log(res)
// let re = arr.includes(1)
//  console.log(re)

//  *Q5:

let password = `basit123`;
let attempt = prompt(`Enter your password.`);

if(!attempt){
  alert(`Please Enter your password`)
}
else if(attempt === password) {
  alert( `Correct,The password you entered matches the original password!`)
}
else {
  alert(`Incorrect password!`)
}

// * Q6: 

var greeting ;
var hour=12;
if(hour<18) {
  greeting = `good day`
}
else {
  greeting =  `good evening/`
}
alert (`${greeting} Sir!`)

//  *Q7: 

let timeIn24 = prompt(`Enter time in 24 hour format`,24) ;
//  console.log(timeIn24)
if(timeIn24 === null || timeIn24 ===``) {
  alert(`Invalid Input`)
}
else if (timeIn24 >2400 || timeIn24 < 0) {
  alert(`Please Enter valid time!`)
}
else {
  
if(timeIn24 >= 0 &&  timeIn24< 1200) {
  
  alert(`Good morning!`)
}
else  if(timeIn24 >= 1200 &&  timeIn24 < 1700){
  alert(`Good afternoon!`)
}
else  if(timeIn24 >= 1700 &&  timeIn24 < 2100){
  alert(`Good Evening!`)
}
  else {
    alert(`Good Night!`)
  }
  
// timeIn12 = timeIn24-12;
  // if(timeIn24>=12 && timeIn24<=24)  {
    
  // alert(`${timeIn12}pm`)
    
  // }
  // else {
  //   alert(`${timeIn12}am`)
  // }
}
