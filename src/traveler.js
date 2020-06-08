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
    this.submitButton()
    this.populateDestinationList()
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
    const submitButton = document.querySelector('.submit-trip')
    var formData = new FormData(document.querySelector('form'))
    submitButton.addEventListener('click', (event) => {
      event.preventDefault()
      this.check(formData)
    });
  }

  check(formData) {
    let form = {}
    form.destinationSelection = document.querySelector('.destination-select').value
    form.dateSelection = document.querySelector('.date').value
    form.durationSelection = document.querySelector('.duration').value
    form.numberOfTravelers = document.querySelector('.travelercount').value
    console.log(form)
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