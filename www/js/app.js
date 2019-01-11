// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app = new Framework7({
    root: '#app', // App root element
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto', // Automatic theme detection
    //fastClicks:false,
    // App root data
    data: function () {
        return {
            user: {
                firstName: 'John',
                lastName: 'Doe',
            },

            medicationList: [thyroxin, aristelle],
            medication_times: [
                {
                    name: aristelle.name,
                    time_to_take: aristelle.intake[0].time
                },
                {
                    name: thyroxin.name,
                    time_to_take: thyroxin.intake[0].time
                }
            ]

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


            // --------------------------- Fill Cards ------------------------------
            //idea: go through list with all medicaments and add them dynamically
            for (var i = 0; i < this.data.medicationList.length; i++) {
                // ###### general container
                var container = $$('<div class="card demo-card-header-pic"/>');
                // ###### header
                var container_header = $$('<div style="background-color:#6087A7" \n' +
                    '               class="card-header align-items-flex-end"/>');
                container_header.text(this.data.medicationList[i].name); //insert medication name
                // ###### content
                var card_content = $$('<div class="card-content card-content-padding cabinet"/>');
                var p_last_until = $$(' <p class="date"></p>');
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
                var link = $$('<a href="#" class="link">Read more</a>');
                link_container.append(link);
                // ###### fill container and append to index
                container.append(container_header, card_content, link_container);
                $$('#test').append(container);
            }

            // --------------------------- Today's View ------------------------------
            // idea: look for every medication how many pills per day and when to take
            //1. Sortiere Array nach Uhrzeiten

            for (var i = 0; i < this.data.medicationList.length; i++) {
                console.log(i);
                for(var j = 0; i < this.data.medicationList[i].intake[j].length; j++) {
                    console.log(j);
                    this.data.medication_times.push({
                        name: this.data.medicationList[i].name,
                        time_to_take: this.data.medicationList[i].intake[j].time
                    });
                    console.log(this.data.medication_times);
                }
            }

            this.data.medication_times.sort(sortDates);

            function sortDates(a,b) {
                date_a = a.time_to_take.getDate();
                date_b = b.time_to_take.getDate();
                if (a > b) {
                    console.log(-1);
                    return -1;
                }

                else if (a == b){
                    console.log(0);
                    return 0;
                } // it's equals

                else {
                    console.log(1);
                    return 1;
                }

            }

            // for(var i=0; i<this.data.medication_times.length; i++){
            //     console.log(this.data.medication_times[i]);
            // }
          
            var ul = $$('<ul/>');
            for (var i = 0; i < this.data.medicationList.length; i++) {
                var li = $$('<li/>');
                var item_content = $$('<div class="item-content"/>');
                var item_media = $$('<div class="item-media"/>');

                //Icon and time: since we may have more than 1 intake, we have to go through all possible intakes of medication
                var icon; //icon
                var item_after = $$('<div class="item-after"/>'); //time to take
                for(var j=0; j<this.data.medicationList[i].intake.length; j++) {
                    if(this.data.medicationList[i].intake[j].taken) {
                        //already taken: checkbox checked
                        icon = $$('<i class="material-icons"> check_circle_outline</i>');

                    } else {
                        //still to be taken: empty checkbox
                        icon = $$('<i class="material-icons">radio_button_unchecked</i>');
                    }
                    //set time

                    var hours = (this.data.medicationList[i].intake[j].time.getHours() < 10 ? '0' : '') + this.data.medicationList[i].intake[j].time.getHours();
                    var minutes = (this.data.medicationList[i].intake[j].time.getMinutes() < 10 ? '0' : '') + this.data.medicationList[i].intake[j].time.getMinutes();
                    item_after.text(hours + ":" + minutes);
                }

                item_media.append(icon);
                item_content.append(item_media);

                var item_inner = $$('<div class="item-inner"/>');
                var item_title = $$(' <div class="item-title"/>');
                item_title.text(this.data.medicationList[i].name);
                item_inner.append(item_title, item_after);
                item_content.append(item_inner);
                li.append(item_content);
                ul.append(li);
            }
            $$('#meds_today').append(ul);

        },
    }
});



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





