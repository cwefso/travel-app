class FetchData {
  constructor() {
    this.rootURL = `https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/`
  }

  getTravelersData() {
    return fetch(`${this.rootURL}travelers/travelers`)
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
    return fetch(`${this.rootURL}travelers/travelers/${id}`)
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
    return fetch(`${this.rootURL}trips/trips/`)
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
    return fetch(`${this.rootURL}trips/trips/${id}`)
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
    return fetch(`${this.rootURL}destinations/destinations`)
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
    return fetch(`${this.rootURL}trips/trips`, {
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
    return fetch(`${this.rootURL}trips/updateTrip`, {
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

  deleteTrip(id) {
    let bodyText = {
      "id": id,
    }
    return fetch(`${this.rootURL}trips/trips/`, {
      method: 'DELETE',
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