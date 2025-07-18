//Version 1.10
const problems = {
  physics: [
   //1
    {
      question: "A tube contains a volume of water and a volume of mercury as shown in the figure above. Both ends of the tube are open. Points A and B are at the same level and points C and D are at the same level. The distance between points A and B and the surface of the liquids are shown. Which of the following correctly relates the gauge pressures at the points shown? The density of the water is 1,000 kg/m³ and the density of the mercury is 13,600 kg/m³.",
      image: "https://i.imgur.com/J2e6UnT.png",
      options: [
        "A. Pₐ > Pᵦ and P꜀ > P𝒟" ,
        "B. Pₐ > Pᵦ and P꜀ = P𝒟" ,
        "C. Pₐ = Pᵦ and P꜀ = P𝒟" ,
       "D. Pₐ = Pᵦ and P꜀ > P𝒟" 
      ],
      answer: "B. Pₐ > Pᵦ and P꜀ = P𝒟"
    },
    //2
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
    //3
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
    //4
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
    //5
    {
      question: "A rock is attached to a 0.4m long string and is swung through the air so that the path of the rock follows a horizontal circle as shown in the top view figure above. The string makes a 30 degree angle with the vertical as shown in the side view figure. The rock completes one revolution per second. The speed of the rock is most nearly",
      options: ["A. 0.6 m/s", "B. 1.3 m/s", "C. 2.2 m/s", "D. 2.5 m/s"],
      answer: "B. 1.3 m/s",
      image: "https://i.imgur.com/0K04fS8.png"
    },
    //6
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
    //7
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
    //8
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
    //9
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
    //10
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
    //11
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
    //12
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
    //13
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
    //14
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
    //15
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
    //16
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
    //17
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
    //18
    {
      question: "Two identical blocks are sliding down inclines as shown in the figure above. The coefficient of kinetic friction is the same for both inclines. Which block experiences a friction force with a greater magnitude?",
      image: "https://i.imgur.com/IpwxeSl.png",
      options: ["A. Block A", "B. Block B", "C. The blocks experience friction forces with equal magnitude", "D. Cannot be determined"],
      answer: "B. Block B"
    },
    //19
    {
      question: "A block is sliding across a surface where the friction is not negligible. The block has an initial speed of v₀ at time t₀. The block then collides with a spring and momentarily comes to a stop at time t₁. Which of the following is true about the block spring system from time t₀ to t₁?",
      image: "https://i.imgur.com/MsgHScI.png",
      options: ["A. The spring does positive work on the system", "B. The total energy of the system is constant", "C. The spring does negative work on the system", "D. The total energy of the system decreases"],
      answer: "D. The total energy of the system decreases"
    },
    //20
    {
      question: "A graph of the angle between a pendulum and the vertical is shown in the figure below. The frequency of the pendulum is most nearly",
      image: "https://i.imgur.com/G8EAIZ3.png",
      options: ["A. 0.25 Hz", "B. 0.38 Hz", "C. 1 Hz", "D. 2.67 Hz"],
      answer: "B. 0.38 Hz"
    },
    //21
    {
      question: "A ball is submerged and floating at rest in a liquid as shown in the figure below. The ball is attached to the bottom of the container by a string. The density of the liquid ρ₀, the density of the ball is ρ₁, and the volume of the ball is V₁. Which of the following is a correct expression for the tension in the string T?",
      image: "https://i.imgur.com/Ha99GU2.png",
      options: ["A. ρ₁V₁g + ρ₀V₁g", "B. ρ₁V₁g - ρ₀V₁g", "C. ρ₀V₁g - ρ₁V₁g", "D. ρ₀V₁g"],
      answer: "C. ρ₀V₁g - ρ₁V₁g"
    },
    //22
    {
      question:"The figure shows a uniform meterstick that is set on a pivot at its center. A force of magnitude F is exerted on the meterstick. At which of the labeled positions must an upward force of magnitude 2F be exerted on the meterstick to keep the meterstick in rotational equilibrium?",
      image:"https://i.imgur.com/ZDb4e7R.png",
      options:["A. A","B. B","C. C","D. D"],
      answer:"B. B"
    },
    //23
    {
      question:"A solid prism in the shape of a right triangle as shown in Figure 1, can be placed in any of the three orientations shown in Figure 2. The prism is placed in a large tank containing a liquid and the prism sinks to the bottom of the tank. Fₓ is the magnitude of the buoyant force exerted on the prism by the liquid in the tank when the prism is in Orientation X. Fᵧ and Fz are the buoyant forces for orientations Y and Z. Which of the following correctly ranks the magnitude of the three buoyant forces?",
      image:"https://i.imgur.com/3zbHQLa.png",
      options:["A. Fᵧ < Fₓ < Fz","B. Fz < Fₓ < Fᵧ","C. (Fᵧ=Fₓ) < Fz","D. Fᵧ=Fₓ=Fz"],
      answer:"D. Fᵧ=Fₓ=Fz"
    },
    //24
    {
      question:"The velocity of an object as a function of time is shown in the graph. Which of the following is most nearly the average acceleration of the object?",
      image:"https://i.imgur.com/r6m3BIW.png",
      options:["A. 1.5 m/s²","B. 3 m/s²","C. 9 m/s²","D. 24 m/s²"],
      answer:"A. 1.5 m/s²"
    },
    //25
    {
      question:"Ball X is released from rest from a height H at time t = 0. At the same time, an identical ball, Ball Y is thrown straight up from the ground, as shown in the figure. At time t = t₁, Ball X is just above the ground and Ball Y is momentarily at rest at height H. Which of the following is a correct statement regarding the amount of mechanical energy in the system consisting of only one ball at time t = t₁?",
      image:"https://i.imgur.com/wFcXZO7.png",
      options:["A. The mechanical energy of Ball X and the mechanical energy of Ball Y are equal at t = t₁","B. The mechanical energy of Ball Y is greater than the mechanical energy of Ball X at time t = t₁","C. The mechanical energy of Ball X is greater than the mechanical energy of Ball Y at time t = t₁","D. The mechanical energy of the two balls cannot be compared without knowing the initial speed of the two balls"],
      answer:"B. The mechanical energy of Ball Y is greater than the mechanical energy of Ball X at time t = t₁"
    },
    //26
    {
      question:"Block 1 is attached to a stretched spring which is also attached to a wall as shown in the figure. Block 1 is released from rest from position +x and it oscillates in simple harmonic motion between positions +x and -x with a maximum kinetic energy K₁. Block 1 is replaced with Block 2 of mass 2m. Block 2 is also released from rest from position +x and Block 2 oscillates in simple harmonic motion between positions +x and -x with a maximum kinetic energy of K₂. Which of the following correctly compares K₁ and K₂?",
      image:"https://i.imgur.com/iy0iaij.png",
      options:["A. K₂ = 2K₁","B. K₂ = K₁","C. K₂ = (1/√2)(K₁)","D. K₂ = (1/2)(K₁)"],
      answer:"B. K₂ = K₁"
    },
    //27
    { 
      question:"A uniform disk, Disk A, of mass m and radius R rotates about an axis through the disk's geometric center as shown in Figure 1. The rotational inertia for the disk in this configuration is I = 1/2mR². An identical disk, disk B, rotates about an axis that passes through the edge of the disk, a radial distance R from the center of the disk as shown in Figure 2. The same torque is exerted on both disks, and disks A and B experience angular acceleration αₐ and αᵦ, respectively. Which of the following is a correct epxression for the ratio of the two angular accelerations, αᵦ/αₐ?",
      image:"https://i.imgur.com/5SWZnk4.png",
      options:["A. 1/3","B. 1/2","C. 2","D. 3"],
      answer:"A. 1/3"
    },
    //28
    {
      question:"An empty container with volume 0.02 m³ is placed on a scale, which then reads 10 N. An unknown liquid is then poured into the container until the container is completely full. The new reading on the scale in 170 N. Which of the following is most nearly the density ρ of the unknown liquid?",
      options:["A. ρ = 800 kg/m³","B. ρ = 850 kg/m³","C. ρ = 8000 kg/m³","D. ρ = 8500 kg/m³"],
      answer:"A. ρ = 800 kg/m³"
    },
    //29
    {
      question:"A child kicks a ball with an initial velocity of 8.5 m/s at an angle of 35° with the horizontal, as shown. The ball has an initial vertical velocity of 4.9 m/s. The horizontal component of the ball's initial velocity is",
      image:"https://i.imgur.com/L1etTSM.png",
      options:["A. 3.6 m/s","B. 4.9 m/s","C. 7.0 m/s","D. 13 m/s"],
      answer:"C. 7.0 m/s"
    },
    //30
    {
      question:"A motorboat, which has a speed of 5.0 m/s in still water, is headed east as it crosses a river flowing south at 3.3 m/s. What is the magnitude of the boat's resultant velocity with respect to the starting point?",
      image:"https://i.imgur.com/idOD7po.png",
      options:["A. 3.3 m/s","B. 5.0 m/s","C. 6.0 m/s","D. 8.3 m/s"],
      answer:"C. 6.0 m/s"
    },
    //31
    {
      question:"Mark holds a 5 kg mirror against the wall 1.5 meters above the ground for 20 seconds while Bob nails it in place. What is Mark's power output during that time period?",
      options:["A. 2.45 Watts","B. 3.68 Watts","C. 66.7 Watts","D. None of the above"],
      answer:"D. None of the above"
    },
    //32
    {
      question:"If the block below is in equilibrium and the angle between the unknown force and the force of magnitude 6.93 N is 150°, what is the magnitude of the unknown force?",
      image:"https://i.imgur.com/pEE2qYL.png",
      options:["A. 7 N","B. 8 N","C. 9 N","D. 10 N"],
      answer:"B. 8 N"
    },
    //33
    {
      question:"A 1kg box accelerates from rest in a straight line across a frictionless surface for 20 seconds as depicted in the force vs time graph below. What is the time it takes for the object to reach 5 m/s?",
      image:"https://i.imgur.com/hYIUjuJ.png",
      options:["A. 5.5s","B. 6s","c. 7s","D. 7.5s"],
      answer:"D. 7.5s"
    },
    //34
    {
      question:"The diagram below shows a 1.0 x 10⁵ newton truck at rest on a hill that makes an angle of 8.0° with the horizontal. What is the component of the truck's weight parallel to the hill?",
      image:"https://i.imgur.com/CcgtgWh.png",
      options:["A. 1.4 x 10⁴ newtons","B. 1.4 x 10³ newtons","C. 1.0 x 10⁴ newtons","D. 9.9 x 10⁴ newtons"],
      answer:"A. 1.4 x 10⁴ newtons"
    },
      //35
    {
      question:"A ball attached to a string is moved at a constant speed in a horizontal circular path. A target is located near the path of the ball as shown in the diagram. At which point along the ball's path should the string be released if the ball is to hit the target?",
      image:"https://i.imgur.com/a3XK20o.png",
      options:["A. A","B. B","C. C","D. D"],
      answer:"B. B"
    },
    //36
    {
      question:"A ball is dropped from the roof of a tall building and takes 3.1 seconds to hit the ground. How tall is the building? (Neglect Air Resistance)",
      options:["A. 47 m","B. 94 m","C. 15 m","D. 30 m"],
      answer:"A. 47 m"
    } 
  ],
  precalc: [
    //1
    {
      question: "A polynomial function p is given by p(x) = -x(x-4)(x+2). What are all intervals on which p(x) ≥ 0?",
      options: ["A. [-2,4]", "B. [-2,0] ∪ [4,∞]", "C. (-∞,-4] ∪ [0,2]", "D. (-∞,-2] ∪ [0,4]"],
      answer: "D. (-∞,-2] ∪ [0,4]"
    },
    //2
    {
      question: "The figure shows the graph of a function f. The zero and extrema for f are labeled, and the point of inflection of the graph of f is labeled. Let A,B,C,D, and E represent the x-coordinates at those points. Of the following, on which interval is f increasing and the graph of f concave down?",
      image: "https://i.imgur.com/NGR4Ocd.png",
      options: ["A. The interval from A to B", "B. The interval from B to C", "C. The interval from C to D", "D. The interval from D to E"],
      answer: "A. The interval from A to B"
    },
    //3
    {
      question: "Let x and y be positive constants. Which of the following is equivalent to 2ln(x)-3ln(y)?",
      options: ["A. ln(x²/y³)", "B. ln(x²y³)", "C. ln(2x-3y)", "D. ln(2x/3y)"],
      answer: "A. ln(x²/y³)"
    },
    //4
    {
      question: "The polynomial function p is given by p(x) = (x+3)(x²-2x-15). Which of the following describes the zeros of p?",
      options: ["A. p has exactly two distinct real zeros", "B. p has exactly three distinct real zeros", "C. p has exactly one distinct real zero and no non-real zeros", "D. p has exactly one distinct real zero and two non-real zeros"],
      answer: "A. p has exactly two distinct real zeros"
    },
    //5
    {
      question: "Let f be a sinusoidal function. The graph of y = f(x) is given in the xy-plane. What is the period of f?",
      image: "https://i.imgur.com/4ym5FiZ.png",
      options: ["A. 2", "B. 3", "C. 4", "D. 6"],
      answer: "C. 4"
    },
    //6
    {
      question: "The exponential function f is defined by f(x) = abˣ, where a and b are positive constants. The table gives values of f(x) at selected values of x. Which of the following statements is true?",
      image: "https://i.imgur.com/nX3ogVh.png",
      options: ["A. f demonstrates exponential decay because a>0 and 0<b<1", "B. f demonstrates exponential decay because a>0 and b>1", "C. f demonstrates exponential growth because a>0 and 0<b<1", "D. f demonstrates exponential growth because a>0 and b>1"],
      answer: "D. f demonstrates exponential growth because a>0 and b>1"
    },
    //7
    {
      question: "The table shows values for a function g at selected values of x. Which of the following is the best fit for a model for the data?",
      image: "https://i.imgur.com/e4uX6yq.png",
      options: ["A. Linear", "B. Quadratic", "C. Exponential", "D. Logarithmic"],
      answer: "B. Quadratic"
    },
    //8
    {
      question: "The function g is given by g(x) = 7sin(2x). Which of the following is an equivalent form for g(x)?",
      options: ["A. g(x) = 14cos(x)sin(x)", "B. g(x) = (7cos(x))(7sin(x))", "C. 7cos²(x)-7sin²x", "D. g(x) = 7-14sin²x"],
      answer: "A. g(x) = 14cos(x)sin(x)"
    },
    //9
    {
      question: "The function f is given by f(x) = 3x²+2x+1. The graph of which of the following functions is the image of the graph of f after a vertical dilation of the graph of f by a factor of 2?",
      options: ["A. m(x) 12x²+4x+1", "B. k(x) = 6x²+4x+2", "C. p(x) = 3(x+2)²+2(x+2)+1", "D. 3x²+2x+3"],
      answer: "B. k(x) = 6x²+4x+2"
    },
    //10
    {
      question: "The table gives values for the function f and g at selected values of x. Functions f and g are defined for all real numbers. Let h be the function defined by h(x) = f(g(x)). What is the value of h(0)?",
      image: "https://i.imgur.com/hHkCdLV.png",
      options: ["A. -2", "B. -1", "C. 0", "D. 2"],
      answer: "A. -2"
    },
    //11
    {
      question: "Let f be a rational function that is graphed in the xy-plane. Consider x=1 and x=7. The polynomial in the numerator of f has a zero at x=1 and does not have a zero at x=7. The polynomial in the denominator of f has zeros at both x=1 and x=7. The multiplicities of the zeros at x=1 in the numerator and in the denominator are equal. Which of the following statements is true?",
      options: ["A. The graph of f has holes at both x=1 and x=7", "B. The graph of f has a hole at x=1 and a vertical asymptote at x=7", "C. The graph of f has a hole at x=1 and a vertical asymptote at x=7", "D. The graph of f has a vertical asymptote at both x=1 and x=7"],
      answer: "C. The graph of f has a hole at x=1 and a vertical asymptote at x=7"
    },
    //12
    {
      question: "The polynomial function k is given by k(x) = ax⁴-bx³+15, where a and b are nonzero real constants. Each of the zeros of k has a multiplicity 1. In the xy-plane, an x-intercept of the graph of k is (17.997,0). A zero of k is -0.478 - 0.801i. Which of the following statements must be true?",
      options: ["A. The graph of k has three x-intercepts", "B. -0.478 + 0.801i is a zero of k", "C. The equation k(x) = 0 has four real solutions", "D. The graph of k is tangent to the x-axis at x = 17.997"],
      answer: "B. -0.478 + 0.801i is a zero of k"
    },
    //13
    {
      question: "Consider the functions f and g given by f(x) = log(x-1) + log(x+3) and g(x) = log(x+9). In the xy-plane, what are all the x-coordinates of the points of intersection of the graphs of f and g.",
      options: ["A. x=3 only", "B. x=7", "C. x=-4 and x=3", "D. x=-7 and x=-4"],
      answer: "A. x=3 only"
    },
    //14
    {
      question: "What are all values of θ, for 0 ≤ θ < 2π, where 2sin²(θ) = -sin(θ)?",
      options: ["A. 0, π, π/6, 5π/6", "B. 0, π, 7π/6, and 11π/6", "C. π/2, 3π/2, π/3, and 5π/3", "D. π/2, 3π/2, 2π/3, and 4π/3"],
      answer: "B. 0, π, 7π/6, and 11π/6"
    },
    //15
    {
      question: "The figure shows the graph of the polar function r = f(θ), where f(θ) = 4cos(2θ), in the polar coordinate system for θ ≤ 0 ≤ 2π. There are five points labeled A, B, C, D, and E. If the domain of f is restricted to 0 ≤ θ ≤ π/2, the portion of the given graph that remains consists of two pieces. One of those pieces is the portion of the graph in Quadrant I from C to E.",
      image: "https://i.imgur.com/kowSAf0.png",
      options: ["A. The portion of the graph in Quadrant I from E to B", "B. The portion of the graph in Quadrant II from E to A", "C. The portion of the graph in Quadrant III from E to A", "D. The portion of the graph in Quadrant III from E to D"],
      answer: "B. The portion of the graph in Quadrant II from E to A"
    },
    //16
    {
      question: "A physical therapy center has a bicycle that patients use for exercise. The height, in inches (in), of the bicycle pedal above level ground periodically increases and decreases when used. The figure gives the position of the pedal P at a height of 12 inches above the ground at time t = 0 seconds. The pedal's 8-inch arm defines the circular motion of the pedal. If the patient pedals 1 revolution per second, which of the following could be an expression for h(t), the height, in inches, of the bicycle pedal above the level ground at time t seconds?",
      options: ["A. 8 - 12sin(t)", "B. 12 - 8sin(t)", "C. 8 - 12sin(2πt)", "D. 12 - 8sin(2πt)"],
      answer: "D. 12 - 8sin(2πt)"
    },
    //17
    {
      question:"Consider the functions g and h given by g(x) = 4ˣ and h(x) = 16ˣ⁺². In the xy-plane, what is the x-coordiante of the point of intersection of the graphs of g and h?",
      options:["A. -4","B. -2","C. 0","D. 2"],
      answer:"A. -4"
    },
    //18
    {
      question:"The function f is given by f(x) = log₂(x). What is the input value in the domain of f yields an output value of 4?",
      options:["A. 32","B. 16","C. 2","D. 0.5"],
      answer:"B. 16"
    },
    //19
    {
      question:"The function k is given by k(θ) = 2sin(θ). What are all values of θ, for 0 ≤ θ < 2π, where k(θ) = -1?",
      options:["A. θ = π/6 and θ = 5π/6","B. θ = π/3 and θ = 5π/3","C. θ = 2π/3 and θ = 4π/3","D. θ = 7π/6 and θ = 11π/6"],
      answer:"D. θ = 7π/6 and θ = 11π/6"
    },
    //20
    {
     question:"The function f(x) = 2sin(π/3x-π/2)+1 models the height (in meters) of a point on a Ferris wheel over time x (in seconds). What are the amplitude, period, phaseshift, and vertical shift of the function?",
     image:"https://i.imgur.com/FkJ6vBj.png",
     options:["A. Amplitude- 2, Period- 3, Phase Shift- 1/3, Vertical Shift- +1","B. Amplitude- 1, Period- 6, Phase Shift- π/3, Vertical Shift- +2","C. Amplitude- 2, Period- 6, Phase Shift- 1, Vertical Shift- +1","D. Amplitude- 2, Period- 3, Phase Shift- 1, Vertical Shift- +1"],
     answer:"D. Amplitude- 2, Period- 3, Phase Shift- 1, Vertical Shift- +1"
    },
    //21
    {
      question:"What is the domain of the function f(g(x))?",
      image:"https://i.imgur.com/jzI5KUt.png",
      options:["A. (-∞,1) ∪ (1,1/2]","B. (-∞,1) ∪ (1,3]","C. (-∞,1) ∪ (1,∞]","D. (-∞,1/2]"],
      answer:"A. (-∞,1) ∪ (1,1/2]",
    },
    //22
    {
      question:"What is the inverse of the function below?",
      image:"https://i.imgur.com/ZmkQJ8J.png",
      options:["A. g⁻¹(x) = ˣ⁻¹⁄₂ₓ₋₁","B. g⁻¹(x) = ˣ⁺¹⁄ₓ₋₂","C. g⁻¹(x) = ˣ⁺¹⁄₂₋ₓ","D. g⁻¹(x) = ˣ⁻¹⁄ₓ₊₂"],
      answer:"C. g⁻¹(x) = ˣ⁺¹⁄₂₋ₓ"
    },
    //23
    {
      question:"Which of the following equations best represents the function f(x)?",
      image:"https://i.imgur.com/4GIU99D.png",
      options:["A. f(x) = 3cos(π/3x)+2","B. f(x) = 3sin(π/3x)+2","C. f(x) = 3sin(π/6x)+2","D. f(x) = 3cos(π/6x)+2"],
      answer:"B. f(x) = 3sin(π/3x)+2"
    },
    //24
    {
      question:"Which of the following is equivalent to the expression 2sin(π/14)cos(π/14)?",
      options:["A. sin(π/28)","B. sin(π/7)cos(π/7)","C. sin(π/7)","D. cos(π/7)"],
      answer:"C. sin(π/7)"
    },
    //25
    {
      question:"What is the equation for the graph below?",
      image:"https://i.imgur.com/XBpoc3p.png",
      options:["A. r = cos(2θ)","B. r = sin(4θ)","C. r = cos(4θ)","D. r = sin(2θ)"],
      answer:"D. r = sin(2θ)"
    },
    //26
    {
      question:"What is the horizontal asymptote of the function below?",
      image:"https://i.imgur.com/HHl87Qd.png",
      options:["A. y = -1","B. y = -3","C. y = 0","D. x = -3"],
      answer:"B. y = -3"
    },
    //27
    {
      question:"Solve: tan(x) = √3 for 0 ≤ x < 2π",
      options:["A. π/6, 5π/6","D. 2π/3, 5π/3","C. π/3, 2π/3","D. π/3, 4π/3"],
      answer:"D. π/3, 4π/3"
    },
    //28
    {
      question:"Which function has an inverse that is also a function",
      options:["A. f(x) = x²","B. f(x) = |x|","C. f(x) = x³","D. f(x) = sin(x) -π ≤ x ≤ π"],
      answer:"C. f(x) = x³"
    },
    //29
    {
      question:"What is the domain of the function below?",
      image:"https://i.imgur.com/623o5fc.png",
      options:["A. (-2,2)","B. (-∞,-2) ∪ (2, ∞)","C. (-2,2)","D. (0,∞)"],
      answer:"B. (-∞, -2) ∪ (2, ∞)"
    },
    //30
    {
      question:"The function f(x) = asin(bx + c) + d has a period of 3π/2. What is the value of b?",
      options:["A. 4/3","B. 4π/3","C. 2/3","D. 2π/3"],
      answer:"A. 4/3"
    },
    //31
    {
      question:"Which of the following describes the graph of the function below?",
      image:"https://i.imgur.com/k6MIUha.png",
      options:["A. A liner function with a hole at x = -1","B. A rational function with a vertical asymptote at x = -1","C. A quadratic with no asymptotes","D. An exponetial curve with a hole at x = -1"],
      answer:"A. A liner function with a hole at x = -1"
    },
    //32
    {
      question:"The graph of a function f(x) is shown below. It is defined on the interval [-4,4]. Which of the following best describes the range of the function f(x)?",
      image:"https://i.imgur.com/RTbOzmT.png",
      options:["A. (-2,2]","B. (-4,2]","C. [-4,4]","D. [-2,2]"],
      answer:"D. [-2,2]"
    },
    //33
    {
      question:"Solve the inequality below:",
      image:"https://i.imgur.com/xSlBE6J.png",
      options:["A. [-8,-4] ∪ [4, ∞)","B. (-∞,-8) ∪ (-4,4)","C. [-8,-4) ∪ [4, ∞)","D. (-∞,-8] ∪ (-4,4]"],
      answer:"C. [-8,-4) ∪ [4, ∞)"
    },
    //34
    {
      question:"Simplify the expression below into a single log₇:",
      image:"https://i.imgur.com/M8p8u9l.png",
      options:["A. log₇(z⁶√yx)","B. log₇(x⁶/zy⁴)","C. log₇(z⁴x⁴/y²⁴)","D. log₇(yz⁶√x)"],
      answer:"C. log₇(z⁴x⁴/y²⁴)"
    },
    //35
    {
      question:"Below is the graph of f(x), an exponential function. Which of the following best represents the graph of f(x)?",
      image:"https://i.imgur.com/uZ7PUSd.png",
      options:["A. y = -2(2ˣ⁺²)-1","B. y = -2(2ˣ⁺¹)+1","C. y = -2(2ˣ⁻¹)+1","D. -2(2ˣ⁻²)+1"],
      answer:"C. y = -2(2ˣ⁻¹)+1"
    },
    //36
    {
      question:"What is the degree of the function based on the table of values?",
      image:"https://i.imgur.com/FIoZEH7.png",
      options:["A. 2","B. 3","C. 4","D. 5"],
      answer:"B. 3"
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
  if (questionContainer) {
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
  } else {
    console.error("question-container not found");
  }

  // Reattach event listeners to navigation buttons
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  if (prevButton && nextButton) {
    prevButton.addEventListener("click", prevQuestion);
    nextButton.addEventListener("click", nextQuestion);
    console.log("Event listeners attached to prev-button and next-button");
  } else {
    console.error("Failed to find prev-button or next-button");
  }

  // Show the subject selection screen
  const chooseSubject = document.getElementById("choose-subject");
  if (chooseSubject) {
    chooseSubject.style.display = "block";
  } else {
    console.error("choose-subject not found");
  }

  // Reset question state
  currentSubject = null;
  currentIndex = 0;
  currentProblem = null;
}

;
