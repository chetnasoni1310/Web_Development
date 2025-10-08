// ✅ 1. Display Current Day and Time
{
  let today = new Date();
  //isse poori date aagyi

  var day = today.getDay();
  //isse 0-6 mai aayenge
  var dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];
  console.log("Today is : " + dayList[day] + ".");

  var hrs = today.getHours();
  var mins = today.getMinutes();
  var secs = today.getSeconds();
  var dayOrNight = hrs >= 12 ? " PM " : " AM ";

  hrs = hrs >= 12 ? hrs - 12 : hrs;

  //Special cases
  if (hrs === 0 && dayOrNight === " PM ") {
    if (mins === 0 && secs === 0) {
      hrs = 12;
      dayOrNight: " Noon ";
    } else {
      hrs = 12;
      dayOrNight = " PM ";
    }
  }

  if (hrs === 0 && dayOrNight === " AM ") {
    if (mins === 0 && secs === 0) {
      hrs = 12;
      dayOrNight: " Midnight ";
    } else {
      hrs = 12;
      dayOrNight = " AM ";
    }
  }
  console.log(
    "Current Time : " + hrs + dayOrNight + ": " + mins + " : " + secs
  );
}







// ✅ 3. Get Current Date in Various Formats
// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
{
  let today = new Date();
  let date = today.getDate();
  let month = today.getMonth() + 1; //0-11 deta h bcz
  let year = today.getFullYear();

  if (date < 10) {
    date = "0" + date;
  }
  if (month < 10) {
    month = "0" + month;
  }
  console.log(month + "-" + date + "-" + year);
  console.log(month + "/" + date + "/" + year);
  console.log(date + "-" + month + "-" + year);
  console.log(date + "/" + month + "/" + year);
}






// ✅ 4. Calculate Area of Triangle (Sides: 5, 6, 7)

{
  let a = 5,
    b = 6,
    c = 7;
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(area);
}







// ✅ 6. Check Leap Year (Gregorian Calendar)
// It is divisible by 4 and
// Not divisible by 100, unless
// It is also divisible by 400
{
  let year = 2200;

  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        console.log(year + " is a leap year");
      } else {
        console.log(year + " is not a leap year");
      }
    } else {
      console.log(year + " is a leap year");
    }
  } else {
    console.log(year + " is not a leap year");
  }
}












// ✅ 7. Find Years When Jan 1 is Sunday (2014–2050)
// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
{
  for (let year = 2014; year <= 2050; year++) {
    var date = new Date(year, 0, 1); //creates a new date object everything for every new year
    if(date.getDay() === 0)
    {
        console.log(year);
    }
  }
}





// ✅ 8. Random Integer Guess Game
// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched". 
// Math.floor(Math.random() * (15 - 5 + 1)) + 5
// (15 - 5 + 1) → calculates range size → 11

// Math.random() * 11 → number from 0 to 10.999

// Math.floor(...) → integers 0 to 10

// + 5 → shifts it to 5 → 15
{
  //   let guessLLimit =parseInt(prompt("Set your random space lower limit :"));
  //   let guessULimit =parseInt(prompt("Set your random space upper limit :"));
  //   let randomNumber = Math.floor( Math.random() * (guessULimit - guessLLimit +1) ) + guessLLimit;
  //   let userGuess = parseInt(prompt("Enter your guess : "));
  //   do{    
  //   if(userGuess === randomNumber)
  //   {
  //       alert("Congratulations !");
  //       break;
  //   }
  //   else
  //   { 
  //       alert("Oops badluck !! Try again !! the number is :"+ randomNumber );
  //       userGuess = parseInt(prompt("Enter your guess :"));
  //   }
  //  }while(true)
}








// ✅ 9. Days Left Before Christmas
// Write a JavaScript program to calculate the days left before Christmas.
{
    let today = new Date();
    let month = today.getMonth();
    let date = today.getDate();
    let cmas = new Date(today.getFullYear() ,11,25);

    //if today is after christmas then wait for 1 year
    if(today.getMonth()==11 && today.getDate()>25){
        cmas.setFullYear(cmas.getFullYear() +1);
    }

    let one_day_miliseconds = 24*60*60*1000 ;
    let daysLeft = Math.ceil( (cmas.getTime() - today.getTime())/(one_day_miliseconds) );
    console.log(daysLeft+" days left until Christmas");
}










// ✅ 10. Multiplication and Division (User Input)
// Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).  
// {
//   let n1= prompt("Enter the first number :");
//   let n2= prompt("Enter the second number :");
//   console.log(n1+" x "+n2+" = "+n1*n2);
//   console.log(n1+" / "+n2+" = "+n1/n2);
// }





// ✅ 11. Convert Temperatures Between Celsius and Fahrenheit
{
  // let temperatureC = prompt("Enter the temperature in Celsius : ");
  // let temperatureF =(9*temperatureC + 32*5)/5;
  // console.log(temperatureF + " degree Fahrenheit");
}








// ✅ 12. Get Current Website URL
console.log(document.URL);




// ✅ 15. Difference Between Number and 13
// ✅ 16. Sum Two Integers (Triple if Equal)
// ✅ 17. Difference Between Number and 19 (Triple if >19)
// ✅ 18. Check if Number or Sum is 50
// ✅ 20. Check if One Integer is Positive and One is Negative
// ✅ 31. Find Largest of Three Integers
// ✅ 32. Find Closest Value to 100 from Two Numbers
// ✅ 33. Check if Two Numbers are in Specific Ranges



// ✅ 19. Check if Integer is Within 20 of 100 or 400
{
  function checkWithinRange(num) {
    if (Math.abs(num - 100) <= 20 || Math.abs(num - 400) <= 20) {
        console.log(true);
    } else {
        console.log(false);
    }
}}




// ✅ 25. Check if Number is Multiple of 3 or 7
{
  // let num = prompt("Enter the number : ");
  // if(num%3==0 || num%7==0)
  // {
  //   console.log("true");
  // }
  // else{
  //   console.log("false");
  // }
}




