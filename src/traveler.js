import FetchData from './fetch';
import User from './user';

class Traveler extends User {
  constructor(id) {
    super(id);
  }

  async getData(id) {
    let data = new FetchData()
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
    this.dom.showUserSidebar(this.name, this.total)
    this.dom.toggleLogin()
    this.dom.showUserCards(this.trips)
    this.populateDestinationList()
    this.submitButton()
 }

  calcCost() {
    let total = 0
    let costs = this.trips.forEach(trip => {
      total += trip.cost + (trip.cost * .1)
    })
    this.total = total
    return costs
  }

  populateDestinationList() {
    const destinationList = document.querySelector('.destination-select')
    const locales = []
    let destinationNames = this.destinations.forEach(destination => {
      locales.push(destination.destination)
    })
    let sortedLocales = locales.sort()
    this.estimateNewTripCost()
    return sortedLocales.forEach(locale => {
      destinationList.insertAdjacentHTML('beforeend',
      `<option value="${locale}">${locale}</option>`
      )
    })
  }

  submitButton() {
    const submitButton = document.querySelector('button')
    submitButton.addEventListener('click', this.check())
  }

  submitSelections() {
    const destinationSelection = document.getElementById('.destination-select').value
    const dateSelection = document.getElementById('.date-input').value
    const durationSelection = document.getElementById('.duration-input').value
    const numberOfTravelers = document.getElementById('.travelers-number-input').value
  }

  check(event) {
    event.preventDefault()
    console.log("hey")
  }

  estimateNewTripCost() {
    const destinationCosts = this.destinations.forEach(destination => {
      let cost = destination
    })
    return destinationCosts
  }


//     I will select a date, duration, number of travelers and choose from a list of destinations
// After making these selections, I should see an estimated cost (with a 10% travel agent fee) for the trip.
// Once I submit the trip request, it will show on my dashboard as “pending” so that the travel agency can approve or deny it.
//   
// flight cost =  destination.estimatedFlightCostPerPerson * (number of travelers input)
// lodging cost = destination.estimatedLodgingCostPerDay * (number of duration input)
//

}

export default Traveler