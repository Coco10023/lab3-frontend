const API_URL = "https://lab3-backend-k7rv.onrender.com/api/experiences";

async function getData() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(item => {
    const li = document.createElement("li");

    li.innerHTML = `
      <strong>${item.company}</strong> - ${item.role}
      <button onclick="deleteItem('${item._id}')">Ta bort</button>
    `;

    list.appendChild(li);
  });
}

async function deleteItem(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  getData();
}

getData();