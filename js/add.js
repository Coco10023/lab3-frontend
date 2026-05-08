const API_URL = "https://lab3-backend-k7rv.onrender.com/api/experiences";

const form = document.getElementById("experience-form");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  errorMessage.textContent = "";
  successMessage.textContent = "";

  const company = document.getElementById("company").value.trim();
  const role = document.getElementById("role").value.trim();
  const location = document.getElementById("location").value.trim();
  const startDate = document.getElementById("startDate").value.trim();
  const endDate = document.getElementById("endDate").value.trim();
  const description = document.getElementById("description").value.trim();

  // JavaScript-validering innan POST
  if (!company || !role || !location || !startDate || !description) {
    errorMessage.textContent = "Företag, roll, plats, startdatum och beskrivning måste fyllas i.";
    return;
  }

  const newExperience = {
    company,
    role,
    location,
    startDate,
    endDate,
    description
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newExperience)
    });

    if (!response.ok) {
      throw new Error("Något gick fel vid skapandet.");
    }

    successMessage.textContent = "Arbetserfarenheten har lagts till.";
    form.reset();
  } catch (error) {
    errorMessage.textContent = "Kunde inte lägga till arbetserfarenheten.";
  }
});