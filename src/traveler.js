import data from './fetch';
import User from './user';

class Traveler extends User {
  constructor(id) {
    super(id);

  }

  async getData(id) {
    this.travelersData = await data.getSpecificTravelerData(id)
    this.name = this.travelersData.name
    this.travlerType = this.travelersData.travelerType
    this.kill()
  }

  kill() {
    console.log()
  }

}

export default Traveler