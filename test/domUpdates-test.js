const chai = require('chai');
import { expect } from 'chai';
let spies = require("chai-spies");
chai.use(spies);

import DomUpdates from '../src/domUpdates.js'

describe('DomUpdates', () => {
  let domUpdates
  beforeEach(() => {
    global.document = {};
    chai.spy.on(document, "querySelector", () => {})
    chai.spy.on(document, "getElementById", () => {})
    domUpdates = new DomUpdates()
    chai.spy.on(domUpdates, "makeAgency", () => {})
  })

  it.only('should be a function', function() {
    expect(DomUpdates).to.be.a('function')
  })
})