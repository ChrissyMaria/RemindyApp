//header of notifications should always be the same
var notificationHeader = {
    icon: 'images/notify_logo.png',
    title: 'Remindy',
    timeSinceNoti: 'now', //specify notification time  nowTime = + new Date(); diffTime = nowTime - initialTime;*/
    expand: 'expand_more',
    less: 'expand_less',
}

var notificationBuyCall = {
    subtitle: 'Restock your ' + ciprofloxacin.name + '!',
    text: 'You only have ' + ciprofloxacin.pills_left/ciprofloxacin.per_day + ' days of medication left!',
    downText: 'Buy some more or call your doctor.',
    //buttons: [buyMed, calDoc],
}

/*var buyMed = {
    link: 'https://www.blinkhealth.com/l-thyroxine-sodium',
    icon: 'add_shopping_cart',
    text: 'BUY',
}

var calDoc = {
    link: 'http://www.google.com',
    icon: 'call',
    text: 'CALL DOCTOR',
}*/

var notificationTake = {
    subtitle: 'Take your ' + ciprofloxacin.name + ' now!',
    text: 'Swipe down slowly for more delay options.',
    downText: 'Here should two further buttons appear.',
}





        /* FRAMEWORK7 notification input

        + '<div style="    position: relative;\n' +
        '    margin-top: 10px;\n' +
        '    display: flex;\n' +
        '    justify-content: flex-end;"><span><a class="link popup-open" style="margin-right:10px;">' +
        '<i class="material-icons">add_shopping_cart</i>BUY</a></span>' + '<span><a class="link popup-open">' +
        '<i class="material-icons">call</i>CALL DOCTOR</a></span></div>',*/
