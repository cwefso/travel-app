import FetchData from './fetch';
import Agent from './agent';
import Traveler from './traveler';


class DomUpdates {
  constructor(data, querySelectors) {
    this.tripsData;
    this.loginData = {};
    this.traveler = {};
    this.agent = {};
    this.querySelectors = querySelectors;
    this.data = data;
  }

  makeProfile() {
    let userinput = this.querySelectors.nameBox.value
    let passwordinput = this.querySelectors.passwordBox.value
    let userIDinput
    if (userinput.match(/\d+/g) !== null) {
        userIDinput = userinput.match(/\d+/g).map(Number)[0];
    } else {
        userIDinput = 0
    }
    this.loginData = {username : userinput, password : passwordinput, userID : userIDinput}
    if (this.loginData.username.toLowerCase() === 'agency' && this.loginData.password === 'travel2020') {
      this.makeAgency()
    } else if ((this.loginData.userID < 50) && this.loginData.password === 'travel2020') {
      this.makeTraveler()
    } else {
      alert('Invalid Login')
    }
  }

  setEventListener() {
    this.querySelectors.login.addEventListener('click', (event) => {
      event.preventDefault()
      this.makeProfile()
    });
  }
  
  makeAgency(){
    this.agent = new Agent()
    this.agent.getData()
  }
  
  makeTraveler() {
    var id = this.loginData.username.match(/(\d+)/);
    id = parseInt(id[0])
    this.traveler = new Traveler(id)
    this.setTravelerData(id)
  }
  
  async setTravelerData(id) {
    await this.traveler.getData(id)
    await this.traveler.getTrips(id, this.tripsData)
    this.traveler.showTravelerPage(this.traveler.id)
  }

  toggleLogin() {
    const sidebar = document.querySelector('.sidebar')
    const cardsArea = document.querySelector('.cards-area')
    const loginPage = document.querySelector('.login-page')   
    const mainHeader = document.querySelector('.main-header') 
    loginPage.classList.add('hide')
    sidebar.classList.remove('hide')
    cardsArea.classList.remove('hide')
    mainHeader.classList.remove('hide')
  }

  showUserSidebar(name, total) {
    const sidebar = document.querySelector('.sidebar')
    sidebar.innerHTML = ` <section class="user-card">
        <section class="user-name">
          <p>Hello ${name}</p>
        </section> 
        <section class="total-spent">
          <p>Total Spent on Travel: $${total}</p>
        </section>
      </section>
      <form name="newtrip">
        <label for="destination">Destination</label>
        <select aria-label='Destination' class="destination-select" name="destination-select" id="destination-select">
        </select>
        <label for="date">Departure Date </label>
        <input type="date" class="date" name="date" id="date" required>
        <label for="duration">Trip Duration in Days</label>
        <input type="duration" class="duration" name="duration" id="duration" required>
        <label for="travelercount">How Many Travelers?</label>
        <input type="travelercount" class="travelercount" name="travelercount" id="travelercount" required>
        <button aria-label="estimate-cost" id='estimate-cost' class='estimate-cost'>
        Estimate Cost
        </section>
        <button aria-label="submit" id='submit' class='submit-trip'>
          Submit   
        </button>
        <section class="trip-cost"></section>
      </form>
    </section>`
  }

  showUserCards(trips) {
    const pending = document.querySelector('.pending')
    pending.classList.add('hide')
    const cardsArea = document.querySelector('.cards-area')
    cardsArea.innerHTML = ""
    let builtData = trips.forEach(trip => {
      cardsArea.insertAdjacentHTML('beforeend', 
      `<section class="card">
        <article class="card-header">
          <h1>Location: ${trip.locale}</h1>
          <h2>Trip Date: ${trip.date}</h2>
        </article>
          <ul>
            <li>Trip ID#: ${trip.id}</li>
            <li>Duration in days: ${trip.duration}</li>
            <li>Status: ${trip.status}</li>
            <li>Number of Travelers: ${trip.travelers}</li>
            <li>Cost: ${trip.cost}</li>
          </ul>
      </section>`)
    })
    return builtData
  }

}

export default DomUpdates