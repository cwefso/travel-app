import chai from 'chai';
const expect = chai.expect;
import User from '../src/user'

describe('User Class', () => {

  let user;

  beforeEach(() => {
    user = new User(10);
  })

  it('should be a function', () => {
    expect(User).to.be.a('function');
  })

  it('should create an User instance', () => {
    expect(user).to.be.an.instanceof(User);
  })

  it('should be instantiated with an id) ', () => {
    expect(user.id).to.eql(10);
  })

  it('should have an id of null if passed in no id) ', () => {
    user = new User();
    expect(user.id).to.eql(null);
  })

  it('should have a default password of "travel2020"', () => {
    expect(user.password).to.eql('travel2020');
  })

  it('should have a default username of traveler plus user id) ', () => {
    expect(user.username).to.eql('traveler10');
  })

})
