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

  it('should create an instance of the FetchData class', function() {
    let fetchData = new FetchData();

    expect(fetchData).to.be.an.instanceof(FetchData)
  });
});

