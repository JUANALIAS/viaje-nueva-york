
const itinerary = {
  "Lunes 18 de agosto": "Llegada, Top of the Rock, Cena en Bill's Bar & Burger",
  "Martes 19": "Midtown, Biblioteca Pública, SUMMIT One Vanderbilt",
  "Miércoles 20": "Excursión contrastes, DUMBO, Puente de Brooklyn",
  "Jueves 21": "Estatua de la Libertad, Ellis Island, Wall Street",
  "Viernes 22": "Museos, Central Park, Greenwich Village",
  "Sábado 23": "Harlem, Bronx, Williamsburg",
  "Domingo 24": "Coney Island, Luna Park",
  "Lunes 25": "Columbia University, Roosevelt Island, MoMA",
  "Martes 26": "Tribeca, Soho, Chinatown, Flushing",
  "Miércoles 27": "Compras, Empire State, Cena en Carmine’s",
  "Jueves 28": "Central Park, regreso al aeropuerto"
};

const tabButtons = document.getElementById("tab-buttons");
const tabContent = document.getElementById("tab-content");
const daySelector = document.getElementById("day-selector");

Object.keys(itinerary).forEach((day, index) => {
  const btn = document.createElement("button");
  btn.textContent = day;
  btn.onclick = () => showContent(day, btn);
  tabButtons.appendChild(btn);

  const option = document.createElement("option");
  option.value = day;
  option.textContent = day;
  daySelector.appendChild(option);

  if (index === 0) {
    btn.classList.add("active");
    tabContent.textContent = itinerary[day];
  }
});

function showContent(day, btn) {
  tabContent.textContent = itinerary[day];
  document.querySelectorAll(".tab-buttons button").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  daySelector.value = day;
}

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.758, lng: -73.985 },
    zoom: 12
  });

  daySelector.onchange = () => {
    const selectedDay = daySelector.value;
    // Aquí puedes añadir lógica para mostrar rutas específicas por día
    alert("Mostrar ruta para: " + selectedDay);
  };
}
