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
        <article class="card-header">
          <h1>Location: ${trip.locale}</h1>
          <h2>Trip Date: ${trip.date}</h2>
        </article>
          <ul>
            <li>Duration ${trip.duration}</li>
            <li>Status ${trip.status}</li>
            <li>Suggested Activities ${trip.suggestActivities}</li>
            <li>Travelers ${trip.travelers}</li>
            <li>Cost ${trip.cost}</li>
          </ul>
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