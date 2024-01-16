const searchInput = document.querySelector("#search");
const addbtn = document.querySelector("#btn");
const olList = document.querySelector(".fa-ul");

// console.log(addbtn);
addbtn.addEventListener("click", () => {
  let searchValue = searchInput.value;

  if (searchValue !== "") {
    let item = document.createElement("li");
    item.textContent = `${searchValue}`;
    olList.append(item); // both conditions works
    // olList.appendChild(item);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";

    item.appendChild(span);
  }
  searchInput.value = "";
});

olList.addEventListener("click", (ele) => {
  // console.log(ele.target);
  // console.log(ele.target.tagName);
  if (ele.target.tagName === "SPAN") {
    ele.target.parentElement.remove();
  } else if (ele.target.tagName === "LI") {
    ele.target.classList.toggle("checked");
  }
});
