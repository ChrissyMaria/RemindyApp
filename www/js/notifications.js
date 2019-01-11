//  onclick="$('#datedisplay').html('Today'); $('#buttonDateLeft').hide();  $('#buttonDateRight').show(); "


// --------------------------- Change Notification Height ------------------------------
/*idea: Function which receives the height of the notification div and
calculates the css 'top' attribute new - depending on size of notificatin*/
function notiHeightCalculator() {

    const notiHeight = document.getElementById('notification').clientHeight; //get #myDiv

    const newHeight = 350 - ((notiHeight - 102)/2);
    console.log(newHeight);
    notification.style.top = newHeight + 'px';
}

//Sets time of notification +1 after every 60 seconds - just an idea
function notiTime() {

    let min = 2;

    setTimeout(() => {
        $$('#noti-time').html(min);
    }, 60000);

    setInterval(() => {
        $$('#noti-time').html((min++) + " min ago");
        console.log(min);
        }, 60000);
}

function clearNotification(){
    $$('#notification').empty();
}

// --------------------------- Notification Default Header ------------------------------
//builds the standard header of a notification (which is always the same) and controls the expand button
function createNotification() {
    /*var icon = $$('<img id="noti-img" />');
    icon.src(notificationHeader.icon);
    $$('#noti-header').append(subtitle);*/

    const notiHeader = $$('<div id="noti-header"/>');
    $$('#notification').append(notiHeader);

        const notiImg = $$('<img src="images/notify_logo.png" />');
        $$('#noti-header').append(notiImg);

        const appName = $$('<span id="noti-appName"></span>');
        appName.text(notificationHeader.title);
        $$('#noti-header').append(appName);

        const time = $$('<span id="noti-time"></span>');
        time.html('now');
        $$('#noti-header').append(time);

        const expand = $$('<i class="material-icons" id="noti-expand"></i>');
        expand.text(notificationHeader.expand);
        $$('#noti-header').append(expand);

        const less = $$('<i class="material-icons" id="noti-less"></i>');
        less.text(notificationHeader.less);
        $$('#noti-header').append(less);
        $$('#noti-less').hide();

    const notiSubtitle = $$('<div id="noti-subtitle"/>');
    $$('#notification').append(notiSubtitle);

    const notiText = $$('<div id="noti-text"/>');
    $$('#notification').append(notiText);

    const notiBtn = $$('<div id="noti-default-btn" class="card-footer"/>');
    $$('#notification').append(notiBtn);


    // --------------------------- CLICK LISTENER ------------------------------
    //click listeners - if someone presses on expand_more or expand_less icon button will show or hide
    $$('#noti-expand').on('click', function () {
        $$('#noti-expand').hide();
        $$('#noti-less').show();
        document.getElementById("noti-default-btn").style.display = "flex"; //you can't use the $ in this case
        console.log('Button with id ' + $(this).attr('id') +' clicked');
    });

    $$('#noti-less').on('click', () => {
        $$('#noti-less').hide();
        $$('#noti-expand').show();
        $$('#noti-default-btn').hide();
        $$('#downText').hide();
    });
}

// --------------------------- BUY CALL NOTIFICATION ------------------------------
function buyCallNotification() {
    // Create notification object
    console.log("Notification here.");
    document.getElementById("notification").style.display = "block";

    //Empties notification div and fills it with new content
    clearNotification();
    createNotification();

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

    notiTime();
}

function buyMedicine() {
    // Create notification object
    console.log("Notification here.");
    document.getElementById("notification").style.display = "hide";

    clearNotification();
    createNotification();

    const subtitle = $$('<p></p>');
    subtitle.text(notificationBuyCall.subtitle);
    $$('#noti-subtitle').append(subtitle);

    const text = $$('<p></p>');
    text.text(notificationBuyCall.text);
    $$('#noti-text').append(text);

    const downText = $$('<p id="downText"></p>');
    downText.text(notificationBuyCall.downText);
    $$('#noti-text').append(downText);

    //Buttons
    //TODO I'd like to save buttons in arrays but I'm not sure if it makes sense
    const button = $$('<span class="noti-btn">');
    const button2 = $$('<span class="noti-btn">');
    const link = $$('<a class="link external" href="https://www.blinkhealth.com/l-thyroxine-sodium"><i class="material-icons">add_shopping_cart</i>BUY</a>');
    const link2 = $$('<a class="link external" href="tel:+436643755739"><i class="material-icons">call</i>CALL DOCTOR</a>');
    button.append(link);
    button2.append(link2);

    //downText.text(notificationBuyCall.downText);
    $$('#noti-default-btn').append(button);
    $$('#noti-default-btn').append(button2);
}

// --------------------------- INTAKE REMINDER NOTIFICATION ------------------------------

function takeNotification() {
    console.log("Notification here.");
    document.getElementById("notification").style.display = "block";

    clearNotification();
    createNotification();

    const subtitle = $$('<p id="sub"></p>');
    subtitle.text(notificationTake.subtitle);
    $$('#noti-subtitle').append(subtitle);

    const text = $$('<p id="txt"></p>');
    text.text(notificationTake.text);
    $$('#noti-text').append(text);

    const downText = $$('<p id="downText"></p>');
    const btnLink1 = $$('<a class="col button button-outline color-black" onclick="delayMedicineIntakeTime(1)">' +
        '<i class="material-icons">access_time</i>SET ANOTHER DEFAULT TIME</a>');
    const btnLink2 = $$('<a class="col button button-outline color-black" ' +
        'onclick="delayMedicineIntakeLocation(&quot;openmaps&quot;)">' +
        '<i class="material-icons">location_on</i>SET ANOTHER DEFAULT LOCATION</a>');
    downText.append(btnLink1);
    downText.append(btnLink2);
    $$('#noti-text').append(downText);

    //Buttons
    //TODO I'd like to save buttons in arrays but I'm not sure if it makes sense
    const button = $$('<span class="noti-btn-middle">');
    const button2 = $$('<span class="noti-btn">');
    const button3 = $$('<span class="noti-btn">');
    const link = $$('<a onclick="takenMedicationNotification()">TAKEN!</a>');
    const link2 = $$('<a onclick="delayMedicineIntakeTime(1)">IN 1 HOUR</a>');    //1 is the hour
    const link3 = $$('<a onclick="delayMedicineIntakeLocation(&quot;home&quot;)">AT HOME</a>');  //1 is home
    button.append(link);
    button2.append(link2);
    button3.append(link3);
    //downText.text(notificationBuyCall.downText);
    $$('#noti-default-btn').append(button);
    $$('#noti-default-btn').append(button2);
    $$('#noti-default-btn').append(button3);

    notiTime();
}

function disappearingButtons() {     //let the buttons disappear
    $$('#noti-default-btn').empty();
    $$('#noti-default-btn').hide();
    $$('#noti-less').hide();
    $$('#noti-expand').hide();
}

function takenMedicationNotification() {
    console.log("TAKE IT IN!");

    $$('#sub').html('You have taken your ' + ciprofloxacin.name + '!');
    $$('#txt').html('Future-You says "Thank you!"');
    disappearingButtons();

    //TODO SET COUNT -1 OF PILLS
    //ciprofloxacin.pills_left - 1; or something like this
}

function delayMedicineIntakeTime(hour) {
    console.log("NOT NOW!");

    if (hour == 1){
        console.log("Delay for 1 hour!")

        $$('#sub').html('You have delayed your intake by ' + hour + ' hour!');
        $$('#txt').html('New reminder set.');
        disappearingButtons();
    }
}

function delayMedicineIntakeLocation(location) {
    console.log("NOT NOW!");

    if (location == "home"){
        console.log("Homeboy")

        $$('#sub').html('Take your medication when you arrive at ' + location + '!');
        $$('#txt').html('New reminder set.');
        disappearingButtons();
    } else if (location == "openmaps") {
        console.log("Insert Google Maps");
        $$('#downText').remove();
        $$('#noti-subtitle').remove();
        $$('#noti-text').empty();
        $$('#noti-text').html('<img src="images/maps.png" />');
    }
}


//whatever that is :-D
function off() {
    document.getElementById("overlay").style.display = "none";
}






// --------------------------- SWIPE LISTENERS ------------------------------
    /*SOURCE: https://www.kirupa.com/html5/detecting_touch_swipe_gestures.htm */

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
                 var noti = document.getElementById('notification');
                console.log(diffTime + "swiped left");
                 noti.style.animationName = "left";

             } else if (diffX <0){
                 // swiped right
                 console.log("swiped right");
                 var noti = document.getElementById('notification');
                 noti.style.animationName = "right";
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

                 // --------------------------- Swiping down actions ------------------------------

                 $('#noti-expand').hide();
                 $('#noti-less').show();
                 document.getElementById("noti-default-btn").style.display = "flex";
                 notiHeightCalculator()
                 // --------------------------- Slow swiping ------------------------------
                 // idea: this should represent a slow down scrolling --> if a certain time is exceeded (300ms) && the position (-50) is reached
                 if (diffY <= 90 && diffTime > 300) {
                     console.log("DOOOOWN we go!")

                     document.getElementById("downText").style.display = "block";
                     notiHeightCalculator()

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
