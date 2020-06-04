// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'


import data from './fetch';
import User from './user';
import Agent from './agent';
import Traveler from './traveler';

let travelersData
let tripsData
let destinationsData
let loginData

const login = document.querySelector('.submit-login');
const nameBox = document.querySelector('.username');
const passwordBox = document.querySelector('.password')

login.addEventListener('click', (event) => {
  event.preventDefault()
  makeProfile()
});

async function getData() {
  travelersData = await data.getTravelersData()
  tripsData = await data.getTripsData()
  destinationsData = await data.getDestinationsData()
  onStartUp()
}

function onStartUp() {
  console.log()
}

function makeProfile() {
  let userinput = nameBox.value
  let passwordinput = passwordBox.value
  loginData = {username : userinput, password : passwordinput}
  console.log(loginData)
  if (loginData.username.toLowerCase().includes('agency') && loginData.password === 'travel2020') {
    let agent = new Agent()
    agent.login(userinput.toLowerCase(), passwordinput.toLowerCase())
  } else if (loginData.username.toLowerCase().includes('traveler') && loginData.password === 'travel2020') {
    var id = loginData.username.match(/(\d+)/);
    id = parseInt(id[0])
    console.log(typeof id)
    console.log(id)
    let traveler = new Traveler(id)
    traveler.login(userinput.toLowerCase(), passwordinput.toLowerCase())
  } else {
    alert('Invalid Login')
  }
}

window.onload = getData()

