$(document).ready(function () {
    $("#getReport").click(function (e) {
        e.preventDefault();
        var city = $("#city").val();
        var cityhold;
        var urlApi = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ca44bdc8f531754566a509754e2b141c";
        console.log(city);
        if ($("#detail").css("display") == "none") {
            if (city != "") {
                $.get(urlApi, function (data) {
                    console.log(data);
                    var row = "<h4 style='text-align: center; font-size: 20px;'><img src='svg/006-sun-2.svg' alt='sunny' width='25' height='25'>&nbsp<b>" + data.name + ", " + data.sys.country + "</b></h4>" +
                        "<p id='indetail'>Temperature : " + parseInt(data.main.temp / 10) +
                        "<br>Humidity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: " + data.main.humidity +
                        "<br>Weather&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: " + data.weather[0].description + "</p>";
                    $("#detail").append(row);
                    $("#detail").slideDown("slow");
                });
            }
            else {
                var warn = "<strong>Danger!</strong> Indicates a dangerous or potentially negative action."
                $("#warning").fadeIn("slow");
                $("#warning").append(warn);
            }
        }
        else{
            if (city != "") {
                $("#detail").slideUp(500);
                $("#detail").empty(1000);
                $.get(urlApi, function (data) {
                    console.log(data);
                    var row = "<h5 style='text-align: center;'><img src='svg/006-sun-2.svg' alt='sunny' width='25' height='25'>&nbsp<b>" + data.name + ", " + data.sys.country + "</b></h5>" +
                        "<p id='indetail'>Temperature : " + parseInt(data.main.temp / 10) +
                        "<br>Humidity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: " + data.main.humidity +
                        "<br>Weather&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: " + data.weather[0].description + "</p>";
                    $("#detail").append(row).delay(1000);
                    $("#detail").slideDown("slow");
                });

            }
            else {
                alert("empty");
            }
        }
        console.log($("#detail").css("display"));
    });
});