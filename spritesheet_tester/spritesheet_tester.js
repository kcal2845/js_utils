var cvs = document.getElementById('animation');
var ctx = cvs.getContext('2d');
ctx.scale(1,1);
var sprite = new Image();
var interval = setInterval(function(){},50);
var frame = 0;

sprite.onload = function(){
  frame = 0;
  clearInterval(interval);
  interval = setInterval(drawMotion,cycletime);
}

function drawMotion(){
  ctx.clearRect(0,0,cvs.width,cvs.height);
  ctx.drawImage(sprite, frame%maxframe*framewidth, Math.floor(frame/maxframe)*frameheight,
                framewidth,frameheight,0,0,128,128);
  frame = (frame+1)%maxframe;
}

var posx = 0;
var posy = 0;
var framewidth = 128;
var frameheight = 128;
var maxframe = 4;
var cycletime = 100;

var file = document.querySelector('#getfile');
file.onchange = function () {
  var fileList = file.files ;

  var reader = new FileReader();
  reader.readAsDataURL(fileList [0]);

  reader.onload = function  () {
      sprite.src = reader.result
  };
};
