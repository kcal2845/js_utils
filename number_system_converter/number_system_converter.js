var frame_width = parseInt(document.getElementById('frame_width').value);
var frame_height = parseInt(document.getElementById('frame_height').value);
var frame_number = parseInt(document.getElementById('frame_number').value);
var fps = parseInt(document.getElementById('fps').value);
var frame = 0;
var looping = false;
var spritesheet = new Image();
spritesheet.src= './test.png'

document.getElementById('frame_width').oninput = function(){
  frame_width = parseInt(this.value);
}
document.getElementById('frame_height').oninput = function(){
  frame_height = parseInt(this.value);
}
document.getElementById('frame_number').oninput = function(){
  frame = 0;
  frame_number = parseInt(this.value);
}
document.getElementById('fps').oninput = function(){
  fps = parseInt(this.value);
}
document.getElementById('animationbutton').onclick = function(){
  if(looping){
    this.value = 'animation start'
  }else{
    this.value = 'animation stop'
  }
  looping = !looping;
}

var file = document.querySelector('#getfile');
file.onchange = function () {
  var fileList = file.files ;

  var reader = new FileReader();
  reader.readAsDataURL(fileList [0]);

  reader.onload = function  () {
      spritesheet.src = reader.result
  };
};

var cvs_ani = document.getElementById('canvas_animation');
var ctx_ani = cvs_ani.getContext('2d');
var cvs_spr = document.getElementById('canvas_spritesheet');
var ctx_spr = cvs_spr.getContext('2d');

spritesheet.onload= function(){
  update();
}

function interval(){
  setTimeout(update,1/fps*1000);
}

function update(){
    ctx_spr.clearRect(0,0,cvs_spr.width,cvs_spr.height);
    if(spritesheet.width>spritesheet.height){
      ctx_spr.drawImage(spritesheet,0,0,spritesheet.width,spritesheet.height,0,0,
        cvs_spr.width,cvs_spr.height*spritesheet.height/spritesheet.width);
    }else{
      ctx_spr.drawImage(spritesheet,0,0,spritesheet.width,spritesheet.height,0,0,
        cvs_spr.width*spritesheet.width/spritesheet.height,cvs_spr.height);
    }
  if(looping){
    ctx_ani.clearRect(0,0,cvs_ani.width,cvs_ani.height);
    var cols = Math.floor(spritesheet.width/frame_width);
    ctx_ani.drawImage(spritesheet,
      frame % cols * frame_width, Math.floor(frame / cols) * frame_height,
      frame_width, frame_height, 0, 0, frame_width, frame_height);
    frame = (frame+1)%frame_number;
    currentframetext.value = 'current frame : '+frame;
  }
  sizetext.value = 'width : ' + spritesheet.width + ' height : ' + spritesheet.height;
  interval();
}
