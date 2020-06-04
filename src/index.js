// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'


import data from './fetch';
import User from './user';

let travelersData
let tripsData
let destinationsData
let user = new User(20)

const login = document.querySelector('.submit-login');
const nameBox = document.querySelector('.username');
const passwordBox = document.querySelector('.password')

login.addEventListener('click', (event) => {
  event.preventDefault()
  sayWhat()
});

async function getData() {
  travelersData = await data.getTravelersData()
  tripsData = await data.getTripsData()
  destinationsData = await data.getDestinationsData()
  onStartUp()
}


function onStartUp() {
  console.log('Check')
}

function sayWhat() {
  let userinput = nameBox.value
  let passwordinput = passwordBox.value
  user.login(userinput.toLowerCase(), passwordinput.toLowerCase())
}

window.onload = getData()

