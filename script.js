// ANIMACIONES
const sections = document.querySelectorAll("section");

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(40px)";
});

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.85;
    if(top < trigger){
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
      sec.style.transition = "all 0.8s ease";
    }
  });
});

const eventDate = new Date("December 20, 2025 22:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  if(diff <= 0){
    document.getElementById("countdown").innerHTML = "🔥 HOY ES EL DÍA 🔥";
    return;
  }

  document.getElementById("days").innerText = Math.floor(diff / (1000*60*60*24));
  document.getElementById("hours").innerText = Math.floor((diff/(1000*60*60))%24);
  document.getElementById("minutes").innerText = Math.floor((diff/(1000*60))%60);
  document.getElementById("seconds").innerText = Math.floor((diff/1000)%60);
}, 1000);
