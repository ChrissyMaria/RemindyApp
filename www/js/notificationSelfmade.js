function showNotification() {
    // Create notification object
    console.log("Notification here.");
    document.getElementById("notification").style.display = "block";

    var subtitle = $$('<p></p>');
    subtitle.text(notificationBuyCall.subtitle);
    $$('#noti-subtitle').append(subtitle);

    var text = $$('<p></p>');
    text.text(notificationBuyCall.text);
    $$('#noti-text').append(text);

}

function createNotificationBuyCall () {

}

function off() {
    document.getElementById("overlay").style.display = "none";
}







    /*--------------------------Adding swipe listener------------------
 * -----------------------------SOURCE: https://www.kirupa.com/html5/detecting_touch_swipe_gestures.htm */

    document.getElementById("notification").addEventListener("touchstart", startTouch, false);
    document.getElementById("notification").addEventListener("touchmove", moveTouch, false);
 
     // Swipe Up / Down / Left / Right
     var initialX = null;
    var initialY = null;
    var d = null;
    var initialTime = null; 
    var nowTime = null;
 
     function startTouch(e) {
         initialX = e.touches[0].clientX;
         initialY = e.touches[0].clientY;
         initialTime = + new Date(); 
     };
 
     function moveTouch(e) {
         if (initialX === null) {
             return;
         }
 
         if (initialY === null) {
             return;
         }
 
         var currentX = e.touches[0].clientX;
         var currentY = e.touches[0].clientY;
 
         var diffX = initialX - currentX;
         var diffY = initialY - currentY;
         nowTime = + new Date();
         diffTime = nowTime - initialTime;
 
         if (Math.abs(diffX) > Math.abs(diffY)) {
             // sliding horizontally
             if (diffX > 0) {
                 // swiped left
                 
                console.log(diffTime + "swiped left");
                 
             } else {
                 // swiped right
                 console.log("swiped right");
             }
         } else {
             // sliding vertically
             if (diffY > 0) {
                 //swiped up
                 //this.close();
                 console.log("swiped up");

                 
                 ///////////////////////////////////////////////////////////////
 
             } else {
                 // swiped down
                 console.log("swiped down");
                 document.getElementById("noti-default-btn").style.display = "flex";

                 // this should represent a slow down scrolling --> if a certain time is exceeded (300ms) && the position (-50) is reached
                 if (diffY <= 90 && diffTime > 300) {
                     console.log("DOOOOWN we go!")

                     document.getElementById("downText").style.display = "block";

                 }
             }
         }
 
         initialX = null;
         initialY = null;
 
         e.preventDefault();
     };

    // Open Notification
    //self.notificationCallbackOnClose.open();
//}


$("noti-expand").click(function () {
    console.log("geht rein");
    $("downText").toggle();
    
});
