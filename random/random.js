result_simplerandom = document.getElementById("result_simplerandom");
max_simplerandom = document.getElementById("max_simplerandom");
min_simplerandom = document.getElementById("min_simplerandom");

min_simplerandom.oninput = function(){
  min = this.value;
}
max_simplerandom.oninput = function(){
  max = this.value;
}

document.getElementById("button_simplerandom").onclick = function(){
  result_simplerandom.value =
  Math.floor(Math.random()*(parseInt(max_simplerandom.value)-parseInt(min_simplerandom.value)+1))+parseInt(min_simplerandom.value);
}
