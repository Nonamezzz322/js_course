export default class LocationApi {
	getMyIp() {
		return fetch ('https://api.ipify.org?format=json')
	}
	getMyLocation(your_ip) {
		return fetch('http://api.ipstack.com/'+your_ip+'?access_key=ea06658607226dda76d14f5d1a8f8bef')
	
		}
};