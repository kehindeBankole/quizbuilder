let answers = [];
let clicks = 0;
setTimeout(() => {
  document.getElementById("welcome").style.transition = "0.5s";
  document.getElementById("welcome").style.opacity = "0";
}, 2000);
setTimeout(() => {
  document.getElementById("content").style.transition = "0.5s";
  document.getElementById("content").style.opacity = "1";
}, 2500);

if (localStorage.getItem("user") == null) {
  document.getElementById("submit").style.display = "none";
} else {
  JSON.parse(localStorage.getItem("user")).forEach((element, i) => {
    document.getElementById("content").innerHTML += `
    <div class="container">
    <div class="card m-4  step">
      <div class="card-body py-5">
        <div class="row">
          <div class="col-sm-3">${element.question}</div>
          <div class="col-sm-9">
            <span>
              <button type="button" class="btn button option" value=${element.correct}>${element.correct}</button>
              <button type="button" class="btn button option" value=${element.wrong1}>${element.wrong1}</button>
              <button type="button" class="btn button option" value=${element.wrong2}>${element.wrong2}</button>
              <button type="button" class="btn button option" value=${element.wrong3}>${element.wrong3}</button>
            </span>
          </div>
        </div>
        <button type="button" class="btn btn-success mt-5 btn-block next">next</button>
        <button type="button" class="btn btn-primary mt-5 btn-block prev">prev</button>
      </div>
    </div>
  </div>
  `;
  });
}

const card = Array.from(document.getElementsByClassName("step"));
const next = document.getElementsByClassName("next");
const prev = document.getElementsByClassName("prev");
card[0].classList.add("active");

function nextquestion() {
  let index;
  const active = document.querySelector(".step.active");
  index = card.indexOf(active);
  card[index].classList.remove("active");

  index++;
  card[index].classList.add("active");
}

function prevquestion() {
  let index;
  const active = document.querySelector(".step.active");
  index = card.indexOf(active);
  card[index].classList.remove("active");
  index--;
  card[index].classList.add("active");
  if (index == 0) {
    prev[index].disabled = true;
  }
}
for (let x = 0; x < next.length; x++) {
  next[x].addEventListener("click", nextquestion);
}
for (let x = 0; x < prev.length; x++) {
  prev[x].addEventListener("click", prevquestion);
}
const button = document.getElementsByClassName("option");

for (let x = 0; x < button.length; x++) {
  button[x].addEventListener("click", () => {
    answers.push(answers.includes(button[x].value) ? null : button[x].value);
    console.log(answers);
    let index;
    const active = document.querySelector(".step.active");
    index = card.indexOf(active);
    Array.from(button).forEach((elem, i) => {
      if (elem.classList.contains("click")) {
        elem.classList.remove("click");
        elem.classList.add("button");
      } else {
        button[x].classList.add("click");
        button[x].classList.remove("button");
      }
    });
  });
}

const submit = document.getElementById("submit");
let get=[]
let fail=[]
submit.addEventListener("click", () => {
  Array.from(JSON.parse(localStorage.getItem("user"))).forEach((elem) => {
  if(answers.includes(elem.correct)==true){
    get.push(answers.includes(elem.correct))
  }else{
    fail.push(answers.includes(elem.correct))
  }
  })
  console.log(`you got ${get.length} questions right`)
  console.log(fail)
});