import chai from 'chai';
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies)

import DomUpdates from '../src/domUpdates'
let domUpdates

describe('DomUpdates', function() {
  beforeEach(() => {
    global.document = {};
    chai.spy.on(document, 'getElementById', () => {})
    chai.spy.on(document, 'querySelector', () => {})
    chai.spy.on(document, 'addEventListener', () => {})
    domUpdates = new DomUpdates();
  
})

  it('should be a function', () => {

    expect(DomUpdates).to.be.a('function');  
  });

  it('should create an instance of the domUpdates class', () => {

    expect(domUpdates).to.be.an.instanceof(DomUpdates);  
  });

  it('should ba able to add an Event Listener', () => {
    domUpdates.toggleLogin()
    expect(document.querySelector).to.have.been.called(1);
  })


});