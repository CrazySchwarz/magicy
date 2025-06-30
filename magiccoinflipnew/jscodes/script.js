window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loadingsitescreen");
  const logo = document.querySelector(".loadingscreenlogo");
  const text = document.querySelector(".loading-text");

  const displayTime = Math.floor(Math.random() * 100) + 150;

  logo.style.opacity = "1";
  text.style.opacity = "1";

  const loadingStates = ["", "", ""];
  let i = 0;
  const interval = setInterval(() => {
    text.textContent = loadingStates[i % loadingStates.length];
    i++;
  }, 750);

  setTimeout(() => {
    // önce küçült
    logo.style.transition = "transform 0.15s ease";
    logo.style.transform = "scale(0.85)";

    setTimeout(() => {
      // sonra büyüt ve yok et
      logo.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";
      logo.style.transform = "scale(1.5)";
      logo.style.opacity = "0";

      loader.style.transition = "opacity 0.6s ease";
      loader.style.opacity = "0";

      clearInterval(interval);

      setTimeout(() => {
        loader.style.display = "none";
      }, 700);
    }, 150);
  }, displayTime);
});

function logDistanceFromTop(selector) {
  const el = document.querySelector(selector);
  if (!el) {
    console.log(`${selector} bulunamadı.`);
    return;
  }
  const distance = el.getBoundingClientRect().top + window.scrollY;
  console.log(`${selector} ekranın üstünden uzaklığı: ${distance}px`);
}

logDistanceFromTop('.promotionscontainer');
logDistanceFromTop('.welcomestuffmain');
logDistanceFromTop('.housegamestextcontainer');
