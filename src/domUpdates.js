import data from './fetch';
import User from './user';
import Agent from './agent';
import Traveler from './traveler';

let travelersData
let tripsData
let destinationsData
let loginData
let traveler, agent

const cards = document.querySelector('.cards');
const nameBox = document.querySelector('.username');
const passwordBox = document.querySelector('.password')

class DomUpdates {
  constructor() {
  }

  makeProfile() {
    let userinput = nameBox.value
    let passwordinput = passwordBox.value
    loginData = {username : userinput, password : passwordinput}
    if (loginData.username.toLowerCase().includes('agency') && loginData.password === 'travel2020') {
      this.makeAgency(userinput, passwordinput)
    } else if (loginData.username.toLowerCase().includes('traveler') && loginData.password === 'travel2020') {
      this.makeTraveler(userinput, passwordinput)
    } else {
      alert('Invalid Login')
    }
  }
  
  makeAgency(userinput, passwordinput){
    agent = new Agent()
    agent.login(userinput.toLowerCase(), passwordinput.toLowerCase())
    this.showAgentPage()
  }
  
  makeTraveler(userinput, passwordinput) {
    var id = loginData.username.match(/(\d+)/);
    id = parseInt(id[0])
    traveler = new Traveler(id)
    traveler.login(userinput.toLowerCase(), passwordinput.toLowerCase())
    this.setData(id)
  }
  
  async setData(id) {
    await traveler.getData(id)
    console.log(traveler)
    this.showTravelerPage(traveler.id)
  }

  showTravelerPage(id) {
    cards.innerHTML = traveler.name;
  }

  showAgentPage() {
    cards.innerHTML = "AGENT PAGE"
  }

}

export default DomUpdates