//header of notifications should always be the same
var notificationHeader = {
    icon: 'images/notify_logo.png',
    title: 'Remindy',
    timeSinceNoti: ' ', //specify notification time  nowTime = + new Date(); diffTime = nowTime - initialTime;*/
    expand: 'expand_more',
    less: 'expand_less',
}

var notificationBuyCall = {
    subtitle: 'Restock your ' + ciprofloxacin.name + '!',
    text: 'You only have ' + ciprofloxacin.pills_left/ciprofloxacin.per_day + ' days of medication left!',
    downText: 'Buy some more or call your doctor.',

    sub_buy: 'Do you really want to buy ' + ciprofloxacin.name + '?',
    link: 'https://www.dealsfactory.net/store/pharmacy-online-discount-code/',

    buy_confirmation_title: 'New ' + ciprofloxacin.name + ' ordered!',
    confirmation: 'Check out for your order confirmation in your mailbox. Your ' + ciprofloxacin.name + ' will be sent home.'
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

const notificationTake = {
    subtitle: 'Take your ' + ciprofloxacin.name + ' now!',
    text: 'Swipe down slowly for more  delay options.',
    downText: 'Here should two further buttons appear.',
}

        /* FRAMEWORK7 notification input

        + '<div style="    position: relative;\n' +
        '    margin-top: 10px;\n' +
        '    display: flex;\n' +
        '    justify-content: flex-end;"><span><a class="link popup-open" style="margin-right:10px;">' +
        '<i class="material-icons">add_shopping_cart</i>BUY</a></span>' + '<span><a class="link popup-open">' +
        '<i class="material-icons">call</i>CALL DOCTOR</a></span></div>',*/