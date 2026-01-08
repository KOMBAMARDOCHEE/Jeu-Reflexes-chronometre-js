let startTime;
const box = document.getElementById("box");
const result = document.getElementById("result");

function randomDelay() {
  return Math.random() * 3000 + 1000;
}

box.onclick = () => {
  if (box.style.background === "green") {
    const reaction = Date.now() - startTime;
    result.textContent = `Temps de réaction : ${reaction} ms`;
    reset();
  }
};

function reset() {
  box.style.background = "red";
  box.textContent = "Attends...";
  setTimeout(() => {
    box.style.background = "green";
    box.textContent = "CLIQUE !";
    startTime = Date.now();
  }, randomDelay());
}

reset();