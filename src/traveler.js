import data from './fetch';
import User from './user';

const cards = document.querySelector('.cards');

class Traveler extends User {
  constructor(id) {
    super(id);

  }

  async getData(id) {
    this.travelersData = await data.getSpecificTravelerData(id)
    let userTrips = await data.getTripsData()
    this.name = this.travelersData.name
    this.travlerType = this.travelersData.travelerType
    this.trips = userTrips
    this.getTrips(this.id, this.trips)
    this.showTravelerPage(this.id)
  }

  getTrips(id, trips) {
    let theseTrips = trips.filter(trip => trip.userID === id) 
    return this.trips = theseTrips
  }

  showTravelerPage(id) {
    cards.innerHTML = this.trips[0].date
  }


}

export default Traveler