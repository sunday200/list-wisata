const submitBut = document.getElementById("addForm");
const listItem = document.querySelector("ul");
const filter = document.getElementById("filter");

submitBut.addEventListener("submit", addItem);

// Delete event
listItem.addEventListener("click", removeItem);

// Filter event
filter.addEventListener("keyup", filterItems);

// Add Item
function addItem(e) {
  e.preventDefault();
  const item = document.getElementById("item").value;

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "close";
  deleteBtn.appendChild(document.createTextNode("X"));

  li.appendChild(deleteBtn);

  listItem.appendChild(li);
}

// Remove Items
function removeItem(e) {
  if (e.target.classList.contains("close")) {
    if (confirm("sudah kesini ?")) {
      const li = e.target.parentElement;
      listItem.removeChild(li);
    }
  }
}

// Fungsi Pencarian
function filterItems(e) {
  const text = e.target.value.toLowerCase();

  const li = listItem.getElementsByTagName("li");

  Array.from(li).forEach((item) => {
    var itemName = item.firstChild.textContent;

    if (itemName.toLowerCase().includes(text)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
