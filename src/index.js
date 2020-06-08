// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file

import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
import FetchData from './fetch';
import DomUpdates from './domUpdates'


const querySelectors = {
  login: document.querySelector('.submit-login'),
  nameBox: document.querySelector('.username'),
  passwordBox: document.querySelector('.password'),
}



async function getData() {
  let data = new FetchData
  data.travelersData = await data.getTravelersData()
  data.tripsData = await data.getTripsData()
  data.destinationsData = await data.getDestinationsData()
  const domUpdates = new DomUpdates(data, querySelectors)
  domUpdates.setEventListener()
  return () => {}
}

getData()
