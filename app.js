// Chapter 9-11

// 1. City Input
        let city = prompt("Enter your city name:");

        if (city.toLowerCase() === "karachi") {
            alert("Welcome to city of lights");
        }

        // 2. Gender Input
        let gender = prompt("Enter your gender (male/female):");

        if (gender.toLowerCase() === "male") {
            alert("Good Morning Sir.");
        } else if (gender.toLowerCase() === "female") {
            alert("Good Morning Ma’am.");
        } else {
            alert("Good Morning.");
        }

        // 3. Traffic Signal Color Input
        let signalColor = prompt("Enter the color of the traffic signal (Red/Yellow/Green):");

        if (signalColor.toLowerCase() === "red") {
            alert("Must Stop");
        } else if (signalColor.toLowerCase() === "yellow") {
            alert("Ready to move");
        } else if (signalColor.toLowerCase() === "green") {
            alert("Move now");
        } else {
            alert("Invalid signal color entered.");
        }

        
        let fuel = parseFloat(prompt("Enter remaining fuel in your car (in litres):"));

        if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

a
 var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");  // ✅ This will run
}

b
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");  // ❌ Will NOT run, because b++ is 82 at comparison
}

c
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");  // ❌ Will NOT run (c++ is 12 at comparison)
}
if (c === 13) {
    alert("condition 2 is true");  // ✅ Will run (c is now 13)
}
if (++c < 14) {
    alert("condition 3 is true");  // ❌ Will NOT run (c becomes 14)
}
if (c === 14) {
    alert("condition 4 is true");  // ✅ Will run
}

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");  // ✅ Will run
}

// e.
if (true) {
    alert("True");  // ✅ Will run
}
if (false) {
    alert("False");  // ❌ Will NOT run
}

// f.
if ("car" < "cat") {
    alert("car is smaller than cat");  // ✅ Will run (alphabetical comparison)
}
let subject1 = parseFloat(prompt("Enter marks for Subject 1:"));
        let subject2 = parseFloat(prompt("Enter marks for Subject 2:"));
        let subject3 = parseFloat(prompt("Enter marks for Subject 3:"));
        let totalMarks = parseFloat(prompt("Enter total marks:"));

        let obtainedMarks = subject1 + subject2 + subject3;
        let percentage = (obtainedMarks / totalMarks) * 100;

        let grade = "";
        let remarks = "";

        if (percentage >= 80) {
            grade = "A-one";
            remarks = "Excellent";
        } else if (percentage >= 70) {
            grade = "A";
            remarks = "Good";
        } else if (percentage >= 60) {
            grade = "B";
            remarks = "You need to improve";
        } else {
            grade = "Fail";
            remarks = "Sorry";
        }

        // Output result
        document.write("<h2>Marks Sheet</h2>");
        document.write("Total Marks: " + totalMarks + "<br>");
        document.write("Marks Obtained: " + obtainedMarks + "<br>");
        document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
        document.write("Grade: " + grade + "<br>");
        document.write("Remarks: " + remarks + "<br>");


        let secretNumber = 7;  // You can change this
let guess = parseInt(prompt("Guess the secret number (1-10):"));

if (guess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Try again!");
}
let num = parseInt(prompt("Enter a number to check if it's divisible by 3:"));

if (num % 3 === 0) {
    alert("The number is divisible by 3.");
} else {
    alert("The number is NOT divisible by 3.");
}
let number = parseInt(prompt("Enter a number to check if it's even or odd:"));

if (number % 2 === 0) {
    alert("The number is Even.");
} else {
    alert("The number is Odd.");
}
let temp = parseFloat(prompt("Enter the temperature in °C:"));

if (temp > 40) {
    alert("It is too hot outside.");
} else if (temp > 30) {
    alert("The Weather today is Normal.");
} else if (temp > 20) {
    alert("Today’s Weather is cool.");
} else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It's very cold today!");
}
let firstNum = parseFloat(prompt("Enter the first number:"));
let secondNum = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter operation (+, -, *, /, %):");
let result;

if (operation === "+") {
    result = firstNum + secondNum;
} else if (operation === "-") {
    result = firstNum - secondNum;
} else if (operation === "*") {
    result = firstNum * secondNum;
} else if (operation === "/") {
    if (secondNum !== 0) {
        result = firstNum / secondNum;
    } else {
        result = "Cannot divide by zero!";
    }
} else if (operation === "%") {
    result = firstNum % secondNum;
} else {
    result = "Invalid operation!";
}

alert("Result: " + result);



// Chapter 12-13


let char = prompt("Enter a single character:");

if (char.length !== 1) {
     alert("Please enter only one character.");
 } else {
     let code = char.charCodeAt(0);
    
     if (code >= 48 && code <= 57) {
        alert("You entered a number.");
    } else if (code >= 65 && code <= 90) {
        alert("You entered an uppercase letter.");
    } else if (code >= 97 && code <= 122) {
        alert("You entered a lowercase letter.");
    } else {
        alert("You entered a special character.");
    }
}
let num1 = parseInt(prompt("Enter first number:"));
let num2 = parseInt(prompt("Enter second number:"));

if (num1 > num2) {
    alert(num1 + " is larger");
} else if (num2 > num1) {
    alert(num2 + " is larger");
} else {
    alert("Both numbers are equal");
}
let numbers = parseFloat(prompt("Enter a number:"));

if (number > 0) {
    alert("The number is positive.");
} else if (number < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}
let letter = prompt("Enter a single letter:").toLowerCase();

if (letter.length === 1 && "aeiou".includes(letter)) {
    alert("True – It is a vowel.");
} else {
    alert("False – It is not a vowel.");
}
let correctPassword = "admin123"; // you can set any password
let userPassword = prompt("Enter your password:");

if (!userPassword) {
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}

  
let time = parseInt(prompt("Enter time in 24-hour format (e.g. 1900 for 7PM):"));

if (time >= 0 && time < 1200) {
    alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good night!");
} else {
    alert("Invalid time entered.");
}


// Chapter 14-16


let studentNames = [];
let studentNamesObj = new Array();
let stringsArray = ["Ali", "Sara", "John"];
let numbersArray = [10, 20, 30, 40];
let booleanArray = [true, false, true];
let mixedArray = ["Hello", 100, true, null];
 let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
        document.write("<h3>Qualifications in Pakistan:</h3>");
        for (let i = 0; i < qualifications.length; i++) {
            document.write((i + 1) + ") " + qualifications[i] + "<br>");
        }
        let students = ["Ali", "Sara", "John"];
        let scores = [450, 380, 410];
        let totalMark = 500;

        for (let i = 0; i < students.length; i++) {
            let percentage = (scores[i] / totalMarks) * 100;
            document.write("Score of " + students[i] + " is " + scores[i] + ". Percentage: " + percentage.toFixed(2) + "%<br>");
        }

         let colors = ["Red", "Green", "Blue"];
        document.write("Original colors: " + colors.join(", ") + "<br>");

        // a. Add to beginning
        let addBegin = prompt("Which color do you want to add at the beginning?");
        colors.unshift(addBegin);
        document.write("After adding at beginning: " + colors.join(", ") + "<br>");

        // b. Add to end
        let addEnd = prompt("Which color do you want to add at the end?");
        colors.push(addEnd);
        document.write("After adding at end: " + colors.join(", ") + "<br>");

        // c. Add two more to beginning
        colors.unshift("Purple", "Orange");
        document.write("After adding 2 colors at beginning: " + colors.join(", ") + "<br>");

        // d. Delete first color
        colors.shift();
        document.write("After deleting first color: " + colors.join(", ") + "<br>");

        // e. Delete last color
        colors.pop();
        document.write("After deleting last color: " + colors.join(", ") + "<br>");

        // f. Add at specific index
        let indexAdd = parseInt(prompt("At which index do you want to add a color?"));
        let colorAdd = prompt("Enter color name to add:");
        colors.splice(indexAdd, 0, colorAdd);
        document.write("After adding at index " + indexAdd + ": " + colors.join(", ") + "<br>");

        // g. Delete color(s) at index
        let delIndex = parseInt(prompt("At which index do you want to delete color(s)?"));
        let delCount = parseInt(prompt("How many colors do you want to delete?"));
        colors.splice(delIndex, delCount);
        document.write("After deleting " + delCount + " color(s) from index " + delIndex + ": " + colors.join(", ") + "<br>");
    let score = [320, 230, 480, 120];
scores.sort((a, b) => a - b);  // Ascending
alert("Sorted scores: " + scores.join(", "));
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(2, 5);  // Copying 3 cities
alert("Selected cities: " + selectedCities.join(", "));
let arr = ["This", " is", " my", " cat"];
let results = arr.join("");
alert(result);  // Output: This is my cat
let fifoQueue = [];
fifoQueue.push("Value 1");
fifoQueue.push("Value 2");
fifoQueue.push("Value 3");

alert("First Out: " + fifoQueue.shift());  // Value 1
alert("Second Out: " + fifoQueue.shift()); // Value 2
alert("Third Out: " + fifoQueue.shift());  // Value 3


// Chapter 17-20

// 1. Declare and initialize an empty multidimensional array
    let emptyMultiArray = [[], [], []];
    document.write("<h3>1. Empty Multidimensional Array:</h3>");
    document.write(JSON.stringify(emptyMultiArray) + "<br>");

    // 2. Declare and initialize a matrix
    let matrix = [
      [0, 1, 2, 3],
      [1, 0, 1, 2],
      [2, 1, 0, 1]
    ];
    document.write("<h3>2. Matrix:</h3>");
    matrix.forEach(row => {
      document.write(row.join(" ") + "<br>");
    });

    // 3. Print counting from 1 to 10
    document.write("<h3>3. Counting from 1 to 10:</h3>");
    for (let i = 1; i <= 10; i++) {
      document.write(i + "<br>");
    }

    // 4. Multiplication Table
    let tableNum = +prompt("Enter a number to show its multiplication table:");
    let tableLength = +prompt("Enter length of multiplication table:");
    document.write("<h3>4. Multiplication Table:</h3>");
    for (let i = 1; i <= tableLength; i++) {
      document.write(`${tableNum} x ${i} = ${tableNum * i}<br>`);
    }

    // 5. Print fruits
    let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
    document.write("<h3>5. Fruits:</h3>");
    for (let i = 0; i < fruits.length; i++) {
      document.write(`Element at index ${i} is ${fruits[i]}<br>`);
    }

    // 6. Generate series
    document.write("<h3>6. Series:</h3>");
    document.write("a. Counting: ");
    for (let i = 1; i <= 15; i++) document.write(i + ", ");
    document.write("<br>b. Reverse: ");
    for (let i = 10; i >= 1; i--) document.write(i + ", ");
    document.write("<br>c. Even: ");
    for (let i = 0; i <= 20; i += 2) document.write(i + ", ");
    document.write("<br>d. Odd: ");
    for (let i = 1; i < 20; i += 2) document.write(i + ", ");
    document.write("<br>e. Series: ");
    for (let i = 2; i <= 20; i += 2) document.write(i + "k, ");

    // 7. Search in bakery items
    let items = ["cake", "apple pie", "cookie", "chips", "patties"];
    let searchItem = prompt("Welcome to Ayan Bakers. What do you want to order?").toLowerCase();
    let found = false;
    for (let i = 0; i < items.length; i++) {
      if (items[i] === searchItem) {
        found = true;
        document.write(`<h3>7. ${searchItem} is available at index ${i} in our bakery.</h3>`);
        break;
      }
    }
    if (!found) {
      document.write(`<h3>7. We are sorry. ${searchItem} is not available in our bakery.</h3>`);
    }

    // 8. Largest number
    let A = [24, 53, 78, 91, 12];
    let max = Math.max(...A);
    document.write("<h3>8. Largest number is: " + max + "</h3>");

    // 9. Smallest number
    let min = Math.min(...A);
    document.write("<h3>9. Smallest number is: " + min + "</h3>");

    // 10. Multiples of 5 from 1 to 100
    document.write("<h3>10. Multiples of 5 from 1 to 100:</h3>");
    for (let i = 5; i <= 100; i += 5) {
      document.write(i + ", ");
    }