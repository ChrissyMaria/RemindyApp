//  onclick="$('#datedisplay').html('Today'); $('#buttonDateLeft').hide();  $('#buttonDateRight').show(); "

//builds the standard header of a notification (which is always the same) and controls the expand button
function fillHeaderNotification() {
    /*var icon = $$('<img id="noti-img" />');
    icon.src(notificationHeader.icon);
    $$('#noti-header').append(subtitle);*/

    var appName = $$('<span id="noti-appName"></span>');
    appName.text(notificationHeader.title);
    $$('#noti-header').append(appName);

    var time = $$('<span id="noti-time"></span>');
    time.text(notificationHeader.timeSinceNoti);
    $$('#noti-header').append(time);

    var expand = $$('<i class="material-icons" id="noti-expand"></i>');
    expand.text(notificationHeader.expand);
    $$('#noti-header').append(expand);

    var less = $$('<i class="material-icons" id="noti-less"></i>');
    less.text(notificationHeader.less);
    $$('#noti-header').append(less);
    $$('#noti-less').hide();


    //click listeners - if someone presses on expand_more or expand_less icon button will show or hide
    $$('#noti-expand').on('click', function () {
        $$('#noti-expand').hide();
        $$('#noti-less').show();
        document.getElementById("noti-default-btn").style.display = "flex"; //you can't use the $ in this case
        console.log('Button with id ' + $(this).attr('id') +' clicked');
    });

    $$('#noti-less').on('click', function () {
        $$('#noti-less').hide();
        $$('#noti-expand').show();
        $$('#noti-default-btn').hide();
        $$('#downText').hide();
    });
}

function buyCallNotification() {
    // Create notification object
    console.log("Notification here.");
    document.getElementById("notification").style.display = "block";

    fillHeaderNotification();

    var subtitle = $$('<p></p>');
    subtitle.text(notificationBuyCall.subtitle);
    $$('#noti-subtitle').append(subtitle);

    var text = $$('<p></p>');
    text.text(notificationBuyCall.text);
    $$('#noti-text').append(text);

    var downText = $$('<p id="downText"></p>');
    downText.text(notificationBuyCall.downText);
    $$('#noti-text').append(downText);

    //Buttons
    //TODO I'd like to save buttons in arrays but I'm not sure if it makes sense
    var button = $$('<span class="noti-btn">');
    var button2 = $$('<span class="noti-btn">');
    var link = $$('<a class="link external" href="https://www.blinkhealth.com/l-thyroxine-sodium"><i class="material-icons">add_shopping_cart</i>BUY</a>');
    var link2 = $$('<a class="link external" href="tel:+436643755739"><i class="material-icons">call</i>CALL DOCTOR</a>');
    button.append(link);
    button2.append(link2);
    //downText.text(notificationBuyCall.downText);
    $$('#noti-default-btn').append(button);
    $$('#noti-default-btn').append(button2);
}

function buyMedicine() {
    // Create notification object
    console.log("Notification here.");
    document.getElementById("notification").style.display = "hide";

    fillHeaderNotification();

    var subtitle = $$('<p></p>');
    subtitle.text(notificationBuyCall.subtitle);
    $$('#noti-subtitle').append(subtitle);

    var text = $$('<p></p>');
    text.text(notificationBuyCall.text);
    $$('#noti-text').append(text);

    var downText = $$('<p id="downText"></p>');
    downText.text(notificationBuyCall.downText);
    $$('#noti-text').append(downText);

    //Buttons
    //TODO I'd like to save buttons in arrays but I'm not sure if it makes sense
    var button = $$('<span class="noti-btn">');
    var button2 = $$('<span class="noti-btn">');
    var link = $$('<a class="link external" href="https://www.blinkhealth.com/l-thyroxine-sodium"><i class="material-icons">add_shopping_cart</i>BUY</a>');
    var link2 = $$('<a class="link external" href="tel:+436643755739"><i class="material-icons">call</i>CALL DOCTOR</a>');
    button.append(link);
    button2.append(link2);
    //downText.text(notificationBuyCall.downText);
    $$('#noti-default-btn').append(button);
    $$('#noti-default-btn').append(button2);
}

function takeNotification() {
    console.log("Notification here.");
    document.getElementById("notification").style.display = "block";

    fillHeaderNotification();

    var subtitle = $$('<p></p>');
    subtitle.text(notificationTake.subtitle);
    $$('#noti-subtitle').append(subtitle);

    var text = $$('<p></p>');
    text.text(notificationTake.text);
    $$('#noti-text').append(text);

    var downText = $$('<p id="downText"></p>');
    downText.text(notificationTake.downText);
    $$('#noti-text').append(downText);

    //Buttons
    //TODO I'd like to save buttons in arrays but I'm not sure if it makes sense
    var button = $$('<span class="noti-btn">');
    var button2 = $$('<span class="noti-btn-middle">');
    var button3 = $$('<span class="noti-btn">');
    var link = $$('<a class="link external" href="www.google.de">TAKEN!</a>');
    var link2 = $$('<a class="link external" href="www.google.de">IN 1 HOUR</a>');
    var link3 = $$('<a class="link external" href="www.google.de">AT HOME</a>');
    button.append(link);
    button2.append(link2);
    button3.append(link3);
    //downText.text(notificationBuyCall.downText);
    $$('#noti-default-btn').append(button);
    $$('#noti-default-btn').append(button2);
    $$('#noti-default-btn').append(button3);
}
/*
function updateWeatherHtml () {
  	// Change the src attribute of the icon image using jQuery .attr()
  	$('#iconimage').attr('src', 'img/rain.png')
  	$('#summary').html('Rain in the evening');
    $('#temperature').html('8° C');
    $('#winddisplay').html('8 km/h');
    $('#humiditydisplay').html('68%');
  	$('#datedisplay').html('Tomorrow');
	$('#buttonDateRight').hide();
}
 */





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

                 $('#noti-expand').hide();
                 $('#noti-less').show();
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
