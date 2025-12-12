// let a = prompt("enter a number for your resut");
// let b = parseInt(a);
// if(b){
//    if ( b> 80) {
//       console.log("A+")
//    } else if ( b> 70 && b<80) {
//       console.log("B+");
//    }else if ( b> 60 && b<70) {
//       console.log("B");
//    } else if ( b> 50 && b<60) {
//       console.log("c+");
//    }else if ( b> 40 && b<50) {
//       console.log("c");
//    }else{
//       console.log("fail");
//    }
// } else{
//    console.log("plz enter vailed number");
// }

// ===============================Question: Traffic Light Controller===================================
// Function trafficLight(color) banao (color = "red"/"yellow"/"green"):
// Agar color === "red" → "Ruko!"
// Else agar color === "yellow" → "Taiyar ho jao!"
// Else agar color === "green" → "Chalo!"
// Else → "Invalid signal!"
// Test: trafficLight("yellow") → "Taiyar ho jao!"
// .......................
// let userColor = prompt("Traffic light ka color enter karein:");
// function trafficLight(color) {
//   if (color === "red") {
//     return "Ruko!";
//   } else if (color === "yellow") {
//     return "Taiyar ho jao!";
//   } else if (color === "green") {
//     return "Chalo!";
//   } else {
//     return "Invalid signal!";
//   }
// }

// console.log(trafficLight(userColor));


// ===============================Weather Alert=================================== 
// Task: weatherAlert(temp) – >25 "Sunny", <10 "Cold", else "Rainy".
// Test: weatherAlert(5) → "Cold"

// let userTemp = prompt("Temperature enter karein:");
// userTemp = Number(userTemp); 
// function weatherAlert(temp) {
//   if (temp > 25) {
//     return "Sunny";
//   } else if (temp < 10) {
//     return "Cold";
//   } else {
//     return "Rainy";
//   }
// }
// console.log(weatherAlert);


// ===================================Fruit Picker===========================================
// Task: pickFruit(type) – "apple" "Red", "banana" "Yellow", else "Unknown".
// Test: pickFruit("banana") → "Yellow"

// let userFruit = prompt("Fruit type enter karein:");
// function pickFruit(type) {
//   if (type === "apple") {
//     return "Red";
//   } else if (type === "banana") {
//     return "Yellow";
//   } else {
//     return "Unknown";
//   }
// }
// console.log(pickFruit(userFruit));

// ===================================Number Sign===========================================
// Task: signCheck(num) – >0 "Positive", <0 "Negative", else "Zero".
// Test: signCheck(0) → "Zero"
// User se number input lo

// let userNum = prompt("Koi number enter karein:");
// let userNewNum = parseInt(userNum); 
// function signCheck(num) {
//   if (num > 0) {
//     return "Positive";
//   } else if (num < 0) {
//     return "Negative";
//   } else {
//     return "Zero";
//   }
// }
// console.log(signCheck(userNewNum));

// ===================================Day Mood===========================================
// Task: dayMood(day) – "Monday" "Tired", "Friday" "Happy", else "Normal".
// Test: dayMood("Monday") → "Tired"

// let userDay = prompt("Aaj ka din enter karein:");
// function dayMood(day) {
//   if (day === "Monday") {
//     return "Tired";
//   } else if (day === "Friday") {
//     return "Happy";
//   } else {
//     return "Normal";
//   }
// }
// console.log(dayMood(userDay));

// ===================================Speed Limit===========================================
// Task: speedCheck(speed) – >60 "Fine", <60 "Safe", else "Invalid".
// Test: speedCheck(70) → "Fine"

// let userSpeed = prompt("Apni speed enter karein:");
// let userNewSpeed = parseInt(userSpeed);

// function speedCheck(speed) {
//   if (speed > 60) {
//     return "Fine";
//   } else if (speed <= 60) {
//     return "Safe";
//   } 
// }

// console.log(speedCheck(userNewSpeed));

// ===================================Color Code===========================================
// Task: colorCode(color) – "red" 1, "blue" 2, else 0.
// Test: colorCode("blue") → 2
// let userColor = prompt("Color enter karein:");
// function colorCode(color) {
//   if (color === "red") {
//     return 1;
//   } else if (color === "blue") {
//     return 2;
//   } else {
//     return 0;
//   }
// }
// console.log(colorCode(userColor));

// ===================================Meal Time===========================================
// Task: mealTime(hour) – >12 "Lunch", <12 "Breakfast", else "Dinner".
// Test: mealTime(10) → "Breakfast"
// let userHour = prompt("Hour enter karein (0-23):");
// let userNewHour = parseInt(userHour);
// function mealTime(hour) {
//   if (hour >= 0 && hour < 12) {
//     return "Breakfast";
//   } else if (hour >= 12 && hour < 16) {
//     return "Lunch";
//   } else if (hour >= 16 && hour <= 23) {
//     return "Dinner";
//   } else {
//     return "Invalid hour!";
//   }
// }
// console.log(mealTime(userNewHour));

// ===================================Animal Sound===========================================
// Task: animalSound(animal) – "dog" "Woof", "cat" "Meow", else "Silent".
// Test: animalSound("cat") → "Meow"
// let userAnimal = prompt("Animal enter karein:");
// function animalSound(animal) {
//   if (animal === "dog") 
//    return "Woof";
//   else if (animal === "cat") 
//    return "Meow";
//   else return "Silent";
// }
// console.log("Animal Sound:", animalSound(userAnimal));

// ===================================Price Category===========================================
// Task: priceCat(price) – >100 "Expensive", <50 "Cheap", else "Medium".
// Test: priceCat(30) → "Cheap"

// let userPrice = Number(prompt("Price enter karein:"));
// function priceCat(price) {
//   if (price > 100) 
//    return "Expensive";
//   else if (price < 50) 
//    return "Cheap";
//   else return "Medium";
// }
// console.log(priceCat(userPrice));
// ===================================Season Picker===========================================
// Task: seasonPicker(month) – >6 "Summer", <3 "Winter", else "Spring".
// Test: seasonPicker(1) → "Winter"
// let userMonth = Number(prompt("Month number enter karein:"));
// function seasonPicker(month) {
//   if (month > 6) return "Summer";
//   else if (month < 3) return "Winter";
//   else return "Spring";
// }
// console.log(seasonPicker(userMonth));
// ===================================Game Score===========================================
// Task: gameScore(score) – >80 "Win", <50 "Lose", else "Draw".
// Test: gameScore(60) → "Draw"
// let score = parseInt(prompt("Enter game score:"));
// function gameScore(score) {
//   if (score > 80) return "Win";
//   else if (score < 50) return "Lose";
//   else return "Draw";
// }
// console.log(gameScore(score));
// // ===================================Drink Choice===========================================
// Task: drinkChoice(age) – >18 "Coffee", <18 "Juice", else "Water".
// Test: drinkChoice(16) → "Juice"
// let age = parseInt(prompt("Enter your age:"));
// function drinkChoice(age) {
//   if (age > 18) return "Coffee";
//   else if (age < 18) return "Juice";
//   else return "Water";
// }
// console.log(drinkChoice(age));

// ===================================Light Switch===========================================
// Task: lightSwitch(level) – >5 "Bright", <3 "Dim", else "Medium".
// Test: lightSwitch(2) → "Dim"
// let level = parseInt(prompt("Enter light level:"));
// function lightSwitch(level) {
//   if (level > 5) return "Bright";
//   else if (level < 3) return "Dim";
//   else return "Medium";
// }
// console.log(lightSwitch(level));

// ===================================Book Genre===========================================
// Task: bookGenre(type) – "fiction" "Fun", "nonfiction" "Learn", else "Other".
// Test: bookGenre("fiction") → "Fun"
// let type = prompt("Enter book type :");
// function bookGenre(type) {
//   if (type === "fiction") 
//       return "Fun";
//   else if (type === "nonfiction") 
//       return "Learn";
//   else return "Other";
// }
// console.log(bookGenre(type));

// ===================================Fuel Level===========================================
// Task: fuelLevel(gauge) – >75 "Full", <25 "Low", else "OK".
// Test: fuelLevel(20) → "Low"
// let gauge = parseInt(prompt("Enter fuel gauge %:"));
// function fuelLevel(gauge) {
//   if (gauge > 75) 
//       return "Full";
//   else if (gauge < 25) 
//       return "Low";
//   else return "OK";
// }
// console.log(fuelLevel(gauge));

// ===================================Mood Ring===========================================
// Task: moodRing(color) – "blue" "Calm", "red" "Angry", else "Neutral".
// Test: moodRing("blue") → "Calm"
// let color = prompt("Enter mood ring color:");
// function moodRing(color) {
//   if (color === "blue") 
//       return "Calm";
//   else if (color === "red")   
//       return "Angry";
//   else 
//       return "Neutral";
// }
// console.log(moodRing(color));

// ===================================Volume Control===========================================
// Task: volumeControl(level) – >80 "Loud", <20 "Quiet", else "Normal".
// Test: volumeControl(90) → "Loud"
// let volume = parseInt(prompt("Enter volume level:"));
// function volumeControl(level) {
//   if (level > 80) 
//    return "Loud";
//   else if (level < 20) 
//    return "Quiet";
//   else 
//    return "Normal";
// }
// console.log(volumeControl(volume));

// ===================================Pet Type===========================================
// Task: petType(animal) – "fish" "Swim", "bird" "Fly", else "Walk".
// Test: petType("bird") → "Fly"
// let pet = prompt("Enter pet type (fish/bird/other):");
// function petType(animal) {
//   if (animal === "fish") 
//    return "Swim";
//   else if (animal === "bird") 
//    return "Fly";
//   else 
//    return "Walk";
// }
// console.log(petType(pet));

// ===================================Battery Alert===========================================
// Task: batteryAlert(percent) – >90 "Charged", <20 "Charge Now", else "Fine".
// Test: batteryAlert(15) → "Charge Now"
// let percent = parseInt(prompt("Enter battery %:"));
// function batteryAlert(percent) {
//   if (percent > 90) 
//    return "Charged";
//   else if (percent < 20) 
//    return "Charge Now";
//   else{
//    return "Fine";
//   } 

// }
// console.log(batteryAlert(percent));



