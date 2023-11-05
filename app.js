const input = document.querySelector("input");
const modal = document.querySelector(".modal");

const button = document.querySelector("button");



window.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    if (input.value.toLocaleLowerCase().trim() == "b") {
      modal.style.display = "none";

    }else alert("xato")
  }
});

setTimeout(() => {
  window.location.reload()
},40 * 60 * 1000);