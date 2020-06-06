import User from './user';
import data from './fetch';

class Agent extends User {
  constructor(id) {
    super(id);
    this.username = 'agency'
    this.destinations = []
  }

  async getData() {
    this.trips = await data.getTripsData()
    this.destinatationData = await data.getDestinationsData()
    this.getDestinationsIDs()
    this.getDestinations()
    console.log(this.destinations)
  }

  getDestinationsIDs() {
    let locales =  this.trips.forEach(trip => {
      let id = trip.destinationID
      let thisTrip = trip
    })
    return locales
  }

  getDestinations() {
    let entries = Object.entries(this.destinatationData)
    return entries.forEach(entry => {
      this.destinations.push(entry[1])
    })
  }
    // get trips data
    // get destination data
    // for each trip =>
    // if (trip.destinationID === destination.id) {trip.destinationName === destination.destinations}

  // New trip requests (a user’s “pending” trips)
  // Total income generated this year (should be 10% of user trip cost)
  // Travelers on trips for today’s date (number, names, however you want to display this!)
}

export default Agent