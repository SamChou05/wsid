const {default:axios} = require("axios");

const getGooglePlace=(category:any,radius:any,lat:any,lng:any)=>axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=cruise&location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&key=AIzaSyBJjlKm9vVmcSRjVPOjKCQrH7z851hambE')

console.log("hello")

export default{
    getGooglePlace
}

/*
https://maps.googleapis.com/maps/api/place/findplacefromtext/json
  ?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry
  &input=mongolian
  &inputtype=textquery
  &locationbias=circle%3A2000%4047.6918452%2C-122.2226413
  &key=YOUR_API_KEY
  */

  /*
  '/api/google-place?'+
'category='+category+'&radius='+radius+'&lat='+lat+'&lng='+lng/*/