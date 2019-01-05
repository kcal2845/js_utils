var rowsInput = document.getElementById("rows");
var colsInput = document.getElementById("cols");
var area = document.getElementById("area");
var setting_close_button = document.getElementById("setting_close_button");
var setting_setting_button = document.getElementById("setting_setting_button");
var setting_enable = document.getElementById("setting_enable");
var setting_deskID = document.getElementById("setting_deskID");
var setting_name = document.getElementById("setting_name");
var setting = document.getElementById("setting");
var random = document.getElementById("random");

var rows = 0;
var cols = 0;
var buttons = [];

setting_close_button.onclick = function(){
  setting.style.display = "none";
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
  var id = parseInt(setting_deskID.value);
  if(setting_name.value != ""){
    buttons[id].name = setting_name.value;
    buttons[id].innerHTML = '<span style="font-size:0.5em;position:absolute;left:0px;top:0px">'+String(id)+'</span>';
    buttons[id].innerHTML += setting_name.value;
  }else{
    buttons[id].name = "";
    buttons[id].innerHTML = '<span style="font-size:0.5em;position:absolute;left:0px;top:0px">'+String(id)+'</span>';
    buttons[id].innerHTML += '<span style="color:gray">이름 입력</span>';
  }
  buttons[id].using = setting_enable.checked;
  if(!buttons[id].using){
    buttons[id].innerHTML = '<span style="font-size:0.5em;position:absolute;left:0px;top:0px">'+String(id)+'</span>';
    buttons[id].innerHTML += '<span style="color:red">사용 안함</span>';
  }
  setting.style.display = "none";
}

random.onclick=function(){
  var shuffle = [];
  var j=0;
  for(var i=0;i<buttons.length;i++){
    if(buttons[i].using){
      shuffle[j] = buttons[i].name;
      j += 1;
    }
  }

  var using = [];
  for(var i=0;i<buttons.length;i++){
    using[i] = buttons[i].using;
  }

  // 섞기
  shuffle = shuffle.sort(function(){return 0.5-Math.random()});

  // 재배치
  var buttonsHTML = '';
  var c=0;
  for(var i=0;i<cols;i++){
    buttonsHTML += '<div>';
    for(var j=0;j<rows;j++){
      buttonsHTML += '<button class="desk" id="'+String(c)+'">' + '</button>';
      c += 1;
    }
  }
  area.innerHTML = buttonsHTML;

  buttons = [];
  var j=0;
  for(var i=0;i<cols*rows;i++){
    buttons[i] = document.getElementById(String(i));
    buttons[i].onclick = function(){
      setting.style.display = "block";
      setting_enable.checked = this.using;
      setting_deskID.value = this.id;
      setting_name.value = this.name;
    }

    buttons[i].innerHTML = '<span style="font-size:0.5em;position:absolute;left:0px;top:0px">'+String(i)+'</span>';
    buttons[i].using = using[i];
    if(buttons[i].using){
      buttons[i].name = shuffle[j];
      if(buttons[i].name == ""){
        buttons[i].innerHTML += '<span style="color:gray">이름 입력</span>';
      }else{
        buttons[i].innerHTML += buttons[i].name;
      }
      j+=1;
    }else{
      buttons[i].name = "";
      buttons[i].innerHTML += '<span style="color:red">사용 안함</span>';
    }
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
      buttons[i] = document.getElementById(String(i));
      buttons[i].onclick = function(){
        setting.style.display = "block";
        setting_enable.checked = this.using;
        setting_deskID.value = this.id;
        setting_name.value = this.name;
      }
      buttons[i].name = "";
      buttons[i].innerHTML = '<span style="font-size:0.5em;position:absolute;left:0px;top:0px">'+String(i)+'</span>';
      buttons[i].innerHTML += '<span style="color:gray">이름 입력</span>';
      buttons[i].using = true;
    }
    random.style.display = "block"
  }
}
