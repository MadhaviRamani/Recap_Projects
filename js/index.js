const bookmarkContainers = document.querySelectorAll(
  '[data-js="bookmark-containers"]',
);

bookmarkContainers.forEach((container) => {
  const bookmarkBtn = container.querySelector('[data-js="bookmark"]');
  const nonBookmarkBtn = container.querySelector('[data-js="nonbookmark"]');

  nonBookmarkBtn.addEventListener("click", () => {
    nonBookmarkBtn.setAttribute("hidden", "hidden");
    bookmarkBtn.removeAttribute("hidden");
  });

  bookmarkBtn.addEventListener("click", () => {
    bookmarkBtn.setAttribute("hidden", "hidden");
    nonBookmarkBtn.removeAttribute("hidden");
  });
});

// ANSWER BTN EVENT
const answerBtnContainers = document.querySelectorAll(
  '[data-js="answerbtn-container"]',
);

answerBtnContainers.forEach((container) => {
  const button = container.querySelector("[data-js='show-answer-btn']");
  const answerContainer = container.querySelector("[data-js='answer-container']");

  button.addEventListener("click", () => {
    answerContainer.classList.toggle("hidden");
    if (answerContainer.classList.contains("hidden")) {
      button.textContent = "Show answer";
    } else {
      button.textContent = "Hide answer";
    }
  });
});























/* ========== Question 1 ============== */
/* const bookMarkt_Btn = document.querySelector("[data-js='bookmark']");
const notMarkt_Btn = document.querySelector("[data-js='nonbookmark']");

bookMarkt_Btn.addEventListener("click", (e) => {
  notMarkt_Btn.removeAttribute("hidden");
  bookMarkt_Btn.setAttribute("hidden", "hidden");
});

notMarkt_Btn.addEventListener("click", (e) => {
  notMarkt_Btn.setAttribute("hidden", "hidden");
  bookMarkt_Btn.removeAttribute("hidden");
}); */

/* =========== Ouesion 2 ============== */
/* 
const bookMarkt_Btn2 = document.querySelector("[data-js='bookmark-2']");
const notMarkt_Btn2 = document.querySelector("[data-js='nonbookmark-2']");

bookMarkt_Btn2.addEventListener("click", (e) => {
  notMarkt_Btn2.removeAttribute("hidden");
  bookMarkt_Btn2.setAttribute("hidden", "hidden");
});

notMarkt_Btn2.addEventListener("click", (e) => {
  notMarkt_Btn2.setAttribute("hidden", "hidden");
  bookMarkt_Btn2.removeAttribute("hidden");
}); */

/* =========== Ouesion 3 ============== */
/* const bookMarkt_Btn3 = document.querySelector("[data-js='bookmark-3']");
const notMarkt_Btn3 = document.querySelector("[data-js='nonbookmark-3']");

bookMarkt_Btn3.addEventListener("click", (e) => {
  notMarkt_Btn3.removeAttribute("hidden");
  bookMarkt_Btn3.setAttribute("hidden", "hidden");
});

notMarkt_Btn3.addEventListener("click", (e) => {
  notMarkt_Btn3.setAttribute("hidden", "hidden");
  bookMarkt_Btn3.removeAttribute("hidden");
}); */

/* =========== Ouesion 4 ============== */
/* const bookMarkt_Btn4 = document.querySelector("[data-js='bookmark-4']");
const notMarkt_Btn4 = document.querySelector("[data-js='nonbookmark-4']");

bookMarkt_Btn4.addEventListener("click", (e) => {
  notMarkt_Btn4.removeAttribute("hidden");
  bookMarkt_Btn4.setAttribute("hidden", "hidden");
});

notMarkt_Btn4.addEventListener("click", (e) => {
  notMarkt_Btn4.setAttribute("hidden", "hidden");
  bookMarkt_Btn4.removeAttribute("hidden");
}); */
/* =========== Ouesion 5 ============== */
/* const bookMarkt_Btn5 = document.querySelector("[data-js='bookmark-5']");
const notMarkt_Btn5 = document.querySelector("[data-js='nonbookmark-5']");

bookMarkt_Btn5.addEventListener("click", (e) => {
  notMarkt_Btn5.removeAttribute("hidden");
  bookMarkt_Btn5.setAttribute("hidden", "hidden");
});

notMarkt_Btn5.addEventListener("click", (e) => {
  notMarkt_Btn5.setAttribute("hidden", "hidden");
  bookMarkt_Btn5.removeAttribute("hidden");
}); */
/* =========== Ouesion 6 ============== */
/* const bookMarkt_Btn6 = document.querySelector("[data-js='bookmark-6']");
const notMarkt_Btn6 = document.querySelector("[data-js='nonbookmark-6']");

bookMarkt_Btn6.addEventListener("click", (e) => {
  notMarkt_Btn6.removeAttribute("hidden");
  bookMarkt_Btn6.setAttribute("hidden", "hidden");
});

notMarkt_Btn6.addEventListener("click", (e) => {
  notMarkt_Btn6.setAttribute("hidden", "hidden");
  bookMarkt_Btn6.removeAttribute("hidden");
}); */
/* =========== Ouesion 7 ============== */
/* const bookMarkt_Btn7 = document.querySelector("[data-js='bookmark-7']");
const notMarkt_Btn7 = document.querySelector("[data-js='nonbookmark-7']");

bookMarkt_Btn7.addEventListener("click", (e) => {
  notMarkt_Btn7.removeAttribute("hidden");
  bookMarkt_Btn7.setAttribute("hidden", "hidden");
});

notMarkt_Btn7.addEventListener("click", (e) => {
  notMarkt_Btn7.setAttribute("hidden", "hidden");
  bookMarkt_Btn7.removeAttribute("hidden");
}); */
/* =========== Ouesion 8 ============== */
/* const bookMarkt_Btn8 = document.querySelector("[data-js='bookmark-8']");
const notMarkt_Btn8 = document.querySelector("[data-js='nonbookmark-8']");

bookMarkt_Btn8.addEventListener("click", (e) => {
  notMarkt_Btn8.removeAttribute("hidden");
  bookMarkt_Btn8.setAttribute("hidden", "hidden");
});

notMarkt_Btn8.addEventListener("click", (e) => {
  notMarkt_Btn8.setAttribute("hidden", "hidden");
  bookMarkt_Btn8.removeAttribute("hidden");
}); */
/* =========== Ouesion 9 ============== */
/* const bookMarkt_Btn9 = document.querySelector("[data-js='bookmark-9']");
const notMarkt_Btn9 = document.querySelector("[data-js='nonbookmark-9']");

bookMarkt_Btn9.addEventListener("click", (e) => {
  notMarkt_Btn9.removeAttribute("hidden");
  bookMarkt_Btn9.setAttribute("hidden", "hidden");
});

notMarkt_Btn9.addEventListener("click", (e) => {
  notMarkt_Btn9.setAttribute("hidden", "hidden");
  bookMarkt_Btn9.removeAttribute("hidden");
}); */
/* =========== Ouesion 10 ============== */
/* const bookMarkt_Btn10 = document.querySelector("[data-js='bookmark-10']");
const notMarkt_Btn10 = document.querySelector("[data-js='nonbookmark-10']");

bookMarkt_Btn10.addEventListener("click", (e) => {
  notMarkt_Btn10.removeAttribute("hidden");
  bookMarkt_Btn10.setAttribute("hidden", "hidden");
});

notMarkt_Btn10.addEventListener("click", (e) => {
  notMarkt_Btn10.setAttribute("hidden", "hidden");
  bookMarkt_Btn10.removeAttribute("hidden");
});  */
