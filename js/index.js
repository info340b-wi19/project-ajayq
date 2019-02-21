function createMarkers(spots) {
    let id = spots.id;
    let x = spots.x;
    let y = spots.y;
}

$('#menu').click(() => {
    $('#menu').attr('hidden', true);
    $('#home').attr('hidden', false);
});

function initMap() {
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    // The location of Uluru
    let kizuki = {lat: 47.615397, lng: -122.327009};
    // The map, centered at Uluru
    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 19, center: kizuki});
    // The marker, positioned at Uluru
    $(document).ready(function() {
        $.ajax({
            type: "GET",
            url: "csv/parking.csv",
            dataType: "text",
            success: function(data) {
                let spots = $.csv.toObjects(data);
                spots.forEach(spot => {
                    let x = parseFloat(spot.x);
                    let y = parseFloat(spot.y);
                    let pos = {lat:x, lng:y};
                    let safety = parseFloat(spot.safety);
                    let popularity = parseFloat(spot.popularity);
                    var marker = new google.maps.Marker({
                        map: map,
                        position: pos
                    });
                    marker.addListener('click', function() {
                        if (document.querySelector('#spot').offsetHeight === 0) {
                            $('#home').attr('hidden', true);
                            $('#spot').attr('hidden', false);
                        }
                        $('#safety-rating').empty();
                        $('#popularity').empty();
                        document.querySelector('#price').textContent = '';
                        document.querySelector('#parkID').textContent = '';
                        createRating(safety, document.querySelector('#safety-rating'));
                        createRating(popularity, document.querySelector('#popularity'));
                        document.querySelector('#price').textContent = 'Rate: $' + spot.price + '/hour';
                        document.querySelector('#parkID').textContent = 'Parking Meter #' + spot.id;
                    });
                    $('#directions').click(() => {
                        let UW = {lat: 47.654965, lng: -122.307915};
                        // Attemp to make the destination vawriable based upon the parking spot that
                        // was clicked on, however I believe that due to the fact that I have not
                        // paid for the Google API it will not allow me to make these kinds of calls
                        // due to exceeding the call limit.
                        // let parkID = document.querySelector('#parkID').textContent.slice(-1);
                        // let dest = {};
                        //     for (let i = 0; i < spots.length; i++) {
                        //         if (spots[i].id === parkID) {
                        //             dest = {lat:parseFloat(spots[i].x), lng:parseFloat(spots[i].y)};
                        //         }
                        // }
                        // console.log(dest);
                        // console.log(pos);
                        let request = {origin: UW, destination: pos, travelMode: 'DRIVING'};
                        directionsService.route(request, function(result, status) {
                            if (status == 'OK') {
                              directionsDisplay.setDirections(result);
                              directionsDisplay.setMap(map);
                            }
                        });
                        document.querySelector('#back').addEventListener('click', () => {
                            directionsDisplay.setDirections({routes: []});
                        });
                    });
                });
            }
        });
    });

    document.querySelector('#back').addEventListener('click', () => {
        if (document.querySelector('#home').offsetHeight === 0) {
            $('#home').attr('hidden', false);
            $('#spot').attr('hidden', true);
        }
    });

    function createRating(rating, div) {
        for (let i = 0; i < rating; i++) {
            let span = document.createElement('span');
            span.classList.add('fa', 'fa-star', 'checked');
            div.appendChild(span);
        }
        for (let i = 0; i < (5 - rating); i++) {
            let span = document.createElement('span');
            span.classList.add('fa', 'fa-star');
            div.appendChild(span);
        }
    }

    directionsDisplay.setMap(map);
}