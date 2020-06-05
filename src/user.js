class User {
  constructor(id){
    id !== undefined ? this.id = id : this.id = 1
    this.username = 'traveler' + id
    this.password = 'travel2020'
  }
  
  login(username, password) {
    if((username.includes('agency')) && (password === this.password)) {
      console.log('agent')
    }
    
    if((username.includes('traveler')) && (password === this.password)) {
      console.log(this.username)
    }
  }

}

module.exports = User