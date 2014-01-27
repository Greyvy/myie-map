var initialize = function() {

    // The map styles JSON array
    // generated at: http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html
    var styles = [{"stylers":[{"saturation":-100}]},{"featureType":"water","stylers":[{"color":"#40403a"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"color":"#40403a"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]}];

    // bgc :   #403f3a || 64 63 58
    // beige : #f4f2df || 244 242 223

    // Create a latitude and longitude
    var myLatlng = new google.maps.LatLng(49.172243, -123.133540);

    // Create a marker at my latitude and longitude
    var marker = new google.maps.Marker({
        position: myLatlng,
        title: 'Union Victoria'
    });

    var mapOptions = {
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        },
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        scrollwheel: false,
        // Centre on the created latitude and longitude
        center: myLatlng,
        // Set the map zoom level
        zoom: 14,
        // Set the map styles to the JSON array we made
        styles: styles
    };

    // If the map-canvas element exists
    if (document.getElementById("map-canvas")) {
        // Create a new google map, pass it the element it should occupy
        // and the options object we created above
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        // Set the marker we created
        marker.setMap(map);
    }

};

// When the dom is loaded run our function above
google.maps.event.addDomListener(window, 'load', initialize);
