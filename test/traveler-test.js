import chai from 'chai';
import Traveler from '../src/traveler.js'
// import TestData from '/testData.js'
const expect = chai.expect;

let traveler1

describe('Traveler', () => {
  beforeEach(() => {
    traveler1 = new Traveler(45);
  });

  it('should have a password property with a defaul value', function() {
    expect(traveler1.password).to.equal('travel2020');
  });

})
