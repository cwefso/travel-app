import data from './fetch';
import User from './user';


class Traveler extends User {
  constructor(id) {
    super(id);
  }

  async getUserDatabyID(id) {
    let data = await data.getSpecificTravelersData(id)
    console.log(data)
    return data
  }
}

export default Traveler