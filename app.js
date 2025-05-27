// Define the problems for AP Physics 1 and AP Precalculus
const problems = {
  physics: [
    {
      question: "What is the acceleration of an object in free fall near Earth's surface?",
      options: ["9.8 m/s²", "10 m/s²", "5 m/s²", "0 m/s²"],
      answer: "9.8 m/s²"
    },
    {
      question: "Which of the following is true for an object in uniform circular motion?",
      options: ["The object’s speed is constant.", "The object’s velocity is constant.", "The object’s acceleration is zero.", "The object is not moving."],
      answer: "The object’s speed is constant."
    },
    {
      question: "A tube contains a volume of water and a volume of mercury as shown in the figure above. Both ends of the tube are open. Points A and B are at the same level and points C and D are at the same level. The distance between points A and B and the surface of the liquids are shown. Which of the following correctly relates the gauge pressures at the points shown? The density of the water is 1,000 kg/m³ and the density of the mercury is 13,600 kg/m³.",
      image: "images/mercury_tube.png",
      options: [
        "Pₐ > Pᵦ and P꜀ > P𝒟",
        "Pₐ > Pᵦ and P꜀ = P𝒟",
        "Pₐ = Pᵦ and P꜀ = P𝒟",
        "Pₐ = Pᵦ and P꜀ > P𝒟"
      ],
      answer: "Pₐ > Pᵦ and P꜀ = P𝒟"
    }
  ],
  precalc: [
    {
      question: "What is the value of sin(45°)?",
      options: ["√2 / 2", "1 / 2", "√3 / 2", "1"],
      answer: "√2 / 2"
    },
    {
      question: "What is the domain of the function f(x) = 1 / (x - 2)?",
      options: ["x ≠ 2", "x > 2", "x ≤ 2", "x ≠ 0"],
      answer: "x ≠ 2"
    }
  ]
};

// Current question data
let currentSubject = null;
let currentIndex = 0;
let currentProblem = null;

function startPractice(subject) {
  currentSubject = subject;
  currentIndex = 0;
  showQuestion();
}

function showQuestion() {
  const subjectProblems = problems[currentSubject];
  if (currentIndex < subjectProblems.length) {
    currentProblem = subjectProblems[currentIndex];
    document.getElementById("question-title").textContent = `${currentSubject === 'physics' ? 'AP Physics 1' : 'AP Precalculus'} Practice - Question ${currentIndex + 1}`;
    document.getElementById("question-text").textContent = currentProblem.question;

    // Display image if it exists
    const imageContainer = document.getElementById("question-image");
    if (currentProblem.image) {
      imageContainer.innerHTML = `<img src="${currentProblem.image}" alt="Question image" style="max-width:100%; height:auto;">`;
    } else {
      imageContainer.innerHTML = '';
    }

    const answerOptions = document.getElementById("answer-options");
    answerOptions.innerHTML = '';
    currentProblem.options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      answerOptions.appendChild(button);
    });

    document.getElementById("next-button").style.display = 'none';
  } else {
    document.getElementById("question-container").innerHTML = "<h2>Congratulations! You've completed the practice!</h2>";
  }
}

function checkAnswer(selectedOption) {
  const isCorrect = selectedOption === currentProblem.answer;
  alert(isCorrect ? "Correct!" : "Incorrect. The correct answer was: " + currentProblem.answer);
  document.getElementById("next-button").style.display = 'inline-block';
}

function nextQuestion() {
  currentIndex++;
  showQuestion();
}
