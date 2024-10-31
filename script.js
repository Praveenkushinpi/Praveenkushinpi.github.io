document.addEventListener("DOMContentLoaded", function() {
    const bioSection = document.getElementById("bio");
    const funFact = document.createElement("p");
    funFact.textContent = " I love coding challenges!";
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
 document.getElementById("funFactButton").addEventListener("click", function() {
    const funFactDiv = document.getElementById("funFact");
    if (funFactDiv.style.display === "none") {
        funFactDiv.style.display = "block";
        funFactDiv.textContent = "Did you know? Honey never spoils!";
        // Optional: Add a fade-in effect
        funFactDiv.style.opacity = 0;
        let opacity = 0;
        const interval = setInterval(() => {
            if (opacity >= 1) {
                clearInterval(interval);
            }
            opacity += 0.1;
            funFactDiv.style.opacity = opacity;
        }, 50);
    } else {
        funFactDiv.style.display = "none";
// Array of fun facts
const funFacts = [
    "I love solving coding puzzles!",
    "I'm passionate about AI and machine learning.",
    "I enjoy learning about new technologies.",
    "I play badminton in my free time.",
    "I'm working on projects related to esports!"
];

// Function to display a random fun fact
function showFunFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    const funFactElement = document.getElementById('funFact');
    funFactElement.textContent = funFacts[randomIndex];
}

// Event listener for the button
document.getElementById('funFactButton').addEventListener('click', showFunFact);
    }
});      
 }
    });
});
