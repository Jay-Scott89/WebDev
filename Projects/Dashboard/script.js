function myFunction() {
  var x = document.getElementById("links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let map;
let locations = [];

async function loadData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw new Error("Network error");

    locations = await response.json();

    // Add markers for all locations
    locations.forEach((loc) => {
      new maplibregl.Marker()
        .setLngLat([loc.location.lng, loc.location.lat])
        .addTo(map);
    });

    updateList();
  } catch (error) {
    console.error(error);
    document.getElementById(
      "dynamic-list"
    ).innerHTML = `<p>Failed to load data</p>`;
  }
}

function loadMap() {
  const apiKey =
    "v1.public.eyJqdGkiOiI3YTcyNWY5MS1lNjg5LTQyMDgtYjE4OS0zMmMzMmMxNWFmN2QifTvSiNGbyLV5fRDQvgBYfJlPZxZNPm-dgNcbUB6bjXUW5JtPiM62T5K2kU7wVZzOtwdBTxa6Jf7WyhbY6kMavaq_UJaa_QviaE0InUVvoOSnby4LgEr02CM065ZiG6gFxy6beoDAIMdt0aKIU6QLCDek-ThoQj3AeeC6OcYRE0GQFpbEHocrVtA2bbjvImaRVV0c_NsppPn3jdZdEOXZ3MaE5zHNCOKL29Iu5UHq-EiKKt6NKO9JN2P27XKMzj5UgPJmjXAEFuVAI5zWV3dbRwcHgtE-SBwR_Vfom2qxQ5fE90gxYyAjV19l87eHgMb0BY7Bmu5KXoHNFLJaZ1Z3m_E.N2IyNTQ2ODQtOWE1YS00MmI2LTkyOTItMGJlNGMxODU1Mzc2";
  const region = "eu-north-1";
  const style = "Standard";

  map = new maplibregl.Map({
    container: "map",
    style: `https://maps.geo.${region}.amazonaws.com/v2/styles/${style}/descriptor?key=${apiKey}`,
    center: [-3.188267, 55.953251],
    zoom: 10,
  });
  map.addControl(new maplibregl.NavigationControl(), "top-left");

  map.on("moveend", updateList);
}

function updateList() {
  if (!map) return;
  const bounds = map.getBounds();
  const visible = locations.filter((loc) =>
    bounds.contains([loc.location.lng, loc.location.lat])
  );

  const list = document.getElementById("dynamic-list");
  list.innerHTML = visible
    .map(
      (loc, i) =>
        `<p class="list-item" data-id="${loc.id || i}">${loc.name}</p>`
    )
    .join("");

  document.querySelectorAll(".list-item").forEach((el) => {
    el.addEventListener("click", () => showDetails(el.dataset.id));
  });
}

// Update the details list with additional info
function showDetails(id) {
  const loc = locations.find((l, i) => (l.id || i.toString()) === id);
  if (!loc) return;

  document
    .querySelectorAll(".list-item")
    .forEach((el) => el.classList.remove("active"));
  document
    .querySelector(`.list-item[data-id="${id}"]`)
    ?.classList.add("active");

  const main2 = document.querySelector(".main2");
  main2.innerHTML = `
    <h2>${loc.name}</h2>
    <p>Location: ${loc.location.lat}, ${loc.location.lng}</p>
    <p>Year established:${loc.year_established || "No further details"}</p>
    <p>Current operating state: ${loc.state || "No further details"}</p>
    <p>Aunual Revenue: £${
      loc.annual_revenue_gbp_estimate || "No further details"
    } Cost to operate anually: £${
    loc.annual_cost_to_run_gbp_estimate || "No further details"
  }</p>
    <p>${loc.description || "No further details"}</p>
  `;
}

// Run functions when page finishes loading
window.addEventListener("DOMContentLoaded", loadData);
window.addEventListener("DOMContentLoaded", loadMap);
