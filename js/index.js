
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