
addEventListener("keydown", function(e){
    if (e.code == 'KeyD') vxr = 7;
});

addEventListener('keydown', function(e){
    if (e.code == 'KeyA') vxl = -7;

});

addEventListener('keydown', function(e){
    if (e.code == 'KeyW') {
        if(grounded){
            currentMajuFrame = 0;
            currentMundurFrame = 0;
            vy = -10, grounded = false;
        }
    }
});

addEventListener("keyup", function(e){
    if (e.code == 'KeyD') vxr = 0;
    if (e.code == 'KeyA') vxl = 0;
    currentIdleFrame = 0;
    currentMajuFrame = 0;
    currentMundurFrame = 0;

    if (e.code == 'Space') {
        kick = true;
        setTimeout(() => {
            kick = false;
            currentKickFrame = 0; // Reset frame kick setelah animasi selesai
        }, 100); // Set the desired duration for the kick animation in milliseconds
    }
}); 



addEventListener("keydown", function(e){
    if (e.code == 'ArrowRight') vxr2 = 7;
});
  
addEventListener('keydown', function(e){
    if (e.code == 'ArrowLeft') vxl2 = -7;
  
});
  
  addEventListener('keydown', function(e){
    if (e.code == 'ArrowUp') {
        if(grounded2){
            currentMajuFrame2 = 0;
            currentMundurFrame2 = 0;
            vy2 = -10, grounded2 = false;
        }
    }
});
  
addEventListener("keyup", function(e){
    if (e.code == 'ArrowRight') vxr2 = 0;
    if (e.code == 'ArrowLeft') vxl2 = 0;
    currentIdleFrame2 = 0;
    currentMajuFrame2 = 0;
    currentMundurFrame2 = 0;
  
    if (e.code == 'ArrowDown') {
        kick2 = true;
        setTimeout(() => {
            kick2 = false;
            currentKickFrame2 = 0; // Reset frame kick setelah animasi selesai
        }, 100); // Set the desired duration for the kick animation in milliseconds
    }
});
  


