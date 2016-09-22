// $(function () {


// var userJSON = '{"firstName": "Lucas","lastName": "Lell","twitter":"@lucas_lell"}';

// var user = JSON.parse(userJSON);
// $(".card-bg").append("Hello, " + user.firstName)
// });

// $(function () {
//     var url = "http://rest.learncode.academy/api/learncode/friends/57e2c0961ebec6010006185d"
//     $.ajax(url, {method:"GET"})
//         .done(function (data) {
//             $("#friend").html(data.drink);
//         });

// $.ajax(url, { method: "POST" }).done(function (data) {
//     $("#friend").append(JSON.stringify(data));
// })

//     $("#friend").click(function (ev) {
//         console.log(ev.target);
//     });

// });

$(function () {
    var darkSkyKey = "85c1d9f9ba0d75db7a9f54214ce2c1c5";
    $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/37.8332442,-82.8101975", { dataType: "jsonP" }).done(function (data) {
        
        var currentTemperature = Math.round(data.currently.temperature) + "&deg; F";
        var currentConditions = data.currently.summary;
        var currentMinTemperature = Math.round(data.daily.data[0].temperatureMin) + "&deg; F";
        var chanceOfPrecip = Math.round(data.daily.data[0].precipProbability) + "%";
        var currentMaxTemperature = Math.round(data.daily.data[0].temperatureMax) + "&deg; F";
        
        $(".currentTemperature").append('<h1>' + currentTemperature + '</h1>');
        $(".currentConditions").append('<h4>' + currentConditions + '</h4>');
        $(".currentMinTemperature").append('<h5>' + currentMinTemperature + '</h5>');
        $(".chanceOfPrecip").append('<h5>' + chanceOfPrecip + '</h5>');
        $(".currentMaxTemperature").append('<h5>' + currentMaxTemperature + '</h5>');
    });

});