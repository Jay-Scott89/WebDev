function myFunction() {
  var x = document.getElementById("links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

async function loadData() {
  try {
    //Get the JSON file
    const response = await fetch("data.json");
    if (!response.ok) throw new Error("Network error");

    // Convert into an object
    const data = await response.json();

    // insert name and location
    document.getElementById("dynamic-list").innerHTML = data
      .map(
        (item) =>
          `<p>Name: ${item.name}, Lat: ${item.location.lat}, Lng: ${item.location.lng}</p>`
      )
      .join("");
  } catch (error) {
    // If something is wrong...
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
  const colorScheme = "Light";

  const map = new maplibregl.Map({
    container: "map",
    style: `https://maps.geo.${region}.amazonaws.com/v2/styles/${style}/descriptor?key=${apiKey}&color-scheme=${colorScheme}`,
    center: [-3.188267, 55.953251],
    zoom: 10,
  });
  map.addControl(new maplibregl.NavigationControl(), "top-left");
}

// Run functions when page finishes loading
window.addEventListener("DOMContentLoaded", loadData);
window.addEventListener("DOMContentLoaded", loadMap);
