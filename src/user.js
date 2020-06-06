class User {
  constructor(id){
    id !== undefined ? this.id = id : this.id = 1
    this.username = 'traveler' + id
    this.password = 'travel2020'
    this.today = new Date();
    this.date = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
  }

}

module.exports = User