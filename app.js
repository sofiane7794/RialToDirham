const fromRial = document.querySelector("#amount");
// console.log(fromRial);
const reset = document.querySelector("#reset");
// console.log(reset);
const convert = document.getElementById("convert");
// console.log(convert);
const result = document.getElementById("result");
// console.log(result);

reset.addEventListener("click", () => {
  // console.log(reset);
  fromRial.value = "";
  result.innerHTML = ``;
});

let answer = "";

fromRial.addEventListener("input", (e) => {
answer = e.target.value / 20;
console.log(answer);
})

convert.addEventListener('click', () => {
// console.log(convert);
if (answer > 0){
result.innerHTML = `
Cela fait ${answer} Dirham, soit ${answer / 10} EUR
`
}else{
result.innerHTML = `
veuillez inserer une somme a convertir !
`

}
});