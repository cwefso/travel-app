import chai from 'chai';
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies)

import FetchData from '../src/fetch'
let fetchedData

describe ('Fetch', function() {
  beforeEach(() => {
    global.document = {}; 
    chai.spy.on(document, 'fetch', () => {});
    fetched = new FetchData();
    chai.spy.on(fetched, 'getTravelersData', () => {});
  })

  it('should be a function', function() {
    expect(FetchData).to.be.a('function');
  });

  it('should create an instance of the FetchData class', function() {
    expect(fetched).to.be.an.instanceof(FetchData)
  });

  it.only('should be able to fetch traveler data', function() {
    fetched.getTravelersData()
    expect(document.fetch).to.have.been.called(1)
  });

});

