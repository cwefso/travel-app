import data from './fetch';
import User from './user';

class Traveler extends User {
  constructor(id) {
    super(id);
  }

  async getData(id) {
    this.travelersData = await data.getSpecificTravelerData(id)
    console.log(this)
    return data
  }
}

export default Traveler