class User {
  constructor(id){
    this.username = 'traveler' + id
    this.password = 'travel2020'
  }
  
  login(username, password) {
    if((username === 'agency') && (password === this.password)) {
      console.log("Agent Login")
    } else if((username === this.username) && (password === this.password)) {
      console.log('Traveler Login')
    } else {
      console.log('Invalid Login')
    }
  }

}

module.exports = User