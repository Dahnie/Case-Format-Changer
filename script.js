"use strict";

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
document.body.append(document.createElement("h2"));

// Function
// 1.   Private variable case to camelCase
const changeToCamelCase = function (variable) {
  const str = variable.toLowerCase().trim().split("_");
  // first part
  let firstPart = str.slice(0, 1);

  //second part
  let secondPart = str.slice(1);
  for (const varr of secondPart) {
    secondPart = varr.replace(varr[0], varr[0].toUpperCase());
    firstPart.push(secondPart);
  }
  firstPart = firstPart.join("");
  return firstPart;
};

// DOM
document.querySelector("button").addEventListener("click", function () {
  document.querySelector("h2").innerHTML = "";
  let text = document.querySelector("textarea").value;
  text = text.split("\n");
  for (let [i, word] of text.entries()) {
    let result = changeToCamelCase(word);
    result = `${result.padEnd(20, " ")}${"✅".repeat(i + 1)}`;
    console.log(result);
    document.querySelector("h2").innerHTML += result + "<br/>";
  }
});

// changeToCamelCase("underscore_case_var");
// changeToCamelCase(" first_name");
// changeToCamelCase("Some_Variable");
// changeToCamelCase(" calculate_AGE");
// changeToCamelCase("delayed_departure");
