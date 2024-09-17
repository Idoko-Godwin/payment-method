// const fruitResult = document.querySelector(".fruit-result");
// const getFruit = document.querySelector(".get-fruit");

// const fruit = ["🍇", "🍓", "🍏", "🍒", "🍈", "🍌"];

// getFruit.addEventListener("click", () => {
//   const randomNum = Math.floor(Math.random() * fruit.length);
//   switch (randomNum) {
//     case 1:
//       fruitResult.textContent = `This is the fruit: ${fruit[0]}`;
//       break;
//     case 2:
//       fruitResult.textContent = `This is the fruit: ${fruit[1]}`;
//       break;
//     case 3:
//       fruitResult.textContent = `This is the fruit: ${fruit[2]}`;
//       break;
//     case 4:
//       fruitResult.textContent = `This is the fruit: ${fruit[3]}`;
//       break;
//     case 5:
//       fruitResult.textContent = `This is the fruit: ${fruit[4]}`;
//       break;
//     case 6:
//       fruitResult.textContent = `This is the fruit: ${fruit[5]}`;
//       break;
//     default:
//       console.log();
//       fruitResult.textContent =
//         "There is nothing to dispaly, please reload the page";
//   }
// });

//CARD PAYMENT SECTION

const masterCard = document.querySelector("#master-card");
const visaCard = document.querySelector("#visa-card");
const verveCard = document.querySelector("#verve-card");
const opayCard = document.querySelector("#opay-card");
const div2 = document.querySelector(".div2");
const innerDiv = document.querySelector(".inner-div");

// functional selection
let selectResult = document.querySelector(".display-paragraph");
const noOption = document.querySelector("#no-option");
const yesOption = document.querySelector("#yes-option");
const EnterBtn = document.querySelector(".select-card");
const resultDivSec = document.querySelector(".result-Div-sec");

const createElement = () => {
  //CREATION OF MAIN DIV SECTION
  const createResultSection = document.createElement("div");
  createResultSection.classList.add("result-div");
  resultDivSec.appendChild(createResultSection);

  //CREATION OF TEXT PARAGRAPH SECTION
  let displayParagraph = document.createElement("p");
  displayParagraph.classList.add("display-paragraph");
  createResultSection.appendChild(displayParagraph);
  // displayParagraph.textContent = "Are you sure you want to pay with this card?";

  //CREATION OF YES BUTTON
  const yesBtn = document.createElement("button");
  yesBtn.classList.add("yes-option");
  createResultSection.appendChild(yesBtn);
  yesBtn.textContent = "✔";

  //CREATION OF NO BUTTON
  // const noBtn = document.createElement("button");
  // noBtn.classList.add("no-option");
  // createResultSection.appendChild(noBtn);
  // noBtn.textContent = "✖";

  const listenYesEvent = () => {
    yesBtn.addEventListener("click", () => {
      displayParagraph.textContent =
        "Thank you for choosing master card 💳. Your order is received and will be delivered in ten days time.";
      displayParagraph.style.color = "green";
    });
  };

  // THE ADDEVENTLISTENER SECTION
  if (masterCard.checked) {
    displayParagraph.textContent =
      "Are you sure you want to pay with master card?";
    displayParagraph.style.color = "black";
    listenYesEvent();
  } else if (visaCard.checked) {
    displayParagraph.textContent =
      "Are you sure you want to pay with Your visa card?";
    displayParagraph.style.color = "black";

    yesBtn.addEventListener("click", () => {
      displayParagraph.textContent =
        "Thank you for choosing visa card card. Your order is received and will be delivered in ten days time.";
      displayParagraph.style.color = "darkgreen";
    });
  } else if (verveCard.checked) {
    displayParagraph.textContent =
      "Are you sure you want to pay with Your visa card?";
    displayParagraph.style.color = "black";

    yesBtn.addEventListener("click", () => {
      displayParagraph.textContent =
        "Thank you for paying with verve card 🗂. Your order is received and will be delivered in ten days time.";
      displayParagraph.style.color = "darkgreen";
    });
  } else if (opayCard.checked) {
    displayParagraph.textContent =
      "Are you sure you want to pay with Your Opay card?";
    displayParagraph.style.color = "black";

    yesBtn.addEventListener("click", () => {
      displayParagraph.textContent =
        "Thank you for paying with Opay card 🃏. Your order is received and will be delivered in ten days time.";
      displayParagraph.style.color = "darkgreen";
    });
  } else {
    displayParagraph.textContent =
      "Sorry no card was selected, select a card to proceed with your payment.";
    displayParagraph.style.color = "red";
  }
};

EnterBtn.addEventListener("click", () => {
  createElement();
});
