const body = document.body;

// WRAPPER
const wrapper = document.createElement("div");
wrapper.setAttribute("class", "wrapper");

//IMAGE
const image = document.createElement("img");
image.setAttribute("src", "./messi.jpeg");
console.log(image);

// H1
const h1el = document.createElement("h1");
h1el.innerText = "LEO MESSI";
//UL
const ulEl = document.createElement("ul");

//BUTTON
const button = document.createElement("button");
button.innerText = "SHOW";

//LI
const liEl = ["Foot :  Left", "World cup : 1", "Golden ball:8"];
liEl.forEach((el) => {
  const li = document.createElement("li");
  li.innerText = el;
  ulEl.append(li);
});

wrapper.append(image, h1el, ulEl);
body.append(wrapper, button);
wrapper.style.display = "none";

button.addEventListener("click", () => {
  if (wrapper.style.display === "none") {
    wrapper.style.display = "block";
    wrapper.style.color = "red";
    body.style.background = "#333";
    body.style.opacity = "0.5";
  } else {
    wrapper.style.display = "none";
  }
});
