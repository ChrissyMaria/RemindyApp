// --------------------------- Change Notification Height ------------------------------
/*idea: Function which receives the height of the notification div and
calculates the css 'top' attribute new - depending on size of notification*/

// Create center toast
const toastCenter = app.toast.create({
    text: 'Intake delayed by 1 hour.',
    position: 'center',
    closeTimeout: 2000,
});

function notiHeightCalculator() {

    const notiHeight = document.getElementById('notification').clientHeight; //get #myDiv

    const newHeight = (732 - notiHeight) / 2;
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
    $$('#noti-header').empty();
    $$('#noti-subtitle').remove();
    $$('#noti-text').remove();
    $$('#downText').remove();
    $$('#noti-default-btn').remove();
    $$('#googleMaps').hide();
}

// --------------------------- Notification Default Header ------------------------------
//builds the standard header of a notification (which is always the same) and controls the expand button
function createNotification() {

        const notiImg = $$('<img src="../www/images/notify_logo.png" alt="notify_logo"/>');
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
        notiHeightCalculator();
    });

    $$('#noti-less').on('click', () => {
        $$('#noti-less').hide();
        $$('#noti-expand').show();
        $$('#noti-default-btn').hide();
        $$('#downText').hide();
        notiHeightCalculator();
    });
}

// --------------------------- BUY CALL NOTIFICATION ------------------------------
function buyCallNotification() {
    // Create notification object
    console.log("Notification here.");
    document.getElementById("notification").style.display = "block";

    //Empties notification div and fills it with new content
    createNotification();

    let subtitle = $$('<p></p>');
    subtitle.text(notificationBuyCall.subtitle);
    $$('#noti-subtitle').append(subtitle);

    let text = $$('<p></p>');
    text.text(notificationBuyCall.text);
    $$('#noti-text').append(text);

    let downText = $$('<p id="downText"></p>');
    downText.text(notificationBuyCall.downText);
    $$('#noti-text').append(downText);

    //Append buttons needed for purchase to notification
    const button = $$('<span class="noti-btn">');
    const button2 = $$('<span class="noti-btn">');
    const link = $$('<a onclick="buyMedNotiScreen()"><i class="material-icons">add_shopping_cart</i>BUY</a>');
    const link2 = $$('<a class="link external" href="tel:+436643755739"><i class="material-icons">call</i>CALL DOCTOR</a>');
    button.append(link);
    button2.append(link2);
    //downText.text(notificationBuyCall.downText);
    $$('#noti-default-btn').append(button);
    $$('#noti-default-btn').append(button2);

    notiTime();
    notiHeightCalculator();
}

function buyMedNotiScreen() {
    clearNotification();
    createNotification();

    let subtitle = $$('<p></p>');
    subtitle.text(notificationBuyCall.subtitle);
    $$('#noti-subtitle').append(subtitle);

    let text = $$('<p></p>');
    text.text(notificationBuyCall.sub_buy);
    $$('#noti-text').append(text);

        const divBuy = $$('<div id="purchaseField"/>');
        $$('#noti-text').append(divBuy);
        const imgBuy = $$('<img src="images/medNear_logo.jpg" alt="Pharmacy Logo" id="purchaseImg"/>');
        $$('#purchaseField').append(imgBuy);
        const buySpan = $$('<span id="purchaseSpan"/>');
        $$('#purchaseField').append(buySpan);
            const buyName = $$('<p/>');
            buyName.text(ibu.name);
            $$('#purchaseSpan').append(buyName);
            const buyPrice = $$('<p><strong></strong></p>');
            buyPrice.text("€10,50");
            $$('#purchaseSpan').append(buyPrice);
            const buyLink = $$('</p>');
            buyLink.html('<a href="' + notificationBuyCall.link + '" >Link to Pharmacy</a>');
            $$('#purchaseSpan').append(buyLink);

    //Buttons
    let button = $$('<span class="noti-btn">');
    let button2 = $$('<span class="noti-btn-middle">');
    let link = $$('<a onclick="confirmOrder()"><i class="material-icons">add_shopping_cart</i>CONFIRM ORDER</a>');
    let link2 = $$('<a onclick="cancelPurchase()">CANCEL</a>');
    button.append(link);
    button2.append(link2);
    //downText.text(notificationBuyCall.downText);
    $$('#noti-default-btn').append(button2);
    $$('#noti-default-btn').append(button);
    document.getElementById("noti-default-btn").style.display = "flex";

    notiTime();
    notiHeightCalculator();
}

function confirmOrder() {
    clearNotification();
    createNotification();

    let subtitle = $$('<p></p>');
    subtitle.text(notificationBuyCall.buy_confirmation_title);
    $$('#noti-subtitle').append(subtitle);

    let text = $$('<p></p>');
    text.text(notificationBuyCall.confirmation);
    $$('#noti-text').append(text);

    $$('#noti-default-btn').hide();
    $$('#downText').remove();
    $$('#noti-expand').hide();
}

// --------------------------- INTAKE REMINDER NOTIFICATION ------------------------------

function takeNotification() {
    console.log("Notification here.");
    document.getElementById("notification").style.display = "block";

    createNotification();

    const subtitle = $$('<p id="sub"></p>');
    subtitle.text(notificationTake.subtitle);
    $$('#noti-subtitle').append(subtitle);

    const text = $$('<p id="txt"></p>');
    text.text(notificationTake.text);
    $$('#noti-text').append(text);

    const downText = $$('<p id="downText"></p>');
    const btnTime = $$('<span></span>');
    const btnLoc = $$('<span></span>');
    const linkTime = $$('<a onclick="showRadioButtons();"><i class="material-icons">access_time</i>SET ANOTHER DEFAULT TIME</a><p> </p>');
    const linkLoc = $$('<a onclick="delayMedicineIntakeLocation(&quot;openmaps&quot;)"><i class="material-icons">location_on</i>SET ANOTHER DEFAULT LOCATION</a>');
    btnTime.append(linkTime);
    btnLoc.append(linkLoc);
    downText.append(btnTime);
    downText.append(btnLoc);
    $$('#noti-text').append(downText);

    //Buttons
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
    notiHeightCalculator();
}

function disappearingButtons() {     //let the buttons disappear
    $$('#noti-default-btn').empty();
    $$('#noti-default-btn').hide();
    $$('#noti-less').hide();
    $$('#noti-expand').hide();
    notiHeightCalculator();
}

function takenMedicationNotification() {
    console.log("TAKE IT IN!");

    $$('#sub').html('You have taken your ' + ibu.name + '!');
    // adds a random message to the notification
    var myArray = ['There you go!', 'Good Job!', 'Better health than wealth!', 'Future-You says "Thank you!"', 'Be proud!', 'It is health that is real wealth', 'Who is awesome? You are!'];
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    $$('#txt').html(rand);
    $$('#downText').hide();
    disappearingButtons();


    //TODO SET COUNT -1 OF PILLS
    //ibu.pills_left - 1; or something like this

}

function showRadioButtons() {
    clearNotification();
    createNotification();

    //$$('#noti-text').hide();
    $$('#noti-default-btn').remove();
    $$('#radioBtnList').show();
    const notiBtn = $$('<div id="noti-default-btn" class="card-footer"/>');
    $$('#notification').append(notiBtn);

    //Buttons
    var button = $$('<span class="noti-btn">');
    var button2 = $$('<span class="noti-btn-middle">');
    var link = $$('<a onclick="delayMedicineIntakeTime(radiobuttons())">DELAY INTAKE</a>');
    var link2 = $$('<a onclick="cancelDelay()">CANCEL</a>');
    button.append(link);
    button2.append(link2);
    //downText.text(notificationBuyCall.downText);
    $$('#noti-default-btn').append(button2);
    $$('#noti-default-btn').append(button);
    document.getElementById("noti-default-btn").style.display = "flex";
}

function delayMedicineIntakeTime(hour) {

    clearNotification();
    createNotification();

    const subtitle = $$('<p id="sub"></p>');
    subtitle.text(notificationTake.subtitle);
    $$('#noti-subtitle').append(subtitle);

    const text = $$('<p id="txt"></p>');
    text.text(notificationTake.text);
    $$('#noti-text').append(text);

    $$('#sub').html('New reminder set.');
    switch(hour) {
        case "0,5":
            $$('#txt').html('You have delayed your intake by half an hour!');
            break;
        case 1:
            $$('#txt').html('You have delayed your intake by ' + hour + ' hour!');
            break;
        case "2":
        case "6":
            $$('#txt').html('You have delayed your intake by ' + hour + ' hours!');
            break;
        default:
            $$('#txt').html('You have delayed your intake!');
    }


    $$('#noti-default-btn').remove();
    $$('#noti-less').remove();
    $$('#noti-expand').remove();
    $$('#radioBtnList').hide();
    //$$('#noti-text').show();
    //$$('#noti-subtitle').show();

    let timer = hour * 3600000;
    //let timer = hour * 2000;
    console.log(timer);
    let delayTimeout = setTimeout(delayTime, timer);


    console.log(hour);
    console.log(timer);
    disappearingButtons();

    function delayTime() {
        clearNotification();

        window.clearTimeout(delayTimeout);
        takeNotification();
        console.log('Time delay set');
    }
}

function radiobuttons() {
    var delayOptions = document.forms[0];
    var hourRadioBtn = 0;
    var i;
    for (i = 0; i < delayOptions.length; i++) {
        if (delayOptions[i].checked) {
            hourRadioBtn = delayOptions[i].value;
        }
    }

    return hourRadioBtn;
    //document.getElementById("order").value = "You delayed your noti by" + txt;
}

function delayMedicineIntakeLocation(location) {
    console.log("NOT NOW!");

    if (location == "home"){
        console.log("Homeboy")
        getLocation(x = 48.148669, y = 11.568594, nameoflocation ='Arcisstraße 21, München');

    } else if (location == "openmaps") {
        console.log("Insert Google Maps");
        $$('#downText').remove();
        $$('#noti-subtitle').hide();
        $$('#noti-default-btn').hide();
        $$('#txt').hide();
        //$$('#noti-text').empty();
        $$('#googleMaps').show();
        notiHeightCalculator();
        //$$('body').on('touchstart','.pac-container',function(e){e.stopImmediatePropagation();})
        $$('.pac-container').on('touchstart', function(e){e.stopPropagation();})

        //As soon as user clicks on a location the confirmation-link becomes blues
        $$('.pac-container').on('touchstart', function(){
            document.getElementById("confirm-btn").classList.remove("inactive-btn");

        })
        $$('.pac-container').on('touchstart', function(){
            document.getElementById("confirm-btn").classList.remove("inactive-btn");

        })

        $$('#containerForFavourites').on('touchstart', function(){
            document.getElementById("confirm-btn").classList.remove("inactive-btn");

        })

        /*if ( document.styleSheet.href == "framework7/css/framework7.min.css") {
            var stylesheet = document.styleSheet.href("href=\"framework7/css/framework7.min.css\")

            void(document.styleSheets.item(i).disabled=true);
        }*/


        //$$('#noti-text').html('<div id="mapholder"/>');
    }
}

function cancelDelay() {
    /*$$('#noti-header').empty();
    $$('#noti-subtitle').remove();
    $$('#noti-text').remove();
    $$('#downText').remove();
    $$('#noti-default-btn').remove();
    $$('#googleMaps').hide();*/

    clearNotification();
    takeNotification();
    $$('#downText').show();
    $$('#noti-expand').hide();
    $$('#radioBtnList').hide();
    $$('#noti-less').show();
    document.getElementById("noti-default-btn").style.display = "flex";

    notiHeightCalculator();
}

function cancelPurchase() {

    clearNotification();
    buyCallNotification();
    $$('#noti-expand').hide();
    $$('#noti-less').show();
    document.getElementById("noti-default-btn").style.display = "flex";

    notiHeightCalculator();
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
     }

     function moveTouch(e) {
         if (initialX === null) {
             return;
         }

         if (initialY === null) {
             return;
         }

         /*if($$('#googleMaps').css('display') != 'none') {
             console.log("Im out");
             return; //stop the execution of function
         }*/

         let currentX = e.touches[0].clientX;
         let currentY = e.touches[0].clientY;

         const diffX = initialX - currentX;
         const diffY = initialY - currentY;
         nowTime = + new Date();
         const diffTime = nowTime - initialTime;

         if (Math.abs(diffX) > Math.abs(diffY)) {
             // sliding horizontally
             if (diffX > 0) {
                 // swiped left
                 let noti = document.getElementById('notification');
                    console.log(diffTime + "swiped left");
                    noti.style.animationName = "left";

                 //toast appears after 1/2 second and only if the intake reminder is open
                 if (document.getElementById('sub') != null) {
                     if(document.getElementById('sub').innerHTML == "Take your Ibuprofen now!") {
                         setTimeout(() => {
                             toastCenter.open();
                         }, 500);
                         delayMedicineIntakeTime(1);
                     }
                 }

                 setTimeout(() => {
                     $$('#noti-header').empty();
                     $$('#noti-subtitle').remove();
                     $$('#noti-text').remove();
                     $$('#downText').remove();
                     $$('#noti-default-btn').remove();
                     $$('#googleMaps').hide();

                     noti.style.display="none";
                     noti.style.animationName = "none";
                 }, 990);

             } else if (diffX <0){
                 // swiped right
                 console.log("swiped right");
                 let noti = document.getElementById('notification');
                 noti.style.animationName = "right";

                 //toast appears after 1/2 second and only if the intake reminder is open
                if (document.getElementById('sub') != null) {
                    if(document.getElementById('sub').innerHTML == "Take your Ibuprofen now!") {
                        setTimeout(() => {
                            toastCenter.open();
                        }, 500);
                        delayMedicineIntakeTime(1);
                    }
                 }


                 setTimeout(() => {
                     $$('#noti-header').empty();
                     $$('#noti-subtitle').remove();
                     $$('#noti-text').remove();
                     $$('#downText').remove();
                     $$('#noti-default-btn').remove();
                     $$('#googleMaps').hide();

                     noti.style.display="none";
                     noti.style.animationName = "none";
                 }, 990);

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
                 console.log(diffY + " , " + diffTime);

                 // --------------------------- Swiping down actions ------------------------------

                 $('#noti-expand').hide();
                 $('#noti-less').show();
                 document.getElementById("noti-default-btn").style.display = "flex";
                 notiHeightCalculator()
                 // --------------------------- Slow swiping ------------------------------
                 // idea: this should represent a slow down scrolling --> if a certain time is exceeded (300ms) && the position (-50) is reached
                 if (diffY <= 90 && diffTime > 300) {
                 //if (diffY <= -10 && diffTime > 350) {
                     console.log("DOOOOWN we go!");
                     console.log(diffY + " , " + diffTime);

                     document.getElementById("downText").style.display = "block";
                     notiHeightCalculator();

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