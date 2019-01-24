// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app = new Framework7({
    root: '#app', // App root element
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto', // Automatic theme detection
    fastClicks: false,
    // App root data
    data: function () {
        return {
            user: {
                firstName: 'John',
                lastName: 'Doe',
            },

            medicationList: [thyroxin, aristelle, ibu],
            medication_times: []

        };
    },


    // App root methods
    methods: {
        helloWorld: function () {
            app.dialog.alert('Hello World!');
        },
    },
    // App routes
    routes: routes,
    on: {
        pageInit: function () {

          //clear content
          $$('#test').empty();
          $$('#meds_today').empty();
          var open_link = false;



            // --------------------------- Fill Cards ------------------------------
            //idea: go through list with all medicaments and add them dynamically
            for (var i = 0; i < this.data.medicationList.length; i++) {
                // ###### general container
                var container = $$('<div class="card demo-card-header-pic"/>');
                // ###### header
                var container_header = $$('<div style="color:#373737" \n' +
                    '               class="card-header align-items-flex-end"/>');
                var trash = $$('<i class="material-icons greyColor">clear </i>');
                container_header.text(this.data.medicationList[i].name); //insert medication name
                container_header.append(trash);
                // ###### content
                var card_content = $$('<div class="card-content card-content-padding cabinet"/>');
                var p_last_until = $$(' <p class="date last_until"></p>');
                var text = $$('<p class="med_description"></p>');
                //p_last_until: calculate how long pills will last
                var pills_amount = 0;
                for(var j=0; j<this.data.medicationList[i].intake.length; j++) {
                    pills_amount += this.data.medicationList[i].intake[j].amount;
                }
                var days = this.data.medicationList[i].pills_left / pills_amount;
                var dat = new Date();
                dat.setDate(dat.getDate() + parseInt(days));
                var options = {year: 'numeric', month: 'long', day: 'numeric'};  //for date output
                p_last_until.text("Remaining pills will last until " + dat.toLocaleDateString("en-US", options));
                //text: medication info
                text.text(this.data.medicationList[i].shortInfo);
                //... finally: append to content
                card_content.append(p_last_until, text);
                // ###### link: read more
                var link_container = $$('<div class="card-footer">');

                var restock = $$('<a class="external" id='+this.data.medicationList[i].link+'><i class="material-icons primaryColor shopping">add_shopping_cart</i></a>');
                var link = $$('<a href="#" class="link open-alert">Read more</a>');
                link_container.append(link, restock);

                //reminder for restocking
                if(days <=7 ) {
                    $$(p_last_until).css({'color': '#005FAC', 'font-weight': 'bold'});
                    $$(restock).addClass('wibble').css({'animation-delay':'1s', 'animation-duration': '.5s'});
                }
                // ###### fill container and append to index
                container.append(container_header, card_content, link_container);
                $$('#test').append(container);
            }

            //######################### Delete Function #########################
            $$('.greyColor').click(function (event) {
                var target = event.target;
                app.dialog.confirm('Are you sure you want to delete this medication?', 'Remindy', () => {
                    $$(target).parent().parent().remove();
                });
            });

            // ######################### Buy medication #########################
            $$('.shopping').on('click', function () {
                app.dialog.confirm('Do you want to restock this medication?', 'Remindy', function () {
                    app.dialog.preloader('You will be redirected to: www.blinkhealth.com');
                    setTimeout(function () {
                        app.dialog.close();
                    }, 2000);
                    open_link = true;
                    console.log("dialog: " + open_link);
                });
                });
            //Open the right link with time delay of 1 second
            $$('.external').click(function(evt){
                console.log("external1: " + open_link);
                setTimeout(function() {
                    if(open_link) {
                        var target = evt.target;
                        var href = $$(target).parent().attr('id');
                        console.log(href);
                        window.open(href, "_self");
                        open_link = false;
                        console.log("external2: " + open_link);
                    }
                }, 4000);
            });

            // --------------------------- Today's View ------------------------------
            // idea: look for every medication how many pills per day and when to take
            //1. Sortiere Array nach Uhrzeiten
            this.data.medication_times = [];
            for (var i = 0; i < this.data.medicationList.length; i++) {
                console.log("i: " + i + " name: " + this.data.medicationList[i].name );
                for(var j = 0; j < this.data.medicationList[i].intake.length; j++) {
                    console.log("j: " + j);
                    var name = this.data.medicationList[i].name;
                    var time_to_take = this.data.medicationList[i].intake[j].time;
                    var tak = this.data.medicationList[i].intake[j].taken;
                    this.data.medication_times.push({name: name, time_to_take: time_to_take, taken: tak});
                }
            }

            //Sortieren
            this.data.medication_times.sort(function(a,b){
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(a.time_to_take) - new Date(b.time_to_take);
            });

            //2. Erstelle HTML
            var ul = $$('<ul/>');
            for (var i = 0; i < this.data.medication_times.length; i++) {
                var li = $$('<li/>');
                var item_content = $$('<div class="item-content"/>');
                var item_media = $$('<div class="item-media"/>');

                //Icon and time: since we may have more than 1 intake, we have to go through all possible intakes of medication
                var icon; //icon
                var item_after = $$('<div class="item-after"/>'); //time to take
                if(this.data.medication_times[i].taken) {
                    //already taken: checkbox checked
                    icon = $$('<i class="material-icons"> check_circle_outline</i>');
                } else {
                    //still to be taken: empty checkbox
                        icon = $$('<i class="material-icons">radio_button_unchecked</i>');
                }
                //set time
                var hours = (this.data.medication_times[i].time_to_take.getHours() < 10 ? '0' : '') + this.data.medication_times[i].time_to_take.getHours();
                var minutes = (this.data.medication_times[i].time_to_take.getMinutes() < 10 ? '0' : '') + this.data.medication_times[i].time_to_take.getMinutes();
                item_after.text(hours + ":" + minutes);


                item_media.append(icon);
                item_content.append(item_media);

                var item_inner = $$('<div class="item-inner"/>');
                var item_title = $$(' <div class="item-title"/>');
                item_title.text(this.data.medication_times[i].name);
                item_inner.append(item_title, item_after);
                item_content.append(item_inner);
                li.append(item_content);
                ul.append(li);
            }
            $$('#meds_today').append(ul);


            // dead end pages
            $$('.open-alert').on('click', function () {
                app.dialog.alert("Sorry, this function is not working yet. But we'll work on it :)", "Remindy");
            });

        },
    }
});


// --------------------------- LOGIN ------------------------------

var login = app.loginScreen.create({
    el: '#my-login-screen'
})

login.open(function () {

});

login.close(function () {
    var username = $$('#my-login-screen [name="username"]').val();
    var password = $$('#my-login-screen [name="password"]').val();

    // Close login screen
    app.loginScreen.close('#my-login-screen');

    // Alert username and password
    app.dialog.create({
        title: 'Remindy',
        text: 'Welcome ' + username + '!',
    }).open();

    setTimeout(function () {
        app.dialog.close();
    }, 2000);
});


$$('.login-screen .list-button').on('click', function () {
    var username = $$('.login-screen input[name = "username"]').val();
    var pwd = $$('.login-screen input[name = "password"]').val();
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
    url: '/'
});





