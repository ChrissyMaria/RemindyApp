var notificationBuyCall = {
    //no need for icon: '<img src="images/notify_logo.png">', // Remindy Logo
    title: 'Remindy',
    timeSinceNoti: 'now', //specify notification time  nowTime = + new Date(); diffTime = nowTime - initialTime;
    subtitle: 'Restock your ' + ciprofloxacin.name + '!',
    text: 'You only have ' + ciprofloxacin.pills_left/ciprofloxacin.per_day + ' days of medication left!',







        /* FRAMEWORK7 notification input

        + '<div style="    position: relative;\n' +
        '    margin-top: 10px;\n' +
        '    display: flex;\n' +
        '    justify-content: flex-end;"><span><a class="link popup-open" style="margin-right:10px;">' +
        '<i class="material-icons">add_shopping_cart</i>BUY</a></span>' + '<span><a class="link popup-open">' +
        '<i class="material-icons">call</i>CALL DOCTOR</a></span></div>',*/
}