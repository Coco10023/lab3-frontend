// URL till backend API
const API_URL = "https://lab3-backend-k7rv.onrender.com/api/experiences";

// Hämtar alla arbetserfarenheter från API
async function getData() {
  const res = await fetch(API_URL);
  const data = await res.json();

  // Hämtar elementet där datan ska visas
  const list = document.getElementById("experience-list");
  list.innerHTML = "";

  // Loopar igenom alla poster och visar dem på sidan
  data.forEach(item => {
    const li = document.createElement("li");

    li.innerHTML = `
      <strong>${item.company}</strong> - ${item.role}
      <button onclick="deleteItem('${item._id}')">Ta bort</button>
    `;

    list.appendChild(li);
  });
}

// Raderar en arbetserfarenhet baserat på ID
async function deleteItem(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  // Uppdaterar listan efter radering
  getData();
}

// Kör funktionen när sidan laddas
getData();