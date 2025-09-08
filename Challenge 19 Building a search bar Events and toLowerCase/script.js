const searchInput = document.getElementById("search-input");
const userList = document.getElementById("user-list");
const userItems = document.querySelectorAll(".user-item");

searchInput.addEventListener("keyup", () => {
  const searchTerm = searchInput.value.toLowerCase();

  let matchesFound = 0;

  const existingMessage = document.getElementById("not-found-message");
  if (existingMessage) {
    existingMessage.remove();
  }

  userItems.forEach((item) => {
    const name = item.textContent.toLowerCase();

    if (name.includes(searchTerm)) {
      item.style.display = "";
      matchesFound++;
    } else {
      item.style.display = "none";
    }
  });

  if (matchesFound === 0) {
    const notFoundLi = document.createElement("li");
    notFoundLi.textContent = "User not found.";
    notFoundLi.id = "not-found-message";
    userList.appendChild(notFoundLi);
  }
});
