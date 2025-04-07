const questions = [
  {
    question: "Which company developed JavaScript?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Netscape", correct: true },
      { text: "Google", correct: false },
      { text: "Apple", correct: false },
    ],
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "/* */", correct: false },
      { text: "#", correct: false },
      { text: "<!-- -->", correct: false },
    ],
  },
  {
    question: "Which data type is NOT primitive in JavaScript?",
    answers: [
      { text: "String", correct: false },
      { text: "Number", correct: false },
      { text: "Object", correct: true },
      { text: "Boolean", correct: false },
    ],
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: false },
      { text: "All of them", correct: true },
    ],
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      { text: "alertBox('Hello World')", correct: false },
      { text: "msg('Hello World')", correct: false },
      { text: "alert('Hello World')", correct: true },
      { text: "msgBox('Hello World')", correct: false },
    ],
  },
  {
    question: "Which operator is used to assign a value?",
    answers: [
      { text: "==", correct: false },
      { text: "=", correct: true },
      { text: "===", correct: false },
      { text: "!=", correct: false },
    ],
  },
  {
    question: "Which method converts JSON data to a JavaScript object?",
    answers: [
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.parse()", correct: true },
      { text: "JSON.convert()", correct: false },
      { text: "JSON.toObject()", correct: false },
    ],
  },
  {
    question: "What is the result of 2 + '2' in JavaScript?",
    answers: [
      { text: "4", correct: false },
      { text: "'22'", correct: true },
      { text: "NaN", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "What does NaN mean?",
    answers: [
      { text: "Not a Number", correct: true },
      { text: "Null and None", correct: false },
      { text: "Negative and Null", correct: false },
      { text: "Number and Number", correct: false },
    ],
  },
  {
    question: "Which method adds an element to the end of an array?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false },
    ],
  },
  {
    question: "What will typeof null return?",
    answers: [
      { text: "'object'", correct: true },
      { text: "'null'", correct: false },
      { text: "'undefined'", correct: false },
      { text: "'number'", correct: false },
    ],
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      { text: "function myFunction()", correct: true },
      { text: "def myFunction()", correct: false },
      { text: "function:myFunction()", correct: false },
      { text: "create function myFunction()", correct: false },
    ],
  },
  {
    question: "How do you call a function named 'myFunction'?",
    answers: [
      { text: "call myFunction()", correct: false },
      { text: "myFunction()", correct: true },
      { text: "Call.myFunction()", correct: false },
      { text: "execute myFunction()", correct: false },
    ],
  },
  {
    question: "Which method removes the last element from an array?",
    answers: [
      { text: "push()", correct: false },
      { text: "pop()", correct: true },
      { text: "shift()", correct: false },
      { text: "slice()", correct: false },
    ],
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: [
      { text: "onchange", correct: false },
      { text: "onclick", correct: true },
      { text: "onmouseclick", correct: false },
      { text: "onmouseover", correct: false },
    ],
  },
  {
    question: "Inside which HTML element do we put JavaScript code?",
    answers: [
      { text: "<js>", correct: false },
      { text: "<javascript>", correct: false },
      { text: "<script>", correct: true },
      { text: "<code>", correct: false },
    ],
  },
  {
    question: "Which of the following is a JavaScript framework?",
    answers: [
      { text: "Laravel", correct: false },
      { text: "React", correct: true },
      { text: "Django", correct: false },
      { text: "Flask", correct: false },
    ],
  },
  {
    question: "How do you write an IF statement in JavaScript?",
    answers: [
      { text: "if i = 5 then", correct: false },
      { text: "if i == 5", correct: false },
      { text: "if (i == 5)", correct: true },
      { text: "if i = 5", correct: false },
    ],
  },
  {
    question: "Which keyword is used to skip an iteration in a loop?",
    answers: [
      { text: "skip", correct: false },
      { text: "continue", correct: true },
      { text: "break", correct: false },
      { text: "pass", correct: false },
    ],
  },
  {
    question: "Which method joins array elements into a string?",
    answers: [
      { text: "concat()", correct: false },
      { text: "join()", correct: true },
      { text: "merge()", correct: false },
      { text: "combine()", correct: false },
    ],
  },
];
