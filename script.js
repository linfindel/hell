document.body.addEventListener("click", () => {
  var intervalI = 7;

  setInterval(() => {
    if (intervalI > 0) {
      setInterval(createRaindrop, 100);

      intervalI--;
    }
  }, 2000);

  var i = 1;

  const transparencyInterval = setInterval(() => {
    if (i > 0) {
      document.getElementById("style").innerText = `
        .raindrop {
          background-color: rgba(0, 0, 255, ${i});
        }
      `;
    
      i = i - 0.1;
    }
  }, 5000);

  document.getElementById("click").style.opacity = "0";
    
  setTimeout(() => {
    document.getElementById("click").remove();
  }, 250);
    
  document.getElementById("audio").play();
});

const container = document.querySelector('.container');

function createRaindrop() {
  const raindrop = document.createElement('div');
  raindrop.classList.add('raindrop');

  const startPos = Math.random() * window.innerWidth;
  raindrop.style.left = startPos + 'px';

  container.appendChild(raindrop);

  setTimeout(() => {
    raindrop.remove();
  }, 2500);
}

setInterval(createRaindrop, 100);

document.getElementById("audio").addEventListener("play", () => {
  setTimeout(() => {
    document.getElementById("raindrop-style").innerText = `
      .raindrop {
        background-color: red;

        box-shadow: 0px 0px 100px 10px red;
      }
    `;
  }, 43750);
})