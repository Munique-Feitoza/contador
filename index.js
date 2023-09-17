let count = 0;
let fundo = document.querySelector("html");



document.querySelector(".diminuir").onclick =
   () => {
  count -= 1;
  document.querySelector(".count").innerHTML = count;
}
document.querySelector(".resetar").onclick = 
  () => {
  count = 0;
  document.querySelector(".count"). innerHTML = count;
}
document.querySelector(".adicionar").onclick =
   () => {
  count += 1;
  document.querySelector(".count").innerHTML = count;
}
