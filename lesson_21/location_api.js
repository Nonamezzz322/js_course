export default class LocationApi {
	getMyIp() {
		return fetch ('https://api.ipify.org?format=json')
			.then(res => res.json())
			.then(res => res.ip)
	}
	getMyLocation(your_ip) {
		return fetch('http://api.ipstack.com/'+your_ip+'?access_key=ea06658607226dda76d14f5d1a8f8bef')
			.then((res) =>res.json())
		}
	getMyWeather(city) {
			return fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=3c912d7dc513a632a861c7ad683a49f7')
			.then((res) =>res.json())
		}
	};