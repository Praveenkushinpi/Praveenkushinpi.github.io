document.addEventListener("DOMContentLoaded", function() {
    const bioSection = document.getElementById("bio");
    const funFact = document.createElement("p");
    funFact.textContent = 
" I love solving coding puzzles!",
 "I'm passionate about AI and machine learning ",
"I enjoy learning about new technologies",
 "I play badminton in my free time ",
"I'm working on projects related to esports!";
    funFact.style.display = "none"; // Hide initially
    bioSection.appendChild(funFact);

    const button = document.createElement("button");
    button.textContent = "Show Fun Fact";
    bioSection.appendChild(button);

    button.addEventListener("click", function() {
        if (funFact.style.display === "none") {
            funFact.style.display = "block";
            button.textContent = "Close Fun Fact"; // Change text to Close
        } else {
            funFact.style.display = "none";
            button.textContent = "Show Fun Fact"; // Change text back to Show
];
});      
 }
    });
});
