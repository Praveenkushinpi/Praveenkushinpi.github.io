document.addEventListener("DOMContentLoaded", function()document.addEventListener("DOMContentLoaded", function() {
    const funFacts = [
        "I love solving coding puzzles!",
        "I'm passionate about AI and machine learning.",
        "I enjoy learning about new technologies.",
        "I play badminton in my free time.",
        "I'm working on projects related to esports!"
    ];

    const funFactButton = document.getElementById("funFactButton");
    const funFactDisplay = document.getElementById("funFact");

    funFactButton.addEventListener("click", function() {
        if (funFactDisplay.textContent === "") {
            const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
            funFactDisplay.textContent = randomFact;
            funFactButton.textContent = "Close Fun Fact";
        } else {
            funFactDisplay.textContent = "";
            funFactButton.textContent = "Show a Fun Fact";
        }
    });
});
