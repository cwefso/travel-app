import data from './fetch';
import User from './user';
import Agent from './agent';
import Traveler from './traveler';


class DomUpdates {
  constructor() {
    this.tripsData;
    this.loginData = {};
    this.traveler = {};
    this.agent = {};
    this.nameBox = document.querySelector('.username');
    this.passwordBox = document.querySelector('.password')
  }

  makeProfile() {
    let userinput = this.nameBox.value
    let passwordinput = this.passwordBox.value
    this.loginData = {username : userinput, password : passwordinput}
    if (this.loginData.username.toLowerCase().includes('agency') && this.loginData.password === 'travel2020') {
      this.makeAgency()
    } else if (this.loginData.username.toLowerCase().includes('traveler') && this.loginData.password === 'travel2020') {
      this.makeTraveler()
    } else {
      alert('Invalid Login')
    }
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
    const mainHeader = document.querySelector('.main-header')
    const loginPage = document.querySelector('.login-page')    
    loginPage.classList.add('hide')
    sidebar.classList.remove('hide')
    mainHeader.classList.remove('hide')
    cardsArea.classList.remove('hide')
  }

  showUserSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.insertAdjacentHTML('beforeend', 
    ` <section class="user-card">
        <section class="user-name">
          <p>Hello ${this.name}</p>
        </section> 
        <section class="total-spent">
          <p>Total Spent on Travel: $${this.total}</p>
        </section>
      </section>
      <section class="new-trip">
        <p>Destination</p>
      <input aria-label='Destination' id='destination-input' class='destination'>
      </input>
        <p>Date</p>
      <input aria-label='Date' id='new-date-input' class='date-input'>
      </input>
      <p>Duration</p>
      <input aria-label='Duration' id='duration-input' class='duration-input'>
      </input>
      <p>Number of Travelers</p>
      <input aria-label='Number of Travelers' id='travelers-number-input' class='travelers-number-input'>
      </input>
      <button aria-label="submit" id='submit' class='submit-login'>
        Submit   
      </button>
    </section>`
    )
  }

  showUserCards() {
    const cardsArea = document.querySelector('.cards-area')
    let builtData = this.trips.forEach(trip =>{
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
  }

}

export default DomUpdates