const db = require(`../config`)

module.exports = {
  getBurgers() {
    let result = []
    db.query(`SELECT * FROM burgers`, (e, burgers) => {
      if (e) {
        console.log(e)
      }
      result = burgers
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