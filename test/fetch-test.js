import chai from 'chai';
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies)

import FetchData from '../src/fetch'

describe ('Fetch', function() {

  it('should be a function', function() {
    let fetchData = new FetchData();

    expect(fetchData).to.be.a('function');
  });

  it('should create an instance of an ApiClass', function() {
    let fetchData = new FetchData();

    expect(fetchData).to.be.an.instanceof(FetchData)
  });
});

describe('Fetch behavior', function() {

  beforeEach(function() {
    
    global.document = {}; 
    chai.spy.on(document, 'fetch', () => {});
  });

  it.only('should be able to fetch traveler Data', function() {

    let fetchData = new FetchData();
    expect(fetchData.getTravelersData()).to.call(fetch)
  });
});