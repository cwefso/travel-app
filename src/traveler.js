import data from './fetch';
import User from './user';

const cardsArea = document.querySelector('.cards-area');
const loginPage = document.querySelector('.login-page')
const sidebar = document.querySelector('.sidebar')
const mainHeader = document.querySelector('.main-header')

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
    this.showTravelerPage(this.id)
  }

  getTrips(id, trips) {
    let theseTrips = trips.filter(trip => trip.userID === id) 
    return this.trips = theseTrips
  }

  showTravelerPage(id) {
    this.showTotalSpent()
    let builtData = this.trips.forEach(trip =>{
      loginPage.classList.add('hide')
      sidebar.classList.remove('hide')
      mainHeader.classList.remove('hide')
      cardsArea.classList.remove('hide')
      cardsArea.insertAdjacentHTML('beforeend', 
      `<section class="card">
        <p>UserID: ${trip.userID}</p>
        <p>Location: ${trip.locale}</p>
        <p>Trip Date: ${trip.date}</p>
        <p>DestinationID ${trip.destinationID}</p>
        <p>Duration ${trip.duration}</p>
        <p>TripID ${trip.id}</p>
        <p>Status ${trip.status}</p>
        <p>Suggested Activities ${trip.suggestActivities}</p>
        <p>Travelers ${trip.travelers}</p>
        <p>Cost ${trip.cost}</p>
      </section>`)
    })
    return builtData
//     All of my trips (past, present, upcoming and pending)
// Total amount I have spent on trips this year. This should be calculated from the trips data and include a travel agent’s 10% fee
  }

  calcCost() {
    let total = 0
    let costs = this.trips.forEach(trip => {
      total += trip.cost
    })
    this.total = total
    return costs
  }

  showTotalSpent() {
    sidebar.insertAdjacentHTML('beforeend', 
    `<section class="pending">
      <p>Total: ${this.total}</p>
    </section>`
    )
  }



}

export default Traveler