const list = document.getElementById("list");
const form = document.querySelector("form");
const input = document.querySelector("input");
//console.log(list, form, input);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${input.value}</li>`;
  input.value = "";
  storage();
  console.log("yoo");
});
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storage();
});
function storage() {
  window.localStorage.todolist = list.innerHTML;
}
function getValue(params) {
  let storageContent = window.localStorage.todolist;
  if (!storageContent) {
    list.innerHTML = `<li>cliquer sur un todo pour le supprimer</li>`;
  } else {
    list.innerHTML = storageContent;
  }
}
getValue();
