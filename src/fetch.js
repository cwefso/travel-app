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

  requestTrip(tripData) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(tripData),
    })
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => alert(err.message))
  }

  approveTrip(id) {
    let bodyText = {
      "id": id,
      "status": "approved"
    }
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/updateTrip', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyText),
    })
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => alert(err.message))
  }
}

export default FetchData