// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file

import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
import data from './fetch';
import DomUpdates from './domUpdates'
import User from './user'
import Traveler from './traveler'

let travelersData
let tripsData
let destinationsData

let domUpdates = new DomUpdates()

const login = document.querySelector('.submit-login');
const cards = document.querySelector('.cards')

login.addEventListener('click', (event) => {
  event.preventDefault()
  domUpdates.makeProfile()
});

async function getData() {
  travelersData = await data.getTravelersData()
  tripsData = await data.getTripsData()
  destinationsData = await data.getDestinationsData()
  resolveData()
}

const resolveData = () => {}

window.onload = getData()
