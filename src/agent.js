import User from './user';
import data from './fetch';

const cards = document.querySelector('.cards');
const loginCard = document.querySelector('.login-card')

class Agent extends User {
  constructor(id) {
    super(id);
    this.username = 'agency'
    this.destinations = []
    this.trip = {}
    this.revenue = 0
    this.todaysTravelers = []
  }

  async getData() {
    this.trips = await data.getTripsData()
    this.destinatationData = await data.getDestinationsData()
    this.getDestinations()
    this.getDestinationsIDs()
    this.todaysTravel()
    this.showAgentPage()
  }

  getDestinationsIDs() {
    let locales =  this.trips.forEach(trip => {
      let id = trip.destinationID
      let thisTrip = trip
      this.setDestinationNames(id, thisTrip)
      this.setCost(id, thisTrip)
    })
    return locales
  }

  getDestinations() {
    let entries = Object.entries(this.destinatationData)
    return entries.forEach(entry => {
      this.destinations.push(entry[1])
    })
  }

  setDestinationNames(id, thisTrip) {
    let setNames = this.destinations.forEach(destination => {
      if (destination.id === id) {
        thisTrip.locale = destination.destination
      }
    })
    return setNames
  }

  setCost(id, thisTrip) {
    let cost = this.destinations.forEach(destination => {
      if (destination.id === id) {
        thisTrip.cost = ((destination.estimatedLodgingCostPerDay + destination.estimatedFlightCostPerPerson) * thisTrip.travelers)
      }
    })
    this.totalRevenue()
    return cost
  }

  totalRevenue() {
    let total = 0
    let costs = this.trips.forEach(trip => {
      total += trip.cost
    })
    let revenue = total + (total / 10)

    this.revenue = revenue
    return costs
  }

  todaysTravel() {
    let travelers = this.trips.filter(trip => trip.date === "2020/06/29")
    let allTravelersToday = 0
    let todays = travelers.forEach(traveler => {
      allTravelersToday += traveler.travelers
      this.todaysTravelers.push(traveler)
    })
    return allTravelersToday
  }

  showAgentPage() {
    this.showRevenue()
    this.showPending()
    let builtData = this.todaysTravelers.forEach(trip =>{
      loginCard.classList.add('hide')
      cards.insertAdjacentHTML('beforeend', 
      ` <section class="card">
        <p>UserID: ${trip.userID}</p>
        <p>Trip Data: ${trip.date}</p>
        <p>DestinationID ${trip.destinationID}</p>
        <p>Duration ${trip.duration}</p>
        <p>TripID ${trip.id}</p>
        <p>Status ${trip.status}</p>
        <p>Suggested Activities ${trip.suggestActivities}</p>
        <p>Travelers ${trip.travelers}</p>
        <p>Locale ${trip.locale}</p>
      </section>`)
    })
    return builtData
  }
  
  showRevenue() {
    cards.insertAdjacentHTML('beforeend', 
    `<section class="card">
    <p>Revenue: ${this.revenue}</p>
    </section>`)
  }

  showPending() {
    cards.insertAdjacentHTML('beforeend', 
    `<section class="pending">Pending</section>`
    )
  }

  // New trip requests (a user’s “pending” trips)
  // Total income generated this year (should be 10% of user trip cost)
  // Travelers on trips for today’s date (number, names, however you want to display this!)
}

export default Agent