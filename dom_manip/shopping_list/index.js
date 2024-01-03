const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  const myItem = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = "Delete";
  list.appendChild(listItem);

  // event listeners are attached to individual elements, not to functions
  // always listens for a click event, regardless of whether parent function has been called or not
  function deleteListItem() {
    list.removeChild(listItem);
  }
  listBtn.addEventListener("click", deleteListItem);
  //  listBtn.removeEventListener("click", deleteListItem);

  input.focus();
});
