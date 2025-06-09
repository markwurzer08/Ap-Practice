//Version 1.05
const problems = {
  physics: [
 
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
      answer: "B. Does not change"
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
      answer: "D. v₂ < v₃ < v₁"
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
      answer: "B. The total energy of the sphere-earth system is constant"
    },
    {
      question: "A string with negligible mass is wrapped around the outside of a pulley which has a radius of 0.1 m. The pulley is initially at rest when a constant 60 N force is applied to the string. The angular momentum after a period of 2s is most nearly",
      image: "https://i.imgur.com/8TzQgre.png",
      options: [
        "A. 0",
        "B. 12 kg·m²/s",
        "C. 6 kg·m²/s",
        "D. Cannot be determined"
      ],
      answer: "B. 12 kg·m²/s"
    },
    {
      question: "A boat is in the middle of a lake as shown in the figure above. The boat moves 18 m in a straight line with an unknown direction, and then it moves 25 m in a straight line with an unknown direction. Which of the following cannot be the magnitude of the boat's total displacement?",
      image: "https://i.imgur.com/7DtftbU.png",
      options: [
        "A. 43 m",
        "B. 18 m",
        "C. 25 m",
        "D. 5 m"
      ],
      answer: "D. 5m"
    },
    {
      question: "A cart moves on a horizontal surface and its motion is shown in the above graph. Which of the following statements about the motion of the cart is most accurate?",
      image: "https://i.imgur.com/Z3kAaEp.png",
      options: [
        "A. There must be no horizontal forces on the graph between 0s and 2s",
        "B. There must be no horizontal forces on the cart between 2s and 4s",
        "C. There may be horizontal forces on the cart between 2s and 4s",
        "D. None of the above"
      ],
      answer: "C. There may be horizontal forces on the cart between 2s and 4s"
    },
    {
      question: "A block is sliding to the right on a surface with negligible friction with a speed of v₀ at time t₁. The block then compresses a spring and reverses direction. The block is moving to the left with the same speed of v₀ at a later time t₂. The magnitude of the impulse exerted on the block by the spring is",
      image: "https://i.imgur.com/cxApPin.png",
      options: [
        "A. 2m₀v₀",
        "B. m₀v₀",
        "C. m₀v₀/2",
        "D. 0"
      ],
      answer: "A. 2m₀v₀"
    },
    {
      question: "Three forces of magnitudes F₁, F₂, and F₃ are acting on an object of mass m as shown in the figure above. Which of the following represents the magnitude of the object's acceleration?",
      image: "https://i.imgur.com/gLNC9EV.png",
      options: [
        "A. √((F₃·sin(θ) - F₁) / m)² + ((F₃·cos(θ) - F₂) / m)²",
        "B. (F₁+F₂+F₃)/m",
        "C. √((F₃·cos(θ) - F₁) / m)² + ((F₃·sin(θ) - F₂) / m)²",
        "D. ((F₃·cos(θ) - F₁) / m)² + ((F₃·sin(θ) - F₂) / m)²"
      ],
      answer: "C. √((F₃·cos(θ) - F₁) / m)² + ((F₃·sin(θ) - F₂) / m)²"
    },
    {
      question: "A horizontal pole with a length of L and negligible mass is attached to a wall at point P where it is free to rotate. At the other end of the pole, a block of mass m is suspended by a string with negligible mass and a rope with a tension of T and negligible mass connects the pole and the wall at an angle as shown in the figure above. The magnitude of the net torque acting on the pole about point P is",
      image: "https://i.imgur.com/8eOShzG.png",
      options: [
        "A. LTsin(θ) + Lmg",
        "B. LTcos(θ) - Lmg",
        "C. LTsin(θ) - Lmg",
        "D. Tsin(θ) - mg"
      ],
      answer: "C. LTsin(θ) - Lmg"
    },
    {
      question: "Two systems consist of identical rods and identical spheres which are free to rotate about the left end of the rod. The sphere in system A is located at the center of the rod, and the sphere in system B is located at the end of the rod. If torques are applied to the systems so that both systems rotate with the same angular speed, which system will have a greater rotational kinetic energy?",
      image: "https://i.imgur.com/ok2l2yv.png",
      options: [
        "A. The systems will have the same rotational kinetic energy",
        "B. System A",
        "C. System B",
        "D. Cannot be determined"
      ],
      answer: "C. System B"
    },
    {
      question: "Two blocks are on a surface with negligible friction. A force with a magnitude F₀ is applied to the 2kg block and it accelerates at 4m/s². A force with the same magnitude of F₀ is applied to the 5kg block. If the block starts at rest, what is the speed of the 5kg block after 2 seconds?",
      image: "https://i.imgur.com/bT5N65N.png",
      options: [
        "A. 1.6 m/s",
        "B. 3.2 m/s",
        "C. 4.0 m/s",
        "D. 8.0 m/s"
      ],
      answer: "B. 3.2 m/s"
    },
    {
      question: "Two cubes are balanced on a beam which is at rest as shown in the figure above. The centers of mass of each cube are the same distance from the pivot point of the beam. Cube A has a side length of 0.5m and cube B has a side length of 1.0m. What is the ratio of the density of cube A to the density of cube B, ρA/ρB?",
      image: "https://i.imgur.com/GPNafGs.png",
      options: [
        "A. 1/8",
        "B. 4",
        "C. 8",
        "D. 2"
      ],
      answer: "C. 8"
    },
    {
      question: "Two identical blocks are sliding down inclines as shown in the figure above. The coefficient of kinetic friction is the same for both inclines. Which block experiences a friction force with a greater magnitude?",
      image: "https://i.imgur.com/IpwxeSl.png",
      options: ["A. Block A", "B. Block B", "C. The blocks experience friction forces with equal magnitude", "D. Cannot be determined"],
      answer: "B. Block B"
    },
    {
      question: "A block is sliding across a surface where the friction is not negligible. The block has an initial speed of v₀ at time t₀. The block then collides with a spring and momentarily comes to a stop at time t₁. Which of the following is true about the block spring system from time t₀ and time t₁?",
      image: "https://i.imgur.com/MsgHScI.png",
      options: ["A. The spring does positive work on the system", "B. The total energy of the system is constant", "C. The spring does negative work on the system", "D. The total energy of the system decreases"],
      answer: "D. The total energy of the system decreases"
    },
    {
      question: "A graph of the angle between a pendulum and the vertical is shown in the figure below. The frequency of the pendulum is most nearly",
      image: "https://i.imgur.com/G8EAIZ3.png",
      options: ["A. 0.25 Hz", "B. 0.38 Hz", "C. 1 Hz", "D. 2.67 Hz"],
      answer: "B. 0.38 Hz"
    },
    {
      question: "A ball is submerged and floating at rest in a liquid as shown in the figure below. The ball is attached to the bottom of the container by a string. The density of the liquid ρ₀, the density of the ball is ρ₁, and the volume of the ball is V₁. Which of the following is a correct expression for the tension in the string T?",
      image: "https://i.imgur.com/Ha99GU2.png",
      options: ["A. ρ₁V₁g + ρ₀V₁g", "B. ρ₁V₁g - ρ₀V₁g", "C. ρ₀V₁g - ρ₁V₁g", "D. ρ₀V₁g"],
      answer: "C. ρ₀V₁g - ρ₁V₁g"
    }
  ],
  precalc: [
    {
      question: "A polynomial function p is given by p(x) = -x(x-4)(x+2). What are all intervals on which p(x) ≥ 0?",
      options: ["A. [-2,4]", "B. [-2,0] ∪ [4,∞]", "C. (-∞,-4] ∪ [0,2]", "D. (-∞,-2] ∪ [0,4]"],
      answer: "D. (-∞,-2] ∪ [0,4]"
    },
    {
      question: "The figure shows the graph of a function f. The zero and extrema for f are labeled, and the point of inflection of the graph of f is labeled. Let A,B,C,D, and E represent the x-coordinates at those points. Of the following, on which interval is f increasing and the graph of f concave down?",
      image: "https://i.imgur.com/NGR4Ocd.png",
      options: ["A. The interval from A to B", "B. The interval from B to C", "C. The interval from C to D", "D. The interval from D to E"],
      answer: "A. The interval from A to B"
    },
    {
      question: "Let x and y be positive constants. Which of the following is equivalent to 2ln(x)-3ln(y)?",
      options: ["A. ln(x²/y³)", "B. ln(x²y³)", "C. ln(2x-3y)", "D. ln(2x/3y)"],
      answer: "A. ln(x²/y³)"
    },
    {
      question: "The polynomial function p is given by p(x) = (x+3)(x²-2x-15). Which of the following describes the zeros of p?",
      options: ["A. p has exactly two distinct real zeros", "B. p has exactly three distinct real zeros", "C. p has exactly one distinct real zero and no non-real zeros", "D. p has exactly one distinct real zero and two non-real zeros"],
      answer: "A. p has exactly two distinct real zeros"
    },
    {
      question: "Let f be a sinusoidal function. The graph of y = f(x) is given in the xy-plane. What is the period of f?",
      image: "https://i.imgur.com/4ym5FiZ.png",
      options: ["A. 2", "B. 3", "C. 4", "D. 6"],
      answer: "C. 4"
    },
    {
      question: "The exponential function f is defined by f(x) = abˣ, where a and b are positive constants. The table gives values of f(x) at selected values of x. Which of the following statements is true?",
      image: "https://i.imgur.com/nX3ogVh.png",
      options: ["A. f demonstrates exponential decay because a>0 and 0<b<1", "B. f demonstrates exponential decay because a>0 and b>1", "C. f demonstrates exponential growth because a>0 and 0<b<1", "D. f demonstrates exponential growth because a>0 and b>1"],
      answer: "D. f demonstrates exponential growth because a>0 and b>1"
    },
    {
      question: "The table shows values for a function g at selected values of x. Which of the following is the best fit for a model for the data?",
      image: "https://i.imgur.com/e4uX6yq.png",
      options: ["A. Linear", "B. Quadratic", "C. Exponential", "D. Logarithmic"],
      answer: "B. Quadratic"
    },
    {
      question: "The function g is given by g(x) = 7sin(2x). Which of the following is an equivalent form for g(x)?",
      options: ["A. g(x) = 14cos(x)sin(x)", "B. g(x) = (7cos(x))(7sin(x))", "C. 7cos²(x)-7sin²x", "D. g(x) = 7-14sin²x"],
      answer: "A. g(x) = 14cos(x)sin(x)"
    },
    {
      question: "The function f is given by f(x) = 3x²+2x+1. The graph of which of the following functions is the image of the graph of f after a vertical dilation of the graph of f by a factor of 2?",
      options: ["A. m(x) 12x²+4x+1", "B. k(x) = 6x²+4x+2", "C. p(x) = 3(x+2)²+2(x+2)+1", "D. 3x²+2x+3"],
      answer: "B. k(x) = 6x²+4x+2"
    },
    {
      question: "The table gives values for the function f and g at selected values of x. Functions f and g are defined for all real numbers. Let h be the function defined by h(x) = f(g(x)). What is the value of h(0)?",
      image: "https://i.imgur.com/hHkCdLV.png",
      options: ["A. -2", "B. -1", "C. 0", "D. 2"],
      answer: "A. -2"
    },
    {
      question: "Let f be a rational function that is graphed in the xy-plane. Consider x=1 and x=7. The polynomial in the numerator of f has a zero at x=1 and does not have a zero at x=7. The polynomial in the denominator of f has zeros at both x=1 and x=7. The multiplicities of the zeros at x=1 in the numerator and in the denominator are equal. Which of the following statements is true?",
      options: ["A. The graph of f has holes at both x=1 and x=7", "B. The graph of f has a hole at x=1 and a vertical asymptote at x=7", "C. The graph of f has a hole at x=1 and a vertical asymptote at x=7", "D. The graph of f has a vertical asymptote at both x=1 and x=7"],
      answer: "C. The graph of f has a hole at x=1 and a vertical asymptote at x=7"
    },
    {
      question: "The polynomial function k is given by k(x) = ax⁴-bx³+15, where a and b are nonzero real constants. Each of the zeros of k has a multiplicity 1. In the xy-plane, an x-intercept of the graph of k is (17.997,0). A zero of k is -0.478 - 0.801i. Which of the following statements must be true?",
      options: ["A. The graph of k has three x-intercepts", "B. -0.478 + 0.801i is a zero of k", "C. The equation k(x) = 0 has four real solutions", "D. The graph of k is tangent to the x-axis at x = 17.997"],
      answer: "B. -0.478 + 0.801i is a zero of k"
    },
    {
      question: "Consider the functions f and g given by f(x) = log(x-1) + log(x+3) and g(x) = log(x+9). In the xy-plane, what are all the x-coordinates of the points of intersection of the graphs of f and g.",
      options: ["A. x=3 only", "B. x=7", "C. x=-4 and x=3", "D. x=-7 and x=-4"],
      answer: "A. x=3 only"
    },
    {
      question: "What are all values of θ, for 0 ≤ θ < 2π, where 2sin²(θ) = -sin(θ)?",
      options: ["A. 0, π, π/6, 5π/6", "B. 0, π, 7π/6, and 11π/6", "C. π/2, 3π/2, π/3, and 5π/3", "D. π/2, 3π/2, 2π/3, and 4π/3"],
      answer: "B. 0, π, 7π/6, and 11π/6"
    },
    {
      question: "The figure shows the graph of the polar function r = f(θ), where f(θ) = 4cos(2θ), in the polar coordinate system for θ ≤ 0 ≤ 2π. There are five points labeled A, B, C, D, and E. If the domain of f is restricted to 0 ≤ θ ≤ π/2, the portion of the given graph that remains consists of two pieces. One of those pieces is the portion of the graph in Quadrant I from C to E.",
      image: "https://i.imgur.com/kowSAf0.png",
      options: ["A. The portion of the graph in Quadrant I from E to B", "B. The portion of the graph in Quadrant II from E to A", "C. The portion of the graph in Quadrant III from E to A", "D. The portion of the graph in Quadrant III from E to D"],
      answer: "B. The portion of the graph in Quadrant II from E to A"
    },
    {
      question: "A physical therapy center has a bicycle that patients use for exercise. The height, in inches (in), of the bicycle pedal above level ground periodically increases and decreases when used. The figure gives the position of the pedal P at a height of 12 inches above the ground at time t = 0 seconds. The pedal's 8-inch arm defines the circular motion of the pedal. If the patient pedals 1 revolution per second, which of the following could be an expression for h(t), the height, in inches, of the bicycle pedal above the level ground at time t seconds?",
      options: ["A. 8 - 12sin(t)", "B. 12 - 8sin(t)", "C. 8 - 12sin(2πt)", "D. 12 - 8sin(2πt)"],
      answer: "D. 12 - 8sin(2πt)"
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
  if (currentIndex < subjectProblems.length && currentIndex >= 0) {
    currentProblem = subjectProblems[currentIndex];
    document.getElementById("question-title").textContent = `${currentSubject === 'physics' ? 'AP Physics 1' : 'AP Precalculus'} Practice - Question ${currentIndex + 1}`;
    document.getElementById("question-text").textContent = currentProblem.question;

    // Show image if exists
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
      if (typeof option === 'string') {
        // Text-based option
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
      } else {
        // Image-based option
        button.classList.add('image-option');
        const img = document.createElement("img");
        img.src = option.url;
        img.alt = option.label;
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        button.appendChild(img);
        button.onclick = () => checkAnswer(option.label);
      }
      answerOptions.appendChild(button);
    });

    // Show/hide Prev button depending on question index
    document.getElementById("prev-button").style.display = currentIndex > 0 ? 'inline-block' : 'none';
    
    // Always show Next button unless last question
    if (currentIndex === subjectProblems.length - 1) {
      document.getElementById("next-button").style.display = 'none';
    } else {
      document.getElementById("next-button").style.display = 'inline-block';
    }

  } else {
    document.getElementById("question-container").innerHTML = "<h5>Congrats! You've completed the practice!</h5>";
  }
}

function checkAnswer(selectedOption) {
  const isCorrect = selectedOption === currentProblem.answer;
  alert(isCorrect ? "Correct!" : "Incorrect. The answer was: " + currentProblem.answer);
  document.getElementById("next-button").style.display = 'inline-block';
}

function nextQuestion() {
  currentIndex++;
  showQuestion();
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion();
  }
}

function goHome() {
  // Hide the question container and clear its content
  const questionContainer = document.getElementById("question-container");
  questionContainer.style.display = "none";
  questionContainer.innerHTML = `
    <h2 id="question-title"></h2>
    <p id="question-text"></p>
    <div id="question-image"></div>
    <div id="answer-options"></div>
    <div id="navigation-buttons" style="margin-top: 20px; display: flex; gap: 10px;">
      <button id="prev-button" class="nav-button" style="display: none;">Previous Question</button>
      <button id="next-button" class="nav-button" style="display: none;">Next Question</button>
    </div>
  `;

  // Reattach event listeners to navigation buttons
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  if (prevButton && nextButton) {
    prevButton.onclick = prevQuestion;
    nextButton.onclick = nextQuestion;
    console.log("Event listeners reattached to prev-button and next-button");
  } else {
    console.error("Failed to find prev-button or next-button after goHome reset");
  }

  // Show the subject selection screen
  document.getElementById("choose-subject").style.display = "block";

  // Reset question state
  currentSubject = null;
  currentIndex = 0;
  currentProblem = null;
}
