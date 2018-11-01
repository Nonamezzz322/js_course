export default class Dom {
	constructor(){
		this.text = document.getElementsByTagName('body')[0];
		this.preloader = document.createElement('div');
		this.text.append(this.preloader)	
	}
	showPreloader(){
		this.preloader.style.width="200px";
		this.preloader.style.height="200px";
		this.preloader.style.background="url(preloader.svg) no-repeat 50% 50%/cover"           
	}

	hidePreloader(){
		this.preloader.remove()	
	}

	setCoordinates(coordinates) {
		

	}
	
	setWeather(weather) {
		let cityName = weather.name;
		let maxTemp = Math.floor(weather.main.temp_max - 273,15);
		let minTemp = Math.floor(weather.main.temp_min - 273,15);
		let temp = Math.floor(weather.main.temp - 273,15);
		let longitude = weather.coord.lon;
		let latitude  = weather.coord.lat;
		let preasure = weather.main.pressure;
		let humidity = weather.main.humidity;
		let windSpeed = weather.wind.speed;
		let description = weather.weather[0].description;
		let icon = weather.weather[0].icon;
		
		this.iconSky = document.createElement('img');
		this.iconSky.id = 'iconSky';
		this.weathericon = document.getElementById('weathericon');
		this.weathericon.append(this.iconSky)	
		iconSky.src = `http://openweathermap.org/img/w/${icon}.png`;

		this.cityDisplay = document.getElementById('city_name');
		this.cityDisplay.innerText = `${cityName}`;

		this.descr = document.getElementById('description');
		this.descr.innerText = `${description}`;

		this.tempDisplay = document.getElementById('temp');
		this.tempDisplay.innerText = `${temp} ºC`;

		this.max = document.getElementById('max');
		this.max.innerText = `${maxTemp} ºC`;

		this.min = document.getElementById('min');
		this.min.innerText = `${minTemp} ºC`;

		this.lat = document.getElementById('latitude');
		this.lat.innerText = `Lat: ${latitude}`;

		this.lon = document.getElementById('longitude');
		this.lon.innerText = `Lon: ${longitude}`;

		this.prs = document.getElementById('pressure');
		this.prs.innerText = `Pressure: ${preasure}`;

		this.hum = document.getElementById('humidity');
		this.hum.innerText = `Humidity: ${humidity}`;

		this.wS = document.getElementById('windSpeed');
		this.wS.innerText = `Winds: ${windSpeed}`;
	}
};
