$(document).ready(function () {
    $("#getReport").click(function (e) {
        e.preventDefault();
        $("#warning").css("display", "none");
        var city = $("#city").val();
        var cityhold;
        var urlApi = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ca44bdc8f531754566a509754e2b141c";
        console.log(city);
        if ($("#detail").css("display") == "none") {
            if (city != "") {
                $.get(urlApi, function (data) {
                    console.log(data);
                    var pic = checkimg(data.weather[0].icon);
                    console.log(pic);
                    var row = "<h4 style='text-align: center; font-size: 20px;'><img src='svg/pin.svg' alt='sunny' width='25' height='25'>&nbsp<b>" + data.name + ", " + data.sys.country + "</b></h4>" +
                        "<p id='indetail'><img src='svg/010-thermometer-1.svg' alt='sunny' width='25' height='25'>&nbsp;&nbsp;Temperature    &nbsp;&nbsp; " + parseInt(data.main.temp / 10) + "°C" +
                        "<br><img src='svg/001-barometer.svg' alt='sunny' width='25' height='25'>&nbsp;&nbsp;Humidity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + data.main.humidity + "%" +
                        "<br><img src='svg/" + pic + "' alt='sunny' width='25' height='25'>&nbsp;&nbsp;Weather&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + data.weather[0].description + "</p>";
                    $("#detail").append(row);
                    $("#detail").slideDown("slow");
                });
            }
            else {
                $("#warning").empty();
                var warn = "<strong>Please enter your city</strong>"
                $("#warning").fadeIn("slow");
                $("#warning").append(warn);
            }
        }
        else {
            if (city != "") {
                $("#detail").slideUp(500);
                $("#detail").empty(1000);
                $.get(urlApi, function (data) {
                    console.log(data);
                    var pic = checkimg(data.weather[0].icon);
                    console.log(pic);
                    var row = "<h5 style='text-align: center;'><img src='svg/pin.svg' alt='sunny' width='25' height='25'>&nbsp<b>" + data.name + ", " + data.sys.country + "</b></h5>" +
                        "<p id='indetail'><img src='svg/010-thermometer-1.svg' alt='sunny' width='25' height='25'>&nbsp;&nbsp;Temperature  &nbsp;&nbsp; " + parseInt(data.main.temp / 10) + "°C" +
                        "<br><img src='svg/001-barometer.svg' alt='sunny' width='25' height='25'>&nbsp;&nbsp;Humidity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + data.main.humidity + "%" +
                        "<br><img src='svg/" + pic + "' alt='sunny' width='25' height='25'>&nbsp;&nbsp;Weather&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + data.weather[0].description + "</p>";
                    $("#detail").append(row);
                    $("#detail").slideDown("slow");
                });

            }
            else {
                $("#warning").empty();
                var warn = "<strong>Please enter your city</strong>"
                $("#warning").fadeIn("slow");
                $("#warning").append(warn);
            }
        }
        console.log($("#detail").css("display"));
    });
});

function keyEnter(even) {

    if (even.keyCode == 13) {
        $("#warning").css("display", "none");
        var city = $("#city").val();
        var cityhold;
        var urlApi = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ca44bdc8f531754566a509754e2b141c";
        console.log(city);
        if ($("#detail").css("display") == "none") {
            if (city != "") {
                $.get(urlApi, function (data) {
                    console.log(data);
                    var pic = checkimg(data.weather[0].icon);
                    console.log(pic);
                    var row = "<h4 style='text-align: center; font-size: 20px;'><img src='svg/pin.svg' alt='sunny' width='25' height='25'>&nbsp<b>" + data.name + ", " + data.sys.country + "</b></h4>" +
                        "<p id='indetail'><img src='svg/010-thermometer-1.svg' alt='sunny' width='25' height='25'>&nbsp;&nbsp;Temperature    &nbsp;&nbsp; " + parseInt(data.main.temp / 10) + "°C" +
                        "<br><img src='svg/001-barometer.svg' alt='sunny' width='25' height='25'>&nbsp;&nbsp;Humidity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + data.main.humidity + "%" +
                        "<br><img src='svg/" + pic + "' alt='sunny' width='25' height='25'>&nbsp;&nbsp;Weather&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + data.weather[0].description + "</p>";
                    $("#detail").append(row);
                    $("#detail").slideDown("slow");
                });
            }
            else {
                $("#warning").empty();
                var warn = "<strong>Please enter your city</strong>"
                $("#warning").fadeIn("slow");
                $("#warning").append(warn);
            }
        }
        else {
            if (city != "") {
                $("#detail").slideUp(500);
                $("#detail").empty(1000);
                $.get(urlApi, function (data) {
                    console.log(data);
                    var pic = checkimg(data.weather[0].icon);
                    console.log(pic);
                    var row = "<h5 style='text-align: center;'><img src='svg/pin.svg' alt='sunny' width='25' height='25'>&nbsp<b>" + data.name + ", " + data.sys.country + "</b></h5>" +
                        "<p id='indetail'><img src='svg/010-thermometer-1.svg' alt='sunny' width='25' height='25'>&nbsp;&nbsp;Temperature  &nbsp;&nbsp; " + parseInt(data.main.temp / 10) + "°C" +
                        "<br><img src='svg/001-barometer.svg' alt='sunny' width='25' height='25'>&nbsp;&nbsp;Humidity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + data.main.humidity + "%" +
                        "<br><img src='svg/" + pic + "' alt='sunny' width='25' height='25'>&nbsp;&nbsp;Weather&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + data.weather[0].description + "</p>";
                    $("#detail").append(row);
                    $("#detail").slideDown("slow");
                });

            }
            else {
                $("#warning").empty();
                var warn = "<strong>Please enter your city</strong>"
                $("#warning").fadeIn("slow");
                $("#warning").append(warn);
            }
        }
        console.log($("#detail").css("display"));
    }

}

function checkimg(icon) {
    switch (icon) {
        case "01d": var pic = "006-sun.svg"; break;
        case "01n": var pic = "002-night.svg"; break;
        case "02d": var pic = "020-sky-4.svg"; break;
        case "02n": var pic = "004-cloudy.svg"; break;
        case "03d": var pic = "024-sky.svg"; break;
        case "03n": var pic = "024-sky.svg"; break;
        case "04d": var pic = "cloudy.svg"; break;
        case "04n": var pic = "cloudy.svg"; break;
        case "09d": var pic = "019-sky-5.svg"; break;
        case "09n": var pic = "019-sky-5.svg"; break;
        case "10d": var pic = "021-sky-3.svg"; break;
        case "10n": var pic = "003-rain.svg"; break;
        case "11d": var pic = "022-sky-2.svg"; break;
        case "11n": var pic = "022-sky-2.svg"; break;
        case "13d": var pic = "013-sky-10.svg"; break;
        case "13n": var pic = "006-snowy.svg"; break;
        case "50d": var pic = "014-sky-9.svg"; break;
        case "50n": var pic = "014-sky-9.svg"; break;
        default: var pic = "006-sun.svg"; break;
    }
    return pic;
}