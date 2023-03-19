let result = document.getElementById("inputText");

/////////Display the number in the input field
let calculate = (number) => {
  result.value += number;
};

//////////Function to calculate the result

let calculateResult = (number) => {
  try {
    result.value = eval(result.value);
  } catch (err) {
    alert("Enter the valid result");
  }
};
///////////////////Function to Clear the result
function clr() {
  result.value = " ";
}
///////////////////Function to convert to negative

function negative() {
  result.value = eval(-result.value);
}
///////////////////Function to convert to percentage
function percent() {
  result.value = eval(result.value * 100);
}
