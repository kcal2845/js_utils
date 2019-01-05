var rowsInput = document.getElementById("rows");
var colsInput = document.getElementById("cols");
var area = document.getElementById("area");
var setting_close_button = document.getElementById("setting_close_button");
var setting_setting_button = document.getElementById("setting_setting_button");
var setting_deskID = document.getElementById("setting_deskID");
var setting_name = document.getElementById("setting_name");
var setting_enable = document.getElementById("setting_enable");
var setting = document.getElementById("setting");

var rows = 0;
var cols = 0;
var buttons = [];

setting_close_button.onclick = function(){
  setting.style.display = "none"
}

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

setting_setting_button.onclick = function(){
  var id = parseInt(setting_deskID.value)-1;
  if(setting_name.value != ""){
    buttons[id].value = setting_name.value;
  }else{
    buttons[id].value = " ";
  }
}

function generate(){
  if(cols != 0 && rows != 0){
    // 버튼 HTML 생성
    var buttonsHTML = '';
    for(var i=0;i<cols;i++){
      buttonsHTML += '<div>';
      for(var j=0;j<rows;j++){
        buttonsHTML += '<button class="desk" id="'+String(i*rows+j)+'">' + '</button>'
      }
      buttonsHTML += '</div>';
    }
    area.innerHTML = buttonsHTML;

    // 버튼 속성 초기화

    buttons = [];
    for(var i=0;i<cols*rows;i++){
      buttons[i] = document.getElementById(String(i+1));
      buttons[i].onclick = function(){
        setting.style.display = "block";
        setting_deskID.value = this.id;
      }
      buttons[i].name = "";
      buttons[i].value = "";
    }
    console.log(buttons)
  }
}
