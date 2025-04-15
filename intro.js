function addCard() {
  const container = document.getElementById("card-container");

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
      <img src="https://picsum.photos/300/200?random=${Math.floor(
        Math.random() * 1000
      )}" alt="Random Image">
      <button id="h3">card-content</button>
      `;
          

  container.appendChild(card);
}


