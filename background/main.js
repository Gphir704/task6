const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector('input[name="color"]');

  const body = document.body;

  const bcColors = ["black", "red", "white", "green", "blue", "fuchsia"];

  const userInput = input.value.toLowerCase(); // განვიხილავთ ორივე ვარიანტს

  if (bcColors.includes(userInput)) {
    body.style.background = userInput;
    input.value = "";
    return;
  }
  if (!bcColors.includes(userInput)) {
    alert("PLEASE ENTER VALID COLOR");
    input.value = "";
    return;
  }
});
