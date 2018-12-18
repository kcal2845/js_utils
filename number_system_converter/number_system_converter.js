input_binary = document.getElementById('input_binary');
input_octal = document.getElementById('input_octal');
input_decimal = document.getElementById('input_decimal');
input_hexadecimal = document.getElementById('input_hexadecimal');

input_binary.oninput = function(){
  if(this.value != ''){
    if(this.value[this.value.length-1] != 0 && this.value[this.value.length-1] != 1){
      this.value = this.value.slice(0,-1);
    }
    input_decimal.value = parseInt(this.value,2);
    input_octal.value = parseInt(this.value,2).toString(8);
    input_hexadecimal.value = parseInt(this.value,2).toString(16);
  }
}
input_octal.oninput = function(){
  if(this.value != ''){
    input_decimal.value = parseInt(this.value,8);
    input_binary.value = parseInt(this.value,8).toString(2);
    input_hexadecimal.value = parseInt(this.value,8).toString(16);
  }
}
input_decimal.oninput = function(){
  if(this.value != ''){
    input_octal.value = parseInt(this.value,10).toString(8);
    input_binary.value = parseInt(this.value,10).toString(2);
    input_hexadecimal.value = parseInt(this.value,10).toString(16);
  }
}

input_hexadecimal.oninput = function(){
  if(this.value != ''){
    input_decimal.value = parseInt(this.value,16);
    input_binary.value = parseInt(this.value,16).toString(2);
    input_octal.value = parseInt(this.value,16).toString(8);
  }
}
