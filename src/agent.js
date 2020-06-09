import User from './user';
import FetchData from './fetch';

class Agent extends User {
  constructor(id) {
    super(id);
    this.username = 'agency'
    this.trip = {}
    this.revenue = 0
    this.todaysTravelers = []
  }

  async getData() {
    const data = new FetchData()
    this.trips = await data.getTripsData()
    this.destinatationData = await data.getDestinationsData()
    this.showData()
  }
  
  showData() {
    this.getDestinations()
    this.getDestinationsIDs()
    this.todaysTravel()
    this.totalRevenue()
    this.showAgentPage()
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

  getPending() {
    let pendingTrips = this.trips.filter(trip => trip.status === "pending")
    this.pendingTrips = pendingTrips
    return pendingTrips
  }

  showAgentPage() {
    this.showRevenue()
    this.getPending()
    this.showPending()
    this.dom.toggleLogin()
    const cardsArea = document.querySelector('.cards-area')
    let builtData = this.todaysTravelers.forEach(trip =>{
      cardsArea.insertAdjacentHTML('beforeend', 
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
    this.searchPending()
    return builtData
  }
  
  showRevenue() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.insertAdjacentHTML('beforeend', 
    `<section class="user-card">
      <section class="user-name">
        <p>Agent</p>
      </section> 
    <section class="total-revenue">
      <p>Total Revenue: $${this.revenue}</p>
    </section>
    <input class="pending-search"></class>
    <button class="approve">click</section>
    </button>`)
  }

  showPending() {
    const mainHeader = document.querySelector('.main-header')
    mainHeader.innerHTML = ""
    let pending = this.pendingTrips.forEach(trip => {
      mainHeader.insertAdjacentHTML('beforeend', 
      `<section class="pending">${trip.locale}-${trip.date}-${trip.id}</section>`
      )
    })
  }

  searchPending() {
    const approve = document.querySelector('.approve')
    approve.addEventListener('click', (event) => {
      const search = document.querySelector('.pending-search').value
      let id = parseInt(search)
      event.preventDefault()
      this.agencyApprove(id)
      this.getPending()
      this.showPending()
    })
  }

  agencyApprove(id) {
    const fetch = new FetchData()
    fetch.approveTrip(id)
      .then(response => console.log(response))
      .catch(err => console.log(err.message))
  }

  // New trip requests (a user’s “pending” trips)
  // Total income generated this year (should be 10% of user trip cost)
  // Travelers on trips for today’s date (number, names, however you want to display this!)
}

export default Agent