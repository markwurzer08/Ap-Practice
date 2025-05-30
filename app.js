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
      image: "https://i.imgur.com/J2e6UnT.png",
      options: [
        "Pₐ > Pᵦ and P꜀ > P𝒟",
        "Pₐ > Pᵦ and P꜀ = P𝒟",
        "Pₐ = Pᵦ and P꜀ = P𝒟",
        "Pₐ = Pᵦ and P꜀ > P𝒟"
      ],
      answer: "Pₐ > Pᵦ and P꜀ = P𝒟"
    },
    {
      question: "A satellite is in a circular orbit around the Earth and moves at a constant speed. If the height of the orbit above the surface of the Earth increased (and the orbit remained circular), the kinetic energy of the satellite would:",
      image: "https://i.imgur.com/3orBZ8B.png",
      options: [
        "A. Decrease",
        "B. Increase",
        "C. Not Change",
        "D. A change in the kinetic energy cannot be determined"
      ],
      answer: "A. Decrease"
    },
    {
      question: "A person is standing in an elevator which is accelerating upwards. Which of the following is true of the person's apparent weight?",
      image: "https://i.imgur.com/arhNPRC.png",
      options: [
        "A. The person's apparent weight is zero",
        "B. The person's apparent weight is equal to the person's weight",
        "C. The person's apparent weight is less than the person's weight, but is not zero",
        "D. The person's apparent weight is greater than the person's weight"
      ],
      answer: "D. The person's apparent weight is greater than the person's weight"
    },
    {
      question: "A block is sliding on an incline with negligible friction as shown in the figure above. At time t = 0 s the block is moving up the incline with a speed of 1.5 m/s. The magnitude of the acceleration of the block is a constant 1.0 m/s² down the incline. At t = 3 s, what is the direction of the block's motion and is the speed increasing or decreasing?",
      image: "https://i.imgur.com/b5GeWfM.png",
      options: [
        "A. Down the incline with decreasing speed",
        "B. Up the incline with decreasing speed",
        "C. Down the incline with increasing speed",
        "D. Up the incline with increasing speed"
      ],
      answer: "C. Down the incline with increasing speed"
    },
    {
      question: "A rock is attached to a 0.4m long string and is swung through the air so that the path of the rock follows a horizontal circle as shown in the top view figure above. The string makes a 30 degree angle with the vertical as shown in the side view figure. The rock completes one revolution per second. The speed of the rock is most nearly",
      options: ["A. 0.6 m/s", "B. 1.3 m/s", "C. 2.2 m/s", "D. 2.5 m/s"],
      answer: "B. 1.3 m/s",
      image: "https://i.imgur.com/0K04fS8.png"
    },
    {
      question: "Two blocks are on a surface with negligible friction. Block 1 slides towards block 2 and they stick together and move to the right. During the collision the speed of the center of mass of the system",
      image: "https://i.imgur.com/TMRX4ul.png",
      options: [
        "A. Increase",
        "B. Does not change",
        "C. Decreases",
        "D. The change in speed of the center of mass of the system cannot be determined."
      ],
      answer:"B. Does not change"
    },
     {
      question: "An ideal fluid is flowing through the tube shown in the figure above. Which of the following correctly ranks the speed of the fluid through the three areas shown above?",
      image: "https://i.imgur.com/AF8KcTJ.png",
      options: [
        "A. v₁ < v₃ < v₂",
        "B. v₁ = v₂ = v₃",
        "C. v₂ < (v₁ = v₃)",
        "D. v₂ < v₃ < v₁"
      ],
      answer:"D. v₂ < v₃ < v₁"
    },
    {
      question: "A pendulum consists of a sphere of mass m attached to a string with negligible mass. As the pendulum swings back and forth, which of the following statements is true?",
      image: "https://i.imgur.com/qHujzN1.png",
      options: [
        "A. The total kinetic energy of the sphere-earth system is constant",
        "B. The total energy of the sphere-earth system is constant",
        "C. The total gravitational potential energy of the sphere-earth system is constant",
        "D. All of the above"
        ],
      answer:"B. The total energy of the sphere-earth system is constant"
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

  // Show question container and hide subject chooser
  document.getElementById('question-container').style.display = 'block';
  document.getElementById('choose-subject').style.display = 'none';

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
function goHome() {
  // Hide the question container
  document.getElementById("question-container").style.display = "none";
  // Show the subject selection screen
  document.getElementById("choose-subject").style.display = "block";


  // Reset question state
  currentSubject = null;
  currentIndex = 0;
  currentProblem = null;
}

