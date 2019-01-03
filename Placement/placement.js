var rowsInput = document.getElementById("rows");
var colsInput = document.getElementById("cols");
var area = document.getElementById("area");

var rows = 0;
var cols = 0;

rowsInput.oninput = function(){
  if(isNaN(this.value)){
    this.value = this.value.slice(0,-1);
  }else{
    rows = parseInt(this.value);
  }
  generate();
}

colsInput.oninput = function(){
  if(isNaN(this.value)){
    this.value = this.value.slice(0,-1);
  }else{
    cols = parseInt(this.value);
  }
  generate();
}

function generate(){
  var buttons = '';
  if(cols != 0 && rows != 0){
    for(var i=0;i<cols;i++){
      buttons += '<div id='+String(i+1)+'>';
      for(var j=0;j<rows;j++){
        buttons += '<input type=button value='+String(i*rows+j+1)+'>'
      }
      buttons += '</div>';
    }
  }
  console.log(buttons);
  area.innerHTML = buttons;
}
