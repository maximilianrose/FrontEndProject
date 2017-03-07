
function randomreview()

{

  var mylinks= Math.round(Math.random()*4)
var reviewlinks = new Array()
reviewlinks[0] = "dragonslairreview.html"
reviewlinks[1] = "index.html"
reviewlinks[2] = "battlefield1.html"
reviewlinks[3] = "dishonored2.html"

window.location= reviewlinks[mylinks]


};


function revealScore() {
    var str = document.getElementById("rating").innerHTML; 
    var res = str.replace("?", "3/10");
    document.getElementById("rating").innerHTML = res;
};











//script for generating mario sprite

var cx = document.querySelector('canvas').getContext('2d'),
    img = document.createElement('img'),
    spriteH = 32, spriteW = 16, startX = 18;

img.src = 'http://www.smbhq.com/users/sprite/smb_spritesheet.gif';
img.addEventListener('load', function() {
  setInterval(function(){
    
    cx.clearRect(0, 0, spriteW, spriteH);
    cx.drawImage(img, startX, 92, spriteW, spriteH, 0, 0, spriteW, spriteH);
    
    if (startX === 18)
      startX = 35;
    else
      startX = 18;
  }, 120);
});