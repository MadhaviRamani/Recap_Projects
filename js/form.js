const formContainer = document.querySelector('[data-js="form-container"]');
const submitButton = document.querySelector('[data-js="submit-button"]');
const questionInput = document.querySelector('[data-js="question-input"]');
const answerInput = document.querySelector('[data-js="answer-input"]');
const tagInput = document.querySelector('[data-js="tag-input"]');
const questionContainer = document.querySelector('[data-js="question-container"]');
/* console.log(answerInput.value); */



function questionCard() {
  
  const newCard = document.createElement("article");
  newCard.classList.add("question-card");
  const bookmarkContainer = document.createElement("div");
  bookmarkContainer.setAttribute("data-js", "bookmark-container");

  const nonBookmarkIcon = document.createElement("img");
  nonBookmarkIcon.setAttribute("data-js", "non-bookmark-icon", "hidden");
  nonBookmarkIcon.classList.add("idea-icon");
  nonBookmarkIcon.setAttribute("src", "./image/idea-bulb.png");

  const bookmarkIcon = document.createElement("img");
  bookmarkIcon.setAttribute("data-js", "bookmark-icon");
  bookmarkIcon.setAttribute("src", "./image/lightbulb.png");
  bookmarkIcon.classList.add("idea-icon");
  const questionText = document.createElement("p");
  questionText.setAttribute("data-js", "question-text");
  questionText.classList.add("question-p");
  questionText.textContent = questionInput.value;
  const AnswerBtnContainer = document.createElement("div");
  AnswerBtnContainer.setAttribute("data-js", "answer-btn-container");
  const answerText = document.createElement("div");
  answerText.setAttribute("data-js", "answer-text");
  answerText.textContent = answerInput.value;

  const optionbtn = document.createElement("div");
  optionbtn.classList.add("option-btn");
  const button = document.createElement("button");
  button.textContent = tagInput.value; 
  optionbtn.append(button);
  bookmarkContainer.append(nonBookmarkIcon);
  bookmarkContainer.append(bookmarkIcon);
  AnswerBtnContainer.append(answerText);
  newCard.append(bookmarkContainer);
  newCard.append(questionText);
  newCard.append(AnswerBtnContainer);
  newCard.append(optionbtn);

button.addEventListener("click", () => {
    AnswerBtnContainer.classList.toggle("hidden");
    if (AnswerBtnContainer.classList.contains("hidden")) {
      button.textContent = "Show answer";
    } else {
      button.textContent = "Hide answer";
    }
 });

   nonBookmarkIcon.addEventListener("click", () => {
    nonBookmarkIcon.setAttribute("hidden", "hidden");
    bookmarkIcon.removeAttribute("hidden");
  });

  bookmarkIcon.addEventListener("click", () => {
    bookmarkIcon.setAttribute("hidden", "hidden");
    nonBookmarkIcon.removeAttribute("hidden");
  });
questionContainer.prepend(newCard);
return newCard;

};

formContainer.addEventListener("submit", (event) => {

event.preventDefault();
const formElement = event.target.elements;

const questionValue = formElement.questionInput;
const answerValue = formElement.answerInput;
const tagValue = formElement.tagInput;
  
console.log(questionValue, answerValue, tagValue);
questionCard();
event.target.reset();

});

