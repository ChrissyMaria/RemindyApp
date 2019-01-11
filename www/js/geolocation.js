
//script for geolocation//

var demo = document.getElementById("demo");
function getLocation(x = [], y= [], nameoflocation = '') {
    setlat = x;
    setlong = y;
    if (nameoflocation != '') {
        console.log('You have set your destination to '+  nameoflocation);
        $$('#sub').html('Take your medication when you arrive at <br> <strong>'+ nameoflocation + '</strong> !');
        $$('#txt').html('New reminder set.');

        var mapHolder = $$('<div id="mapholder"/>');
        $$('#noti-text').append(mapHolder);

        var latlon = setlat + "," + setlong;

        var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x150&sensor=false&key=AIzaSyAmnJZGP15lghfFG0JqHeH5EIQDjdSTncU";

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
    if (position.coords.latitude == setlat && position.coords.longitude == setlong) {
        alert('You have arrived!');
        navigator.geolocation.clearWatch(id);
        console.log("stopped watching")
    }



}


//script for maps//


// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -33.8688, lng: 151.2195},
        zoom: 13
    });
    var card = document.getElementById('pac-card');
    var input = document.getElementById('pac-input');
    var types = document.getElementById('type-selector');
    var strictBounds = document.getElementById('strict-bounds-selector');

    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

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
        console.log("Latitude is" + place.geometry.location.lat())
        console.log("Longitude is" + place.geometry.location.lng())
        //getLocation(x=place.geometry.location.lat(), y=place.geometry.location.lng(), nameoflocation = place.name)
        }

        infowindowContent.children['place-icon'].src = place.icon;
        infowindowContent.children['place-name'].textContent = place.name;
        infowindowContent.children['place-address'].textContent = address;

        //infowindowContent.children['place-position'].textContent = place.geometry.location;


        //create Button to click


        setdestination = $('<div>')
            .attr("destination",place.name)
            .attr("lat",place.geometry.location.lat())
            .attr("long",place.geometry.location.lng())
            .text("Set Destination")
            .appendTo(googleMaps)
            .click(function () {
                console.log('ich habe destination gesetzt');
                this.lat = $(this).attr('lat');
                this.long = $(this).attr('long');
                this.name = $(this).attr('destination');
                console.log(this);
                console.log(this.lat);
                console.log(this.long);
                console.log(this.name);
                getLocation(x= this.lat, y=this.long, nameoflocation =this.name);
                console.log('ich habe destination gesetzt');

                $$('#googleMaps').hide();
            })
            //.appendTo('#setLocReminder');



            infowindow.open(map, marker);
    });


}


