// function fetch_background_api() {
//     const pathToPhpFile = 'api.php';
//     const org = "NASA";
//     const data = { 'organization': org };
//     // console.log(pathToPhpFile);
//     // console.log(org);
    
//     fetch(pathToPhpFile, {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: { 'content-type': 'application/json' }
//     })
//         .then(response => console.log(response.json()))
//         .then(data => {
//             getAPOD(data);
//         })
//         .catch(error => console.error('Error:', error))
// }

function getAPOD() {
    let nasa_key = "7CuhkUfRHhgI61GAcLat4Deeaem7UnRWYbiJof9l";
    const path_to_site = "https://api.nasa.gov/planetary/apod?api_key=" + nasa_key;
    fetch(path_to_site, {
        method: 'GET',
    })
        .then(res => res.json())
        .then(response => setBackground(response))
        .catch(error => console.error('Error:', error))
}

function setBackground(data) {
    document.getElementById("description").innerHTML = data.explanation;
    $("#description").css('background-color','white')
    $("#bkgrnd").css('background-repeat', 'no-repeat');
    $("#bkgrnd").css('background-image', "url(" + data.url);
    $("#bkgrnd").css('height','100%');
    $("#bkgrnd").css('background-position','center');
    $("#bkgrnd").css('background-repeat','no-repeat');
    $("#bkgrnd").css('background-size','cover');
    $("#bkgrnd").css('blur','4px');
}

function getISS() {
    const path_to_site = "http://api.open-notify.org/iss-now.json";
    fetch(path_to_site, {
        method: 'GET',
    })
        .then(res => res.json())
        .then(response => setISS(response))
        .catch(error => console.error('Error:', error))
}

function setISS(data) {
    console.log(data.message);
}


function getLocation() {
    let address = document.getElementById("address").value;
    console.log(address);
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();
            alert(latitude);
            alert(longitude);
        }
    });
} 
    
document.addEventListener("DOMContentLoaded", getAPOD, false);
document.addEventListener("DOMContentLoaded", getISS, false);
