// Define the problems for AP Physics 1 and AP Precalculus
const problems = {
  physics: [
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
    },
    {
      question: "A string with negligible mass is wrapped around the outside of a pulley whcih has a radius of 0.1 m. The pulley is initially at rest when a constant 60 N force is applied to the string. The angular momentum after a period of 2s is most nearly",
      image:"https://i.imgur.com/8TzQgre.png",
      options: [
        "A. 0",
        "B. 12 kg·m²/s",
        "C. 6 kg·m²/s",
        "D. Cannot be determined"
        ],
      answer:"B. 12 kgm^2/s"
    },
    {
      question:"A boat is in the middle of a lake as shown in the figure above. The boat moves 18 m in a straight line with an unknown direction, and then it moves 25 m in a straight line with an unknown direction. Which of the following cannot be the magnitude of the boat's total displacement?",
      image:"https://i.imgur.com/7DtftbU.png",
      options: [
        "A. 43 m",
        "B. 18 m",
        "C. 25 m",
        "D. 5 m"
        ],
      answer:"D. 5m"
    },
    {
      question:"A cart moves on a horizontal surface and its motion is shown in the above graph. Which of the following statements about the motion of the cart is most accurate?",
      image: "https://i.imgur.com/Z3kAaEp.png",
      options:[
        "A. There must be no horizontal forces on the graph between 0s and 2s",
        "B. There must be no horizontal forces on the cart between 2s and 4s",
        "C. There may be horizontal forces on the cart between 2s and 4s",
        "D. None of the above"
        ],
      answer: "C. There may be horizontal forces on the cart between 2s and 4s"
    },
    {
      question: "Two blocks are connected by a cable that is wrapped around a pulley as shown in the figure above. Block B has a greater mass than block A so the blocks accelerate and the pulley experiences an angular acceleration (the cable turns the pulley without slipping). If the diameter of the pulley is 0.2m and the angular acceleration of the pulley is 15 rad/s², the magnitutde of the acceleration of the blocks is most nearly",
      image:"https://i.imgur.com/Kodj9lB.png",
      options: [
        "A. 0.75 m/s²",
        "B. 150 m/s²",
        "C. 1.5 m/s²",
        "D. 3.0 m/s²"
        ],
      answer: "C. 1.5 m/s²"
    },
    {
      question: "A block is sliding to the right on a surface with negligible friction with a speed of v₀ at time t₁. The block then compresses a spring and reverses direction. The block is moving to the left with the same speed of v₀ at a later time t₂. The magnitude of the impulse exerted on the block by the spring is",
      image:"https://i.imgur.com/cxApPin.png",
      options:[
        "A. 2m₀v₀",
        "B. m₀v₀",
        "C. m₀v₀/2",
        "D. 0"
        ],
      answer: "A. 2m₀v₀"
    },
    {
      question: "Three forces of magnitudes F₁, F₂, and F₃ are acting on an object of mass m as shown in the figure above. Which of the following represents the magnitude of the object's acceleration?",
      image:"https://i.imgur.com/gLNC9EV.png",
      options:[
        "A. √((F₃·sin(θ) - F₁) / m)² + ((F₃·cos(θ) - F₂) / m)²",
        "B. (F₁+F₂+F₃)/m",
        "C. √((F₃·cos(θ) - F₁) / m)² + ((F₃·sin(θ) - F₂) / m)²",
        "D. ((F₃·cos(θ) - F₁) / m)² + ((F₃·sin(θ) - F₂) / m)²"
        ],
      answer:"C. √((F₃·cos(θ) - F₁) / m)² + ((F₃·sin(θ) - F₂) / m)²"
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

