//
//script for geolocation --> here all java.script regarding getting the location and working with map is stored
//

/*-----------------------COMPARING LOCATION----------------------*/

// this code gets the place variable from the map and is comparing the set location (by map oder directly via button) with actual position

var demo = document.getElementById("demo");


function getLocation(x = [], y= [], nameoflocation = '') {
    setlat = x;
    setlong = y;
    if (nameoflocation != '') {
        console.log('You have set your destination to '+  nameoflocation);
        console.log("Latitude is " + setlat);
        console.log("Longitude is " + setlong);

        // confirmation page when location reminder is set
        $$('#sub').html('Take your medication when you arrive at <br> <strong>'+ nameoflocation + '</strong> !');
        $$('#txt').html('New reminder set.');

        var mapHolder = $$('<div id="mapholder"/>');
        $$('#noti-text').append(mapHolder);

        // variable for the given location data
        var latlon = setlat + "," + setlong;

        // including static map
        var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x150&&markers=color:red%7C"+setlat+","+setlong+"&sensor=false&key=AIzaSyAmnJZGP15lghfFG0JqHeH5EIQDjdSTncU";

        document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
        disappearingButtons();
    }

    // watchPosition is watching the currentPosition and is giving this value to showPosition which has the set Location as well
    if (navigator.geolocation) {
        id = navigator.geolocation.watchPosition(givenotification);
    } else {
        demo.innerHTML = "Geolocation is not supported by this browser.";
    }
}


function givenotification(position) {
    //this function gets the actual position from watchPOsition and compares it with set position -> fires if they differ not more than 100

    //variable for actual position
    var actualLatLng = new google.maps.LatLng({lat: position.coords.latitude, lng: position.coords.longitude});
    var givenLatLng = new google.maps.LatLng({lat: setlat, lng: setlong});


    console.log('actual LatLng is' + actualLatLng);
    console.log('givenLatLng is ' + givenLatLng);

    // this method compares your actual position (actualLatLng) with the setPosition for Reminder (givenLatLng).
    // If you are less than 100 m away, the notification fires




    // this is a backupt timer which fires if person does not reach location in 5 hours
    var backuptimer = setTimeout(backupNoti, 18000000);

    function backupNoti() {
        $$('#noti-header').empty();
        $$('#noti-subtitle').remove();
        $$('#noti-text').remove();
        $$('#noti-default-btn').remove();
        window.clearTimeout(backuptimer);
        takeNotification();
        navigator.geolocation.clearWatch(id);
        console.log('Backup timeout');

    }

// fires if acutal position is less than 100m away from given location
    if(google.maps.geometry.spherical.computeDistanceBetween(actualLatLng,givenLatLng)<100){
        window.clearTimeout(backuptimer);
        $$('#noti-header').empty();
        $$('#noti-subtitle').remove();
        $$('#noti-text').remove();
        $$('#noti-default-btn').remove();
        takeNotification();
        console.log('arrived in location, reminder set');
        //alert('You have arrived!');
        navigator.geolocation.clearWatch(id);
        console.log("stopped watching");
    }



}


//script for maps//

// here same callback function for service.findPlaceFromQuery and navigator.geolocation.getCurrentPosition --> errorhandling


function handleLocationError(browserHasGeolocation) {
    console.log(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var place = results[i];
            // createMarker(results[i]);
            showplace(place);
        }
    }
}

/*-----------------------INIT MAP----------------------*/

//here the google map is initialized. This function is called by the google maps api script in html

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.264846, lng: 11.671344},
        zoom: 13,
        disableDefaultUI: true
    });
    var card = document.getElementById('pac-card');
    var input = document.getElementById('pac-input');
    var types = document.getElementById('type-selector');
    var strictBounds = document.getElementById('strict-bounds-selector');
    var favouriteCards = document.getElementById('containerForFavourites');

    //autocomplete field and favourite cards pushed to map

    map.controls[google.maps.ControlPosition.TOP_CENTER].push(card);
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(favouriteCards);

    //autocomplete defined

    var autocomplete = new google.maps.places.Autocomplete(input);

    // Bind the map's bounds (viewport) property to the autocomplete object,
    // so that the autocomplete requests use the current map bounds for the
    // bounds option in the request.
    autocomplete.bindTo('bounds', map);

    // Set the data fields to return when the user selects a place.
    autocomplete.setFields(
        ['address_components', 'geometry', 'icon', 'name']);


    //gets the current location and centers map or throws errors if not possible
    //notice: this only works for https pages in chrome, otherwise getting current position is not possible
    var location_timeout = setTimeout("handleLocationError(true)", 10000);
    navigator.geolocation.getCurrentPosition(function(position) {
        clearTimeout(location_timeout);
        console.log('location found');
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        map.setCenter(pos);
    }, function() {
        clearTimeout(location_timeout);
        console.log('location not found');
        handleLocationError(true);

    });


    //info Window is created for searched location
    var infowindow = new google.maps.InfoWindow();
    var infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });

    // header is styled
    var mapDiv = document.getElementById('title');
    title.style.fontSize="16px";


    /*-----------------------CREATE MAP BUTTONS----------------------*/

    const mapBtn = $$('<div id="noti-map-btn" class="card-footer"/>');
    $$('#googleMaps').append(mapBtn);
    var buttonSetLoc = $$('<span class="noti-btn-middle"/>');
    const linkSetLoc = $$('<a onclick=" " id="confirm-btn" class="inactive-btn">CONFIRM NEW LOCATION REMINDER</a>');
    buttonSetLoc.append(linkSetLoc);
    const btnCancel = $$('<span class="noti-btn">');
    const linkCancel = $$('<a onclick="cancelLocationReminder()">CANCEL</a>');
    btnCancel.append(linkCancel);
    buttonSetLoc.appendTo('#noti-map-btn');
    btnCancel.appendTo('#noti-map-btn');

    /*-----------------------SHOW PLACE----------------------*/

    //this function is core function of search process and is called by autocompleted field and when favourite card is clicked
    function showplace (place) {
        console.log('showplace called')

        //test if place is a real google maps place
        if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
        }

        console.log(place);

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
        }

        // set a marker to the searched position
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        // formatting the address for the info window
        var address = '';
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
            console.log("Latitude is " + place.geometry.location.lat());
            console.log("Longitude is " + place.geometry.location.lng());
            //getLocation(x=place.geometry.location.lat(), y=place.geometry.location.lng(), nameoflocation = place.name)
        }

        // jquery places do not support address_components but formatted_address (when clicked on favourite button)
        else if (place.formatted_address) {
            address = [place.formatted_address].join(' ');
        }
        else  {
            console.log('no address components')

        }

        infowindowContent.children['place-icon'].src = place.icon;
        infowindowContent.children['place-name'].textContent = place.name;
        infowindowContent.children['place-address'].textContent = address;

        //create Button to click
        // button gets the information of searched place now and is changing its color to blue
        buttonSetLoc
            .attr("destination", place.name)
            .attr("lat", place.geometry.location.lat())
            .attr("long", place.geometry.location.lng())
            .removeClass("inactive-btn")
            .click(function () {
                this.lat = $(this).attr('lat');
                this.long = $(this).attr('long');
                this.name = $(this).attr('destination');
                console.log(this);
                console.log(this.lat);
                console.log(this.long);
                console.log(this.name);
                this.lat = Number(this.lat);
                this.long = Number(this.long);

                // here the function from beginning is called which gets all the information about set place and is comparing it with current location
                getLocation(x = this.lat, y = this.long, nameoflocation = this.name);
                console.log('Location Reminder set');
                $$('#googleMaps').hide();
                $$('#txt').show();
                notiHeightCalculator();
            })

        infowindow.open(map, marker);
    }

    /*-----------------------defining favourite buttons----------------------*/

    // when clicked on the card, the function showPosition() is called, which gets the place that is set to query

    google.maps.event.addDomListener(placecard1, 'click', function() {
        console.log('1 was clicked!');

        // request defines which address should be passed and what fields of it
        var request = {
            query: 'Arcisstraße 21 München',
            fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry', 'icon'],
        };

        service = new google.maps.places.PlacesService(map);
        service.findPlaceFromQuery(request, (function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    var place = results[i];
                    // createMarker(results[i]);

                    //here show place is called and gets all the information
                    showplace(place);
                }
            }

        }));

    });

    google.maps.event.addDomListener(placecard2, 'click', function() {
        console.log('2 was clicked!');
        var request = {
            query: 'Forschungszentrum Garching',
            fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry', 'icon'],
        };

        service = new google.maps.places.PlacesService(map);
        service.findPlaceFromQuery(request, (function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    var place = results[i];
                    // createMarker(results[i]);
                    showplace(place);
                }
            }

        }));
    });

    google.maps.event.addDomListener(placecard3, 'click', function() {
        console.log('3 was clicked!');
        var request = {
            query: 'Wenkerstraße 17 Dortmund',
            fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry', 'icon'],
        };

        service = new google.maps.places.PlacesService(map);
        service.findPlaceFromQuery(request, (function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    var place = results[i];
                    // createMarker(results[i]);
                    showplace(place);
                }
            }

        }));
    });

    /*-----------------------AUTOCOMPLETE SEARCH----------------------*/
    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        showplace(place);


    });

// just a function which helps the google maps api to accept touch in  autocomplete window -> there is some interference with framework7 which creates a lot of bugs
    $$('.pac-container').on('touchend', function(e) {
        console.log('touchend');
        e.stopPropagation();
    });


}



