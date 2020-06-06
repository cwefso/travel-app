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

}

export default DomUpdates