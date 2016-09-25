$(function () {
         // Google Section
    var googleKey = "AIzaSyBCMlkxEnVKsOdtkY8VFBb5BCZFYFRz2uU";
    
    var address1 = "41568";
    $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + address1 + "&key=" + googleKey).done(function (data) {
       
        var lat1 = data.results[0].geometry.location.lat;
        var lng1 = data.results[0].geometry.location.lng;    

    var address2 = "10562";
    $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + address2 + "&key=" + googleKey).done(function (data) {
       
        var lat2 = data.results[0].geometry.location.lat;
        var lng2 = data.results[0].geometry.location.lng;

    var address3 = "06851";
    $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + address3 + "&key=" + googleKey).done(function (data) {
       
        var lat3 = data.results[0].geometry.location.lat;
        var lng3 = data.results[0].geometry.location.lng;

    var address4 = "61821";
    $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + address4 + "&key=" + googleKey).done(function (data) {
       
        var lat4 = data.results[0].geometry.location.lat;
        var lng4 = data.results[0].geometry.location.lng;

    var address5 = "99337";
    $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + address5 + "&key=" + googleKey).done(function (data) {
       
        var lat5 = data.results[0].geometry.location.lat;
        var lng5 = data.results[0].geometry.location.lng;

    var address6 = "06516";
    $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + address6 + "&key=" + googleKey).done(function (data) {
       
        var lat6 = data.results[0].geometry.location.lat;
        var lng6 = data.results[0].geometry.location.lng;


    // Dark Sky Section
    var darkSkyKey = "85c1d9f9ba0d75db7a9f54214ce2c1c5";
    $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/" + lat1 + "," + lng1, { dataType: "jsonP" }).done(function (data) {

        var currentTemperature1 = Math.round(data.currently.temperature) + "&deg; F";
        var currentConditions1 = data.currently.summary;
        var currentMinTemperature1 = Math.round(data.daily.data[0].temperatureMin) + "&deg; F";
        var chanceOfPrecip1 = Math.round(data.daily.data[0].precipProbability) + "%";
        var currentMaxTemperature1 = Math.round(data.daily.data[0].temperatureMax) + "&deg; F";

        $(".currentTemperature1").append('<h1>' + currentTemperature1 + '</h1>');
        $(".currentConditions1").append('<h4>' + currentConditions1 + '</h4>');
        $(".currentMinTemperature1").append('<h5>' + currentMinTemperature1 + '</h5>');
        $(".chanceOfPrecip1").append('<h5>' + chanceOfPrecip1 + '</h5>');
        $(".currentMaxTemperature1").append('<h5>' + currentMaxTemperature1 + '</h5>');

     $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/" + lat2 + "," + lng2, { dataType: "jsonP" }).done(function (data) {

        var currentTemperature2 = Math.round(data.currently.temperature) + "&deg; F";
        var currentConditions2 = data.currently.summary;
        var currentMinTemperature2 = Math.round(data.daily.data[0].temperatureMin) + "&deg; F";
        var chanceOfPrecip2 = Math.round(data.daily.data[0].precipProbability) + "%";
        var currentMaxTemperature2 = Math.round(data.daily.data[0].temperatureMax) + "&deg; F";

        $(".currentTemperature2").append('<h1>' + currentTemperature2 + '</h1>');
        $(".currentConditions2").append('<h4>' + currentConditions2 + '</h4>');
        $(".currentMinTemperature2").append('<h5>' + currentMinTemperature2 + '</h5>');
        $(".chanceOfPrecip2").append('<h5>' + chanceOfPrecip2 + '</h5>');
        $(".currentMaxTemperature2").append('<h5>' + currentMaxTemperature2 + '</h5>');
    });
    $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/" + lat3 + "," + lng3, { dataType: "jsonP" }).done(function (data) {

        var currentTemperature3 = Math.round(data.currently.temperature) + "&deg; F";
        var currentConditions3 = data.currently.summary;
        var currentMinTemperature3 = Math.round(data.daily.data[0].temperatureMin) + "&deg; F";
        var chanceOfPrecip3 = Math.round(data.daily.data[0].precipProbability) + "%";
        var currentMaxTemperature3 = Math.round(data.daily.data[0].temperatureMax) + "&deg; F";

        $(".currentTemperature3").append('<h1>' + currentTemperature3 + '</h1>');
        $(".currentConditions3").append('<h4>' + currentConditions3 + '</h4>');
        $(".currentMinTemperature3").append('<h5>' + currentMinTemperature3 + '</h5>');
        $(".chanceOfPrecip3").append('<h5>' + chanceOfPrecip3 + '</h5>');
        $(".currentMaxTemperature3").append('<h5>' + currentMaxTemperature3 + '</h5>');
    });
    $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/" + lat4 + "," + lng4, { dataType: "jsonP" }).done(function (data) {

        var currentTemperature4 = Math.round(data.currently.temperature) + "&deg; F";
        var currentConditions4 = data.currently.summary;
        var currentMinTemperature4 = Math.round(data.daily.data[0].temperatureMin) + "&deg; F";
        var chanceOfPrecip4 = Math.round(data.daily.data[0].precipProbability) + "%";
        var currentMaxTemperature4 = Math.round(data.daily.data[0].temperatureMax) + "&deg; F";

        $(".currentTemperature4").append('<h1>' + currentTemperature4 + '</h1>');
        $(".currentConditions4").append('<h4>' + currentConditions4 + '</h4>');
        $(".currentMinTemperature4").append('<h5>' + currentMinTemperature4 + '</h5>');
        $(".chanceOfPrecip4").append('<h5>' + chanceOfPrecip4 + '</h5>');
        $(".currentMaxTemperature4").append('<h5>' + currentMaxTemperature4 + '</h5>');
    });
    $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/" + lat5 + "," + lng5, { dataType: "jsonP" }).done(function (data) {

        var currentTemperature5 = Math.round(data.currently.temperature) + "&deg; F";
        var currentConditions5 = data.currently.summary;
        var currentMinTemperature5 = Math.round(data.daily.data[0].temperatureMin) + "&deg; F";
        var chanceOfPrecip5 = Math.round(data.daily.data[0].precipProbability) + "%";
        var currentMaxTemperature5 = Math.round(data.daily.data[0].temperatureMax) + "&deg; F";

        $(".currentTemperature5").append('<h1>' + currentTemperature5 + '</h1>');
        $(".currentConditions5").append('<h4>' + currentConditions5 + '</h4>');
        $(".currentMinTemperature5").append('<h5>' + currentMinTemperature5 + '</h5>');
        $(".chanceOfPrecip5").append('<h5>' + chanceOfPrecip5 + '</h5>');
        $(".currentMaxTemperature5").append('<h5>' + currentMaxTemperature5 + '</h5>');
    });
    $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/" + lat6 + "," + lng6, { dataType: "jsonP" }).done(function (data) {

        var currentTemperature6 = Math.round(data.currently.temperature) + "&deg; F";
        var currentConditions6 = data.currently.summary;
        var currentMinTemperature6 = Math.round(data.daily.data[0].temperatureMin) + "&deg; F";
        var chanceOfPrecip6 = Math.round(data.daily.data[0].precipProbability) + "%";
        var currentMaxTemperature6 = Math.round(data.daily.data[0].temperatureMax) + "&deg; F";

        $(".currentTemperature6").append('<h1>' + currentTemperature6 + '</h1>');
        $(".currentConditions6").append('<h4>' + currentConditions6 + '</h4>');
        $(".currentMinTemperature6").append('<h5>' + currentMinTemperature6 + '</h5>');
        $(".chanceOfPrecip6").append('<h5>' + chanceOfPrecip6 + '</h5>');
        $(".currentMaxTemperature6").append('<h5>' + currentMaxTemperature6 + '</h5>');
        });
        });
        });
        });
        });
    });
    });
    });
});