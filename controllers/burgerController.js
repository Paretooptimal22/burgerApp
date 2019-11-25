const db = require(`../config`)

module.exports = {
  getBurger() {
    let result = []
    db.query(`SELECT * FROM burgers`, (e, burgers) => {
      if (e) {
        console.log(e)
      }
      result = burger
    })
    return result
  },
  addBurger() {

  },
  eatBurger() {

  },
  removeBurger() {

  }
}