// --- Configuration ---
const apiKey =
  "v1.public.eyJqdGkiOiI3YTcyNWY5MS1lNjg5LTQyMDgtYjE4OS0zMmMzMmMxNWFmN2QifTvSiNGbyLV5fRDQvgBYfJlPZxZNPm-dgNcbUB6bjXUW5JtPiM62T5K2kU7wVZzOtwdBTxa6Jf7WyhbY6kMavaq_UJaa_QviaE0InUVvoOSnby4LgEr02CM065ZiG6gFxy6beoDAIMdt0aKIU6QLCDek-ThoQj3AeeC6OcYRE0GQFpbEHocrVtA2bbjvImaRVV0c_NsppPn3jdZdEOXZ3MaE5zHNCOKL29Iu5UHq-EiKKt6NKO9JN2P27XKMzj5UgPJmjXAEFuVAI5zWV3dbRwcHgtE-SBwR_Vfom2qxQ5fE90gxYyAjV19l87eHgMb0BY7Bmu5KXoHNFLJaZ1Z3m_E.N2IyNTQ2ODQtOWE1YS00MmI2LTkyOTItMGJlNGMxODU1Mzc2";
const region = "eu-north-1";
const styleName = "Standard";

// --- Initialize map ---
const map = new maplibregl.Map({
  container: "map",
  style: `https://maps.geo.${region}.amazonaws.com/v2/styles/${styleName}/descriptor?key=${apiKey}`,
  center: [-3.188267, 55.953251],
  zoom: 13,
});

map.addControl(new maplibregl.NavigationControl(), "top-left");

// --- Polygon drawing state ---
let points = []; // Stores user clicks [lng, lat]
let markers = []; // Marker references
let polygonComplete = false;

// --- Wait for map to load before enabling clicks ---
map.on("load", () => {
  // Add an empty GeoJSON source for the polygon shape
  map.addSource("userPolygon", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [],
    },
  });

  // Add a fill layer (the filled polygon)
  map.addLayer({
    id: "userPolygon-fill",
    type: "fill",
    source: "userPolygon",
    paint: {
      "fill-color": "#008296",
      "fill-opacity": 0.3,
    },
  });

  // Add a border layer for the polygon outline
  map.addLayer({
    id: "userPolygon-outline",
    type: "line",
    source: "userPolygon",
    paint: {
      "line-color": "#004466",
      "line-width": 2,
    },
  });

  // Handle user clicks
  map.on("click", (e) => {
    if (polygonComplete) return; // prevent new clicks after closing shape

    const lngLat = [e.lngLat.lng, e.lngLat.lat];
    console.log("Clicked:", lngLat);

    // If first point exists and click is near it, close polygon
    if (points.length > 2 && isCloseToFirstPoint(lngLat)) {
      closePolygon();
      return;
    }

    // Otherwise, add point and marker
    points.push(lngLat);

    const marker = new maplibregl.Marker({ color: "red" })
      .setLngLat(lngLat)
      .addTo(map);
    markers.push(marker);

    updatePolygon();
  });
});

// --- Function: update the GeoJSON polygon as points are added ---
function updatePolygon() {
  if (points.length < 2) return;

  const feature = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      // Temporary polygon not closed (last point not equal to first)
      coordinates: [points.concat([points[0]])],
    },
    properties: {},
  };

  map.getSource("userPolygon").setData({
    type: "FeatureCollection",
    features: [feature],
  });
}

// --- Function: check if click is close to first marker ---
function isCloseToFirstPoint(lngLat) {
  const first = points[0];
  if (!first) return false;

  const dx = lngLat[0] - first[0];
  const dy = lngLat[1] - first[1];
  const dist = Math.sqrt(dx * dx + dy * dy);
  // Approx 0.0001 degrees ~ 10m at mid latitudes
  return dist < 0.0001;
}

// --- Function: finalize the polygon ---
function closePolygon() {
  polygonComplete = true;

  // Ensure polygon is closed (first == last point)
  const closed = points.concat([points[0]]);

  const feature = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [closed],
    },
    properties: {},
  };

  map.getSource("userPolygon").setData({
    type: "FeatureCollection",
    features: [feature],
  });

  console.log("Polygon complete:", closed);

  // Optional: remove markers after completion
  markers.forEach((m) => m.remove());
  markers = [];
}
