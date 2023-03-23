let code = Array.from({length: 4}, () => Math.floor(Math.random() * 10));
let button1 = document.querySelector(".check-button1");
let button2 = document.querySelector(".check-button2");
let button3 = document.querySelector(".check-button3");
let button4 = document.querySelector(".check-button4");
let button5 = document.querySelector(".check-button5");
let answerArea = document.querySelector(".answer");
let answerContainer = document.querySelector(".answer-container");
let input = "";


answerContainer.style.visibility = "hidden";
answerArea.textContent = code;


button1.addEventListener("click", () => {
  for (let i = 0; i < 4; i++) {
    input = document.querySelector(`.f1 .input${i + 1}`);
    num = Number(input.value)

    if (Number(input.value) == code[i]) {
      input.disabled = true;
      input.style.backgroundColor = "rgb(0, 255, 0)";
    } else if (code.includes(Number(input.value)) == true) {
      input.disabled = true;
      input.style.backgroundColor = "yellow";
    } else {
      input.disabled = true;
      input.style.backgroundColor = "red";
    };
  };
  button1.disabled = true;
})


button2.addEventListener("click", () => {
  for (let i = 0; i < 4; i++) {
    input = document.querySelector(`.f2 .input${i + 1}`);
    num = Number(input.value)

    if (Number(input.value) == code[i]) {
      input.disabled = true;
      input.style.backgroundColor = "rgb(0, 255, 0)";
    } else if (code.includes(Number(input.value)) == true) {
      input.disabled = true;
      input.style.backgroundColor = "yellow";
    } else {
      input.disabled = true;
      input.style.backgroundColor = "red";
    };
  };
  button2.disabled = true;
})


button3.addEventListener("click", () => {
  for (let i = 0; i < 4; i++) {
    input = document.querySelector(`.f3 .input${i + 1}`);
    num = Number(input.value)

    if (Number(input.value) == code[i]) {
      input.disabled = true;
      input.style.backgroundColor = "rgb(0, 255, 0)";
    } else if (code.includes(Number(input.value)) == true) {
      input.disabled = true;
      input.style.backgroundColor = "yellow";
    } else {
      input.disabled = true;
      input.style.backgroundColor = "red";
    };
  };
  button3.disabled = true;
})


button4.addEventListener("click", () => {
  for (let i = 0; i < 4; i++) {
    input = document.querySelector(`.f4 .input${i + 1}`);
    num = Number(input.value)

    if (Number(input.value) == code[i]) {
      input.disabled = true;
      input.style.backgroundColor = "rgb(0, 255, 0)";
    } else if (code.includes(Number(input.value)) == true) {
      input.disabled = true;
      input.style.backgroundColor = "yellow";
    } else {
      input.disabled = true;
      input.style.backgroundColor = "red";
    };
  };
  button4.disabled = true;
})


button5.addEventListener("click", () => {
  for (let i = 0; i < 4; i++) {
    input = document.querySelector(`.f5 .input${i + 1}`);
    num = Number(input.value)

    if (Number(input.value) == code[i]) {
      input.disabled = true;
      input.style.backgroundColor = "rgb(0, 255, 0)";
    } else if (code.includes(Number(input.value)) == true) {
      input.disabled = true;
      input.style.backgroundColor = "yellow";
    } else {
      input.disabled = true;
      input.style.backgroundColor = "red";
    };
  };
  button5.disabled = true;
  answerContainer.style.visibility = "visible";
})
