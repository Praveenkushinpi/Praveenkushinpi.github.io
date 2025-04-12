fetch('https://api.github.com/users/Praveenkushinpi')
.then(response => response.json())
.then(data => {
  const githubStatsContainer = document.getElementById('github-stats');
  githubStatsContainer.innerHTML = `
    <div class="github-stat"><span class="number">${data.public_repos}</span><span class="label">Repos</span></div>
    <div class="github-stat"><span class="number">${data.followers}</span><span class="label">Followers</span></div>
    <div class="github-stat"><span class="number">${data.following}</span><span class="label">Following</span></div>
  `;
})
.catch(error => console.error('Error fetching GitHub stats:', error));
 
const audio = document.getElementById("myAudio");
const btn = document.getElementById("musicToggle");

let isPlaying = false;

function toggleMusic() {
if (isPlaying) {
audio.pause();
audio.currentTime = 0;
btn.textContent = "Music OFF";
btn.classList.remove("on");
} else {
audio.play();
btn.textContent = "Music ON";
btn.classList.add("on");
}
isPlaying = !isPlaying;
}