const texts = [
 "WELCOME TO 666K",
 "OFFICIAL 666K",
 "مرحباً بك في 666K",
 "JOIN MY DISCORD"
];

let i = 0;

function typeLoop(){
  document.getElementById("typing").innerText = texts[i];
  i = (i + 1) % texts.length;
}

setInterval(typeLoop, 2000);
typeLoop();

function openDiscord(){
  window.open("https://discord.gg/Xx2DcRqbR7","_blank");
}