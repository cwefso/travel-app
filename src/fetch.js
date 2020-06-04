const fetch = require("node-fetch")

var travelersUrl = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers'
var tripsUrl = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips'
var destinationsUrl = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations'



let data = {

  getTravelersData() {
    return fetch(travelersUrl)
      .then(res => {
        return res.json()
      })
      .then(data => {
        return data.travelers
      })
      .catch(err => {
        alert(err.message)
      })
  },

  getSpecificTravelersData(id) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/', id)
      .then(res => {
        return res.json()
      })
      .then(data => {
        return data.traveler
      })
      .catch(err => {
        alert(err.message)
      })
  },


  getTripsData() {
    return fetch(tripsUrl)
      .then(res => {
        return res.json()
      })
      .then(data => {
        return data.trips
      })
      .catch(err => {
        alert(err.message)
      })
  },


  getDestinationsData() {
    return fetch(destinationsUrl)
      .then(res => {
        return res.json()
      })
      .then(data => {
        return data.destinations
      })
      .catch(err => {
        alert(err.message)
      })
  }
}

export default data