document.addEventListener("DOMContentLoaded", function() {
    const bioSection = document.getElementById("bio");
    const funFact = document.createElement("p");
    funFact.textContent = "Fun Fact: I love coding challenges!";
    funFact.style.display = "none"; // Hide initially
    bioSection.appendChild(funFact);

    const button = document.createElement("button");
    button.textContent = "Show Fun Fact";
    bioSection.appendChild(button);

    button.addEventListener("click", function() {
        funFact.style.display = funFact.style.display === "none" ? "block" : "none";
    });
});
