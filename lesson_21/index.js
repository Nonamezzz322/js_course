import LocationApi from "./location_api.js"
import Dom from "./dom.js"

let loc = new LocationApi()
let dom = new Dom()

let input = document.getElementById('input');
input.addEventListener('change', () => {
	let value = input.value;
	let promise = new Promise(function(res,rej){
		res(loc.getMyWeather(value))
	})
		.then(res=>{
			dom.setWeather(res)
			dom.hidePreloader()
		});
	
})


let promise = new Promise(function(res,rej){
	res(loc.getMyIp())
})

	.then(ip => loc.getMyLocation(ip))
	.then(res=>res.city)
	.then(function(res){
		localStorage.setItem('city', res)
		return loc.getMyWeather(res)
	})
	.then(res=>{
		dom.setWeather(res)
		dom.hidePreloader()
	});
