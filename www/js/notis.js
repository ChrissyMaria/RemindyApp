
// HEADER of notifications is always the same and those are the values for it

var notificationHeader = {
    icon: 'images/notify_logo.png',
    title: 'Remindy',
    timeSinceNoti: ' ', // Minutes since notification appeared are handled in notifications.js in notiTime()
    expand: 'expand_more',
    less: 'expand_less',
};
///////////////////////////////////////////////////////

//// Values for both notifications (INTAKE & BUY):////

//-----------------INTAKE REMINDER------------------//

const notificationTake = {
    subtitle: 'Take your ' + ibu.name + ' now!',
    text: 'Drag down the notification for more delay options.',
};

//-------------------BUY REMINDER------------------//

// calculation of pills taken = needed in notificationBuyCall

var pills_amount = 0;
for(var j=0; j<ibu.intake.length; j++) {
    pills_amount += ibu.intake[j].amount;
}

var pills_left = ibu.pills_left/pills_amount;

var notificationBuyCall = {
    subtitle: 'Restock your ' + ibu.name + '!',
    text: 'You only have ' + pills_left + ' days of medication left!',
    downText: 'Buy some more or call your doctor.',

    sub_buy: 'Do you really want to buy ' + ibu.name + '?',
    link: ibu.link,

    buy_confirmation_title: 'New ' + ibu.name + ' ordered!',
    confirmation: 'Your ' + ibu.name + ' will be sent home. Find your order confirmation in your mailbox.'
};





