const length = document.getElementById("length");
const author = document.getElementById("author");
const quizSubject = document.getElementById("subject");
const question = document.getElementById("question");
const correct = document.getElementById("correct");
const wrong1 = document.getElementById("wrong1");
const wrong2 = document.getElementById("wrong2");
const wrong3 = document.getElementById("wrong3");
let questions = [];
document.body.style.backgroundColor = `${localStorage.getItem("color")}`

if(localStorage.getItem("user")!==null){
  document.getElementById("start").style.display = "block"
}else{
  document.getElementById("start").style.display = "none"
}


function add() {
  if (questions.length !== Number(length.value)) {
    questions.push({
      author: author.value,
      quizSubject: quizSubject.value,
      question: question.value,
      correct: correct.value,
      wrong1: wrong1.value,
      wrong2: wrong2.value,
      wrong3: wrong3.value
    });
    document.getElementById("number").textContent = questions.length;
    questions.length == Number(length.value) ? document.getElementById("start").style.display = "block" : null
    length.disabled = true;
    localStorage.setItem("user",questions);
 
  }

  return;

}
console.log(JSON.parse(localStorage.getItem("user")).sort(()=>Math.random()))

const colorselected = document.getElementById("color");

function color() {
  localStorage.setItem("color", colorselected.value);
  document.body.style.backgroundColor = `${localStorage.getItem("color")}`
}

function gettime() {
  var x = document.getElementById("inputState").value;
localStorage.setItem("time" , x)
alert("time has been set")
}