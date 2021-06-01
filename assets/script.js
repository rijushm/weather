var results = $.getJSON("assets/city/cities.json", function(data) {
    for(var i = 0; i < data.length; i++) {
        $("#selectOpt").append('<option value="' + data[i].name + '">' + data[i].name + '</option');
    }
});

const tilt = $('.js-tilt').tilt({
		  		maxTilt: 10,
		  		glare: true,
			    maxGlare: .5
		  	});

		  	var clouds = 'https://th-thumbnailer.cdn-si-edu.com/5tTIhVxdkv5eLaerH7jKx3R9JvQ=/fit-in/1072x0/https://tf-cmsv2-photocontest-smithsonianmag-prod-approved.s3.amazonaws.com/85b748a5-de2f-43de-a9e7-c7a268cc3373.jpg';
		  	var rain = 'https://i.pinimg.com/originals/ad/1f/d9/ad1fd97de30dd5dc4f8d0fce71748306.jpg';
		  	var wind = 'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2017/09/24/Pictures/_d62f9324-a0ea-11e7-ba2d-20fa1b34073f.jpg';

		  	$(document).ready(function(){

		  		$('#errtxtgps').hide();

		  		$('#crrTxt').hide();
		  		$('#errtxtinput').hide();

			  	var card = document.getElementById('card');
		  		var city = 'Kolkata';
		  		$.ajax({
		                url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=9818b2268571197177d80714329e86b6",
		                type: "GET",
		                dataType: "jsonp",
		                success: function(data){
		                    console.log(data);
		                    console.log(data.weather[0].main);
		                    console.log(data.main);
		                    console.log(data.main.temp);

		                    var information = [data];

		                    var weatherStatus = data.weather[0].main;
		                    var weatherStatusIcon = data.weather[0].icon;
		                    var tempmain = data.main.temp;
		                    var tempmax = data.main.temp_max;
		                    var tempmin = data.main.temp_min;
		                    var location = data.name;
		                    var country = data.sys.country;
		                    var humidity = data.main.humidity;
		                    var pressure = data.main.pressure;
		                    var wspeed = data.wind.speed;

		                    $('#tempVal').html(tempmain+'<span>&deg;C</span>');
		                    $('#maxTemp').html('HIGH <span>'+tempmax+' &deg;C</span> | LOW <span>'+tempmin+' &deg;C</span>');
		                    $('#location').html(location+' | '+country);
		                    $('#WeatherStat').html(weatherStatus);
		                    $('#humidity').html(humidity+' %');
		                    $('#pressure').html(pressure+' ATM');
		                    $('#wspeed').html(wspeed+' m/s');
		                    $('#imgIcon').attr('src','https://openweathermap.org/img/wn/'+weatherStatusIcon+'@2x.png')

		                    if (weatherStatus == 'Clouds'){
		                    	$('body').css('background','url(assets/img/backclouds.jpg) center center no-repeat');
		                    }else if (weatherStatus == 'Clear') {
		                    	$('body').css('background','url(assets/img/backclear.jpg) center center no-repeat');
		                    }else if (weatherStatus == 'Wind') {
		                    	$('body').css('background','url(assets/img/backwind.jpg) center center no-repeat');
		                    }else if (weatherStatus == 'Rain') {
		                    	$('body').css('background','url(assets/img/backrains.jpg) center center no-repeat');
		                    }
		                    $('body').css('background-size','cover');

		                    if (city == 'Kolkata' || city == 'Delhi' || city == 'Pune' || city == 'Mumbai' || city == 'Assam' || city == 'Bengaluru') {
		                    	$('#card').css('background','linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8)), url(assets/img/city/'+city+'.jpg) center center no-repeat');
		                    }else{
		                    	$('#card').css('background','linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8)), url(https://source.unsplash.com/1600x900/?'+city+') center center no-repeat');
		                    }
		                    $('#card').css('background-size','cover');
		                }
		            });

		  		$('#selectOpt').on('change', function(){
		  			$('#card').css('background','url(assets/img/loader.gif) center center no-repeat');
		  		$('#crrTxt').hide();
		  			var city = $(this).val();
		  			$.ajax({
		                url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=9818b2268571197177d80714329e86b6",
		                type: "GET",
		                dataType: "jsonp",
		                success: function(data){
		                    console.log(data);
		                    console.log(data.weather[0].main);
		                    console.log(data.main);
		                    console.log(data.main.temp);

		                    var information = [data];

		                    var weatherStatus = data.weather[0].main;
		                    var weatherStatusIcon = data.weather[0].icon;
		                    var tempmain = data.main.temp;
		                    var tempmax = data.main.temp_max;
		                    var tempmin = data.main.temp_min;
		                    var location = data.name;
		                    var country = data.sys.country;
		                    var humidity = data.main.humidity;
		                    var pressure = data.main.pressure;
		                    var wspeed = data.wind.speed;

		                    $('#tempVal').html(tempmain+'<span>&deg;C</span>');
		                    $('#maxTemp').html('HIGH <span>'+tempmax+' &deg;C</span> | LOW <span>'+tempmin+' &deg;C</span>');
		                    $('#location').html(location+' | '+country);
		                    $('#WeatherStat').html(weatherStatus);
		                    $('#humidity').html(humidity+' %');
		                    $('#pressure').html(pressure+' ATM');
		                    $('#wspeed').html(wspeed+' m/s');
		                    $('#imgIcon').attr('src','https://openweathermap.org/img/wn/'+weatherStatusIcon+'@2x.png')

		                    if (weatherStatus == 'Clouds'){
		                    	$('body').css('background','url(assets/img/backclouds.jpg) center center no-repeat');
		                    }else if (weatherStatus == 'Clear') {
		                    	$('body').css('background','url(assets/img/backclear.jpg) center center no-repeat');
		                    }else if (weatherStatus == 'Wind') {
		                    	$('body').css('background','url(assets/img/backwind.jpg) center center no-repeat');
		                    }else if (weatherStatus == 'Rain') {
		                    	$('body').css('background','url(assets/img/backrains.jpg) center center no-repeat');
		                    }
		                    $('body').css('background-size','cover');

		                    if (city == 'Kolkata' || city == 'Delhi' || city == 'Pune' || city == 'Mumbai' || city == 'Assam' || city == 'Bengaluru') {
		                    	$('#card').css('background','linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8)), url(assets/img/city/'+city+'.jpg) center center no-repeat');
		                    }else{
		                    	$('#card').css('background','linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8)), url(https://source.unsplash.com/1600x900/?'+city+') center center no-repeat');
		                    }

		                    $('#card').css('background-size','cover');
		                }
		            });

		  		});


		  		$('#currLocation').click(function(){
		  			$('#card').css('background','url(assets/img/loader.gif) center center no-repeat');
		  			$(this).html('Please wait..');
				  navigator.geolocation.getCurrentPosition(function(position) {
				    let lat = position.coords.latitude;
				    let long = position.coords.longitude;

				    if (lat && long) {
				    	$('#errtxtgps').hide();
				    	$.ajax({
			                url: "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&units=metric" + "&APPID=9818b2268571197177d80714329e86b6",
			                type: "GET",
			                dataType: "jsonp",
			                success: function(data){
					  			$('#currLocation').html('Use Location');
					  			$('#crrTxt').show();
			                    console.log(data);
			                    console.log(data.weather[0].main);
			                    console.log(data.main);
			                    console.log(data.main.temp);

			                    var information = [data];

			                    var weatherStatus = data.weather[0].main;
			                    var weatherStatusIcon = data.weather[0].icon;
			                    var tempmain = data.main.temp;
			                    var tempmax = data.main.temp_max;
			                    var tempmin = data.main.temp_min;
			                    var location = data.name;
			                    var country = data.sys.country;
			                    var humidity = data.main.humidity;
			                    var pressure = data.main.pressure;
			                    var wspeed = data.wind.speed;

			                    $('#tempVal').html(tempmain+'<span>&deg;C</span>');
			                    $('#maxTemp').html('HIGH <span>'+tempmax+' &deg;C</span> | LOW <span>'+tempmin+' &deg;C</span>');
			                    $('#location').html(location+' | '+country);
			                    $('#WeatherStat').html(weatherStatus);
			                    $('#humidity').html(humidity+' %');
			                    $('#pressure').html(pressure+' ATM');
			                    $('#wspeed').html(wspeed+' m/s');
			                    $('#imgIcon').attr('src','https://openweathermap.org/img/wn/'+weatherStatusIcon+'@2x.png')

			                    if (weatherStatus == 'Clouds'){
			                    	$('body').css('background','url(assets/img/backclouds.jpg) center center no-repeat');
			                    }else if (weatherStatus == 'Clear') {
			                    	$('body').css('background','url(assets/img/backclear.jpg) center center no-repeat');
			                    }else if (weatherStatus == 'Wind') {
			                    	$('body').css('background','url(assets/img/backwind.jpg) center center no-repeat');
			                    }else if (weatherStatus == 'Rain') {
			                    	$('body').css('background','url(assets/img/backrains.jpg) center center no-repeat');
			                    }
			                    $('body').css('background-size','cover');

			                    if (city == 'Kolkata' || city == 'Delhi' || city == 'Pune' || city == 'Mumbai' || city == 'Assam' || city == 'Bengaluru') {
			                    	$('#card').css('background','linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8)), url(assets/img/city/'+city+'.jpg) center center no-repeat');
			                    }else{
			                    	$('#card').css('background','linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8)), url(https://source.unsplash.com/1600x900/?'+city+') center center no-repeat');
			                    }

			                    $('#card').css('background-size','cover');
			                }
			            });
				    }else{
				    	$('#currLocation').html('Use Location');
				    	$('#errtxtgps').show();
				    }

				    
				  });
			  });


		  		$('#searchPin').click(function(){
		  			$('#card').css('background','url(assets/img/loader.gif) center center no-repeat');
		  			var zipval = $('#pincode').val();
		  			if (zipval.length == 6) {
				  		$('#errtxtinput').hide();
		  				$.ajax({
			                url: "https://api.openweathermap.org/data/2.5/weather?zip="+zipval+",in&APPID=9818b2268571197177d80714329e86b6",
			                type: "GET",
			                dataType: "jsonp",
			                success: function(data){
					  			$('#crrTxt').hide();
			                    console.log(data);
			                    console.log(data.weather[0].main);
			                    console.log(data.main);
			                    console.log(data.main.temp);

			                    var information = [data];

			                    var weatherStatus = data.weather[0].main;
			                    var weatherStatusIcon = data.weather[0].icon;
			                    var tempmain = (data.main.temp/10).toFixed(2);
			                    var tempmax = (data.main.temp_max/10).toFixed(2);
			                    var tempmin = (data.main.temp_min/10).toFixed(2);
			                    var location = data.name;
			                    var country = data.sys.country;
			                    var humidity = data.main.humidity;
			                    var pressure = data.main.pressure;
			                    var wspeed = data.wind.speed;

			                    $('#tempVal').html(tempmain+'<span>&deg;C</span>');
			                    $('#maxTemp').html('HIGH <span>'+tempmax+' &deg;C</span> | LOW <span>'+tempmin+' &deg;C</span>');
			                    $('#location').html(location+' | '+country);
			                    $('#WeatherStat').html(weatherStatus);
			                    $('#humidity').html(humidity+' %');
			                    $('#pressure').html(pressure+' ATM');
			                    $('#wspeed').html(wspeed+' m/s');
			                    $('#imgIcon').attr('src','https://openweathermap.org/img/wn/'+weatherStatusIcon+'@2x.png')

			                    if (weatherStatus == 'Clouds'){
			                    	$('body').css('background','url(assets/img/backclouds.jpg) center center no-repeat');
			                    }else if (weatherStatus == 'Clear') {
			                    	$('body').css('background','url(assets/img/backclear.jpg) center center no-repeat');
			                    }else if (weatherStatus == 'Wind') {
			                    	$('body').css('background','url(assets/img/backwind.jpg) center center no-repeat');
			                    }else if (weatherStatus == 'Rain') {
			                    	$('body').css('background','url(assets/img/backrains.jpg) center center no-repeat');
			                    }
			                    $('body').css('background-size','cover');

			                    $.ajax({
			                    	url: 'https://api.postalpincode.in/pincode/'+zipval,
			                    	success: function(data){
			                    		city = data[0].PostOffice[0].Region;

			                    		if (city == 'Kolkata' || city == 'Delhi' || city == 'Pune' || city == 'Mumbai' || city == 'Assam' || city == 'Bengaluru') {
					                    	$('#card').css('background','linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8)), url(assets/img/city/'+city+'.jpg) center center no-repeat');
					                    }else{
					                    	$('#card').css('background','linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8)), url(https://source.unsplash.com/1600x900/?'+city+') center center no-repeat');
					                    }

					                    $('#card').css('background-size','cover');
					                    	}
				                    });
			                    
			                }
			            });
		  			}else{
				  		$('#errtxtinput').show();
		  			}
		  		})

				    	 
		  });

		  	var timeVal = document.getElementById('timeVal');
		  	var weatherIcon = document.getElementById('weatherIcon');

		  	

		  	var month = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT'];
		  	var week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

		  	var date = new Date();

		  	var monthKey = date.getMonth();
		  	var weekKey = date.getDay();
		  	var dateVal = date.getDate();
		  	var hour = date.getHours();
		  	var minutes = date.getMinutes();

		  	var periods = 'AM';

		  	if (hour > 11) {
		  		periods = 'PM';
		  		hour = hour - 12;
		  	}

		  	if (minutes < 10) {
		  		minutes = '0'+minutes;
		  	}

		  	timeVal.innerHTML = `${week[weekKey]} | ${dateVal}th ${month[monthKey]} | ${hour}:${minutes} ${periods}`;