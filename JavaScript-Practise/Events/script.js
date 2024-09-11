const btn1 = document.querySelector("#btn1");
btn1.onclick = () => alert("Hello World!");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  alert("Hello World");
});
