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

// Run functions when page finishes loading
window.addEventListener("DOMContentLoaded", loadData);
