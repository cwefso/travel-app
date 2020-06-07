import data from './fetch';
import User from './user';

class Traveler extends User {
  constructor(id) {
    super(id);
  }

  async getData(id) {
    this.travelersData = await data.getSpecificTravelerData(id)
    let userTrips = await data.getTripsData()
    this.destinatationData = await data.getDestinationsData()
    this.name = this.travelersData.name
    this.travlerType = this.travelersData.travelerType
    this.trips = userTrips
    this.getTrips(this.id, this.trips)
    this.getDestinations()
    this.getDestinationsIDs()
    this.calcCost()
    this.showTravelerPage()
  }

  getTrips(id, trips) {
    let theseTrips = trips.filter(trip => trip.userID === id) 
    return this.trips = theseTrips
  }

  showTravelerPage() {
    this.dom.showUserSidebar()
    this.dom.toggleLogin()
    this.dom.showUserCards()
 }

  calcCost() {
    let total = 0
    let costs = this.trips.forEach(trip => {
      total += trip.cost + (trip.cost * .1)
    })
    this.total = total
    return costs
  }

  estimateNewTripCost() {
//     I will select a date, duration, number of travelers and choose from a list of destinations
// After making these selections, I should see an estimated cost (with a 10% travel agent fee) for the trip.
// Once I submit the trip request, it will show on my dashboard as “pending” so that the travel agency can approve or deny it.
  }





}

export default Traveler