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
		this.p = document.createElement('p');
        this.text.append(this.p);
        this.p.style.color="brown";
        this.p.style.fontSize="25px";
        this.p.style.fontFamily = "Arial";
        this.p.style.fontWeight="600";
        this.p.innerText = `Your latitude: ${coordinates.latitude}, Your longitude: ${coordinates.longitude}, Your country: ${coordinates.country_name}, Your city: ${coordinates.city} and your IP: ${coordinates.ip}`                
    }
};