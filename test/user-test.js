import chai from 'chai';
import User from '../src/user.js'
import TestData from '../test/testData.js'
const expect = chai.expect;

let user1, testData

describe('User', () => {
  beforeEach(() => {
    user1 = new User(45);
    testData = new TestData();
  });

  it('should have a password property with a defaul value', function() {
    expect(user1.password).to.equal('travel2020');
  });

  it('should not have an id if created without one', function() {
    let user2 = new User()
    expect(user2.id).to.equal(null);
  });

  it('should have a username with property of traveler + user id', function() {
    expect(user1.username).to.equal('traveler45');
  });

  it('should have a property of today that is todays day', function() {
    let date = new Date();
    expect(JSON.stringify(user1.today)).to.equal(JSON.stringify(date));
  });

  // it('should be able to add destinations to destinationData', function() {
  //   user1.destinationData = testData.destinations;
  //   user1.getDestinations();
  //   expect(user1.destinations).to.equal([])
  // });

})
