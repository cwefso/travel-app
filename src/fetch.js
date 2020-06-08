const fetch = require("node-fetch")

class FetchData {

  getTravelersData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers')
      .then(res => {
        return res.json()
      })
      .then(data => {
        return data.travelers
      })
      .catch(err => {
        alert(err.message)
      })
  }

  getSpecificTravelerData(id) {
    return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${id}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        return data
      })
      .catch(err => {
        alert(err.message)
      })
  }

  getTripsData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips/')
      .then(res => {
        return res.json()
      })
      .then(data => {
        return data.trips
      })
      .catch(err => {
        alert(err.message)
      })
  }

  getSpecificTravelerTrips(id) {
    return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips/${id}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        return data
      })
      .catch(err => {
        alert(err.message)
      })
  }

  getDestinationsData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
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

  requestTrip(id, userID, destinationID, travelers, date, duration, status, suggestedActivities) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips'), {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: `${id}`, userID: `${userID}`, destinationID: `${destinationID}`, travelers: `${travelers}`, date: `${date}`, duration: `${duration}`, status: `${status}`, suggestedActivities: `${suggestedActivities}`})
      .then(response => response.json())
      .then(data => {
        return data.trips
      })
      .catch(err => {
        alert(err.message)
      })
    }
  }
}

export default FetchData