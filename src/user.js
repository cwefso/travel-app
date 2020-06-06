class User {
  constructor(id){
    id !== undefined ? this.id = id : this.id = 1
    this.username = 'traveler' + id
    this.password = 'travel2020'
  }

}

module.exports = User