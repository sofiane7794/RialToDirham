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
});


let answer = "";

fromRial.addEventListener("input", (e) => {
answer = e.target.value / 20;
console.log(answer);
})

