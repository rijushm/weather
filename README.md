# Weather App with cities, zip code & current location

![image](https://raw.githubusercontent.com/rijushm/weather/main/assets/img/banner.jpg)

In our busy lives, a fast & accurate real-time weather update app become a useful hand tool. This Weather App will update you on the current weather condition of your exact position rather than a avarage output. Three options are given - 
* Use Location
* Search by City
* Search by Zipcode 

Languages used -
* HTML5
* CSS3
* JavaScript
* jQuery

The processes are given below

## Use Location
1. On `click` this option will call the geolocation function and fetch the latitude and longitude of the device.

2. `if` values of latitude and longitude are set then through ajax -

````javascript
$.ajax({
	url: "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&units=metric" + "&APPID=YOUR-API-KEY",
			type: "GET",
			dataType: "jsonp",
			success: function(data){}
});
````

the app will get all-weather essentials data from [openweathermap](https://openweathermap.org/api) with lat-long values. The data is array-object mixed data. 

3. Stored all required data on variables and used those for set `.html()` 

The background of the weather card is being setted with unsplash api. 

````html
https://source.unsplash.com/1600x900/?CITY-NAME
````

Store the city name from the ajax data before doing it

## Search by City
1. Getting all the cities name from cities.json

````javascript
var results = $.getJSON("assets/city/cities.json", function(data) {
    for(var i = 0; i < data.length; i++) {
        $("#selectOpt").append('<option value="' + data[i].name + '">' + data[i].name + '</option');
    }
});
````

2. On `change` the select will call an ajax with -

````javascript
url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=YOUR-API-KEY",
````

These processes fetch all-weather essentials data from [openweathermap](https://openweathermap.org/api) with the city name. The data is array-object mixed data. 

3. Stored all required data on variables and used those for set `.html()` 

## Search by Zipcode
1. On `click` the search option the input value will store in a variable.

2. `if` the variable `.length` is 6 then the app will call an ajax - 

````javascript
url: "https://api.openweathermap.org/data/2.5/weather?zip="+zipval+",in&APPID=YOUR-API-KEY",
````

These processes fetch all-weather essentials data from [openweathermap](https://openweathermap.org/api) with zipcode. The data is array-object mixed data. 

3. Stored all required data on variables and used those for set `.html()` for required HTML elements.

But here the city name is being fetched from zipcode data ( link in requirements ).
Because of many places under one single zipcode, we are using the first one and get the 'Region' value of the object under first array. Lmao

````javascrpt
city = data[0].PostOffice[0].Region;
````

## Requirements
----
* Location enabled device
* [openweathermap](https://openweathermap.org/api) API
* Information from [Pincode JSON data](https://api.postalpincode.in/pincode/YOUR-ZIP-CODE)
* Card styling with [tilt.js](https://gijsroge.github.io/tilt.js/)
* [cities.json](https://github.com/rijushm/weather/tree/main/assets/city/cities.json)

## Thank you for your support :)
