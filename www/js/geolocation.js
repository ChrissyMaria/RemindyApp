
//script for geolocation//

var demo = document.getElementById("demo");
function getLocation(x = [], y= [], nameoflocation = '') {
    setlat = x;
    setlong = y;
    if (nameoflocation != '') {
        console.log('You have set your destination to '+  nameoflocation);
        console.log("Latitude is " + setlat);
        console.log("Longitude is " + setlong);
        $$('#sub').html('Take your medication when you arrive at <br> <strong>'+ nameoflocation + '</strong> !');
        $$('#txt').html('New reminder set.');

        var mapHolder = $$('<div id="mapholder"/>');
        $$('#noti-text').append(mapHolder);

        // variable for the given location data
        var latlon = setlat + "," + setlong;


        var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x150&&markers=color:red%7C"+setlat+","+setlong+"&sensor=false&key=AIzaSyAmnJZGP15lghfFG0JqHeH5EIQDjdSTncU";

        document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
        disappearingButtons();
    }


    if (navigator.geolocation) {
        id = navigator.geolocation.watchPosition(showPosition);
    } else {
        demo.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    //show the latitude and longitude
    /*demo.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;*/

    //show location in map
    /*var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=AIzaSyAmnJZGP15lghfFG0JqHeH5EIQDjdSTncU";

    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";*/



    //give a notification when set location is reached

    givenotification(position);
}

function givenotification(position) {

    //variable for actual position
    var actualLatLng = new google.maps.LatLng({lat: position.coords.latitude, lng: position.coords.longitude});
    var givenLatLng = new google.maps.LatLng({lat: setlat, lng: setlong});


    console.log('actual LatLng is' + actualLatLng);
    console.log('givenLatLng is ' + givenLatLng);

    // this method compares your actual position (actualLatLng) with the setPosition for Reminder (givenLatLng).
    // If you are less than 100 m away, the notification fires

    if(google.maps.geometry.spherical.computeDistanceBetween(actualLatLng,givenLatLng)<100){
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


    /*if (position.coords.latitude == setlat && position.coords.longitude == setlong) {
        console.log(position.coords);
        $$('#sub').remove();
        $$('#txt').remove();
        $$('#noti-text').remove();
        takeNotification();
        console.log('arrived in location');
        //alert('You have arrived!');
        navigator.geolocation.clearWatch(id);
        console.log("stopped watching");
    }*/



}


//script for maps//


// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -33.8688, lng: 151.2195},
        zoom: 13,
        disableDefaultUI: true
    });
    var card = document.getElementById('pac-card');
    var input = document.getElementById('pac-input');
    var types = document.getElementById('type-selector');
    var strictBounds = document.getElementById('strict-bounds-selector');

    map.controls[google.maps.ControlPosition.TOP_CENTER].push(card);

    var autocomplete = new google.maps.places.Autocomplete(input);

    // Bind the map's bounds (viewport) property to the autocomplete object,
    // so that the autocomplete requests use the current map bounds for the
    // bounds option in the request.
    autocomplete.bindTo('bounds', map);

    // Set the data fields to return when the user selects a place.
    autocomplete.setFields(
        ['address_components', 'geometry', 'icon', 'name']);

    var infowindow = new google.maps.InfoWindow();
    var infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }



    var buttonSetLoc = $$('<span class="noti-btn-middle">Set Reminder to Location');
    buttonSetLoc.appendTo('#googleMaps');
    var mapDiv = document.getElementById('title');

    google.maps.event.addDomListener(mapDiv, 'click', function() {
        console.log('Map was clicked!');
    });


    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
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
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        /*var showcoordinates = document.getElementById("showcoordinates");
        showcoordinates.innerHTML = "Latitude: " + place.geometry.location.lat() +
        "<br>Longitude: " + place.geometry.location.lng();*/

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

        infowindowContent.children['place-icon'].src = place.icon;
        infowindowContent.children['place-name'].textContent = place.name;
        infowindowContent.children['place-address'].textContent = address;

        //infowindowContent.children['place-position'].textContent = place.geometry.location;


        //create Button to click


        buttonSetLoc
            .attr("destination",place.name)
            .attr("lat",place.geometry.location.lat())
            .attr("long",place.geometry.location.lng())
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
                getLocation(x= this.lat, y=this.long, nameoflocation =this.name);
                console.log('Location Reminder set');
                $$('#googleMaps').hide();
            })




            infowindow.open(map, marker);
    });

    $$('.pac-container').on('touchend', function(e) {
        console.log('touchend');
        e.stopPropagation();
    });


}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}


