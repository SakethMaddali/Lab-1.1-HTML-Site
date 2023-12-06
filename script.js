const Questions = [{
    q: "1) What type of bird is this?",
    a: [{ text: "Grey Parrot", isCorrect: false },
    { text: "White-Winged Parrot", isCorrect: false },
    { text: "Cockatiel", isCorrect: true },
    { text: "Golden Conure", isCorrect: false }
    ]
 
},
{
    q: "2) What type of bird is this?",
    a: [{ text: "Budgie", isCorrect: true},
    { text: "Finch", isCorrect: false },
    { text: "Parrotlet", isCorrect: false },
    { text: "Lovebird", isCorrect: false }
    ]
 
},
{
    q: "3) What type of bird is this?",
    a: [{ text: "Royal Macaw", isCorrect: false },
    { text: "Scarlet Macaw", isCorrect: false },
    { text: "Hyacinth Macaw", isCorrect: true },
    { text: "Blue-and-Yellow Macaw", isCorrect: false }
    ]
 
},
{
    q: "4) What type of bird is this?",
    a: [{ text: "Hahn's Macaw", isCorrect: false },
    { text: "Scarlet Macaw", isCorrect: true },
    { text: "Green-Winged Macaw", isCorrect: false },
    { text: "Military Macaw", isCorrect: false }
    ]
 
},
{
    q: "5) What type of bird is this?",
    a: [{ text: "Pink-Crested Parrot", isCorrect: false },
    { text: "Galah Cockatoo", isCorrect: true },
    { text: "Cockatiel", isCorrect: false },
    { text: "Umbrella Cockatoo", isCorrect: false }
    ]
 
} 
]
 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}