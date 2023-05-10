var elements = document.getElementsByTagName('a');
for (var i = 0; i < elements.length; i++) {
  var text = elements[i].innerText.trim();
  if (text === "629748" || text === "638204") {
    elements[i].style.display = "none";
  }
}
