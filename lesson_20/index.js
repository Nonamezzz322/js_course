import LocationApi from "./location_api.js"
import Dom from "./dom.js"

let location = new LocationApi()
let dom = new Dom()

dom.showPreloader()
	
let promise = new Promise(function(resolve,reject){
	resolve(location.getMyIp())
})

.then((resolve) =>resolve.json())
.then((resolve)=>resolve.ip)
.then((resolve)=>location.getMyLocation(resolve))
.catch((err)=>console.log(err))
.then((resolve)=>resolve.json())
.then((resolve)=>dom.setCoordinates(resolve))
.catch((err)=>console.log(err))
.then((resolve)=>dom.hidePreloader())
.catch((err)=>console.log(err));