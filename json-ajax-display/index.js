// Making an HTTP request through AJAX

// New XMLHttpRequest object
var xhttp = new XMLHttpRequest();

// The onreadystatechange property specifies a function to be executed every time the status of the XMLHttpRequest object changes
xhttp.onreadystatechange = function () {
  // When the readyState property is 4 and the status property is 200, the response is ready
  if (this.readyState == 4 && this.status == 200) {
    // console.log(xhttp.responseText);
    var response = JSON.parse(this.responseText);
    var players = response.players;
    var output = "";
    for (var i = 0; i < players.length; ++i)
      output += "<li>" + players[i].name + "</li>";
    document.getElementById("players").innerHTML = output;
  }
};
// The open() method specifies the type of request, URL, and asynchronous flag
xhttp.open("GET", "players.json", true);
xhttp.send();
