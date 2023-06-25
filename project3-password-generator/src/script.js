//reate a variable and assign it to the input ID: showPSWD using the getElementByID() method.
let pswd = document.getElementById("showPSWD")
let pswd1 = document.getElementById("showPSWD1")
let pswd2 = document.getElementById("showPSWD2")
let pswd3 = document.getElementById("showPSWD3")

// we can then create the function, insdie we will declare three variables

function gePSWD() {
  let lenOfPSWD = 12;
  let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

  let randomPSWD = generateRandomPassword(lenOfPSWD, characters);
  let randomPSWD1 = generateRandomPassword(lenOfPSWD, characters);
  let randomPSWD2 = generateRandomPassword(lenOfPSWD, characters);
  let randomPSWD3 = generateRandomPassword(lenOfPSWD, characters);

  pswd.value = randomPSWD;
  pswd1.value = randomPSWD1;
  pswd2.value = randomPSWD2;
  pswd3.value = randomPSWD3;
}

 
function generateRandomPassword(length, characters) {
  let randomPSWD = "";
  for (let i = 0; i < length; i++) {
    let randChar = Math.floor(Math.random() * characters.length);
    randomPSWD += characters.substring(randChar, randChar + 1);
  }
  return randomPSWD;
}

 //Finally, the randPSWD string can be assigned as the value of the getElementByID() method so it will display in the input box.
 
//substing method accepts twp parameters