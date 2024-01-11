const btn = document.getElementById("buttonLoad");

btn.addEventListener("click", (event) => {
  const request = new XMLHttpRequest();
  request.open("GET", "https://api.spacexdata.com/v4/rockets");
  // What to do
  request.addEventListener("load", (e) => {
    console.log(JSON.parse(e.target.responseText));
  });
  // Execute the request
  request.send();
});
