// Challenge 1

function countWords(string) {
  const words = string.split(" ");
  return words.length;
}

const message = "There is no war in Ba Sing Se";
const wordCount = countWords(message);

console.log(`The message "${message}" contains ${wordCount} words.`);

// Challenge 2

const countries = ["China", "Japan", "South Korea", "Vietnam", "Malaysia"];
const capitals = ["Beijing", "Tokyo", "Seoul", "Hanoi", "Kuala Lumpur"];

function displayCountryAndCapital(country, capital) {
  console.log(`Your country : ${country} has the capital named : ${capital}.`);
}

for (let i = 0; i < countries.length; i++) {
  displayCountryAndCapital(countries[i], capitals[i]);
}

// Challenge 3

function checkSeason(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return "Winter";
    case 3:
    case 4:
    case 5:
      return "Spring";
    case 6:
    case 7:
    case 8:
      return "Summer";
    case 9:
    case 10:
    case 11:
      return "Autumn";
    default:
      return "Invalid month";
  }
}

const season = checkSeason(10);

console.log(season); // "Autumn"
function checkSeason(month) {
  if (month >= 12 || month <= 2) {
    return "Winter";
  } else if (month >= 3 && month <= 5) {
    return "Spring";
  } else if (month >= 6 && month <= 8) {
    return "Summer";
  } else if (month >= 9 && month <= 11) {
    return "Autumn";
  } else {
    return "Invalid month";
  }
}
