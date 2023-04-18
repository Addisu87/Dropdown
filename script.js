const firstList = document.getElementById("firstList");
const secondList = document.getElementById("secondList");
const thirdList = document.getElementById("thirdList");
const calculateButton = document.getElementById("calculateButton");

function updateSecondList() {
  const multiplier = firstList.value;
  secondList.innerHTML = "";
  for (let i = multiplier * 10; i <= multiplier * 10 + 9; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i;
    secondList.appendChild(option);
  }
  updateThirdList();
}

function updateThirdList() {
  const start = secondList.value * 10;
  const end = start + 9;
  thirdList.innerHTML = "";
  for (let i = start; i <= end; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i;
    thirdList.appendChild(option);
  }
}

function calculate() {
  const sum =
    parseInt(firstList.value) +
    parseInt(secondList.value) +
    parseInt(thirdList.value);
  alert(sum);
}

firstList.addEventListener("change", updateSecondList);
secondList.addEventListener("change", updateThirdList);
calculateButton.addEventListener("click", calculate);

updateSecondList();
