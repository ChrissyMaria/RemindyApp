function showNotificationCallbackOnClose() {
    var self = this;
    // Create notification
    if (!self.notificationCallbackOnClose) {
        self.notificationCallbackOnClose = self.app.notification.create({
            //icon: '<i class="fa fa-medkit" style="color:#82c91e;"></i>',
            icon: '<img src="images/notify_logo.png">', // Remindy Logo
            title: 'Remindy',
            closeButton: false,
            titleRightText: 'now',
            subtitle: 'Medication Reminder',
            text: 'You are running out of Thyroxin' + '<div style="    position: relative;\n' +
                '    margin-top: 10px;\n' +
                '    display: flex;\n' +
                '    justify-content: flex-end;"><span><a class="link popup-open" style="margin-right:10px;"><i class="material-icons">add_shopping_cart</i>BUY</a></span>' + '<span><a class="link popup-open"><i class="material-icons">call</i>CALL DOCTOR</a></span></div>',
            swipeToClose: false,
            //closeOnClick: false,
            on: {
                close: function () {
                    //TODO: Insert callback function
                    app.dialog.alert('Notification closed');
                    console.log('Notification closed');
                    //self.$app.dialog.alert('Notification closed');
                },
            },
        });
    }

    /*--------------------------First attempt on adding a swipe listener------------------
 * -------------------------SOURCE: https://www.kirupa.com/html5/detecting_touch_swipe_gestures.htm */

   /* self.addEventListener("touchstart", startTouch, false);
    self.addEventListener("touchmove", moveTouch, false);

    // Swipe Up / Down / Left / Right
    var initialX = null;
    var initialY = null;

    function startTouch(e) {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
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

      

        if (Math.abs(diffX) > Math.abs(diffY)) {
            // sliding horizontally
            if (diffX > 0) {
                // swiped left
                console.log("swiped left");
            } else {
                // swiped right
                console.log("swiped right");
            }
        } else {
            // sliding vertically
            if (diffY > 0) {
                // swiped up
                //this.close();
                console.log("swiped up");
                //////////////////////Copied from framework7.js/////////////////
                if (
                    (touchesDiff < -10 && timeDiff < 300)
                    || (-touchesDiff >= notificationHeight / 1)
                ) {
                    notification.close();
                }
                ///////////////////////////////////////////////////////////////

            } else {
                // swiped down
                console.log("swiped down");
            }
        }

        initialX = null;
        initialY = null;

        e.preventDefault();
    };*/

    // Open Notification
    self.notificationCallbackOnClose.open();
}


