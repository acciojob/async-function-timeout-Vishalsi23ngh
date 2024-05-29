document.getElementById("btn").addEventListener("click", async () => {
  const text = document.getElementById("text").value;
  const delay = parseInt(document.getElementById("delay").value);

  if (!text || isNaN(delay)) {
    alert("Please fill in all fields and provide a valid delay and text");
    return;
  }

  // Introduce the delay
  await delayFunction(delay);

  document.getElementById("output").innerText = text;
});

function delayFunction(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

