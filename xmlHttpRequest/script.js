const btn = document.getElementById("buttonLoad");
const dataContainer = document.getElementById("dataContainer");

btn.addEventListener("click", (event) => {
  const request = new XMLHttpRequest();
  request.open("GET", "http://127.0.0.1:8080/table.html");
  // What to do
  request.addEventListener("load", (e) => {
    dataContainer.innerHTML = e.target.responseText;
  });
  // Execute the request
  request.send();
});
