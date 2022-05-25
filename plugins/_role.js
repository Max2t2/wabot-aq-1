const roles = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'Newbe': 0,
  'Human': 10,
  'Chat master': 20,
  'Green gold': 30,
  'Chat master': 40,
  'God father': 50,
  'Mega human': 60,
  'Black dark': 80,
  'LEGEND ⭐️': 90,
  'Owner ☄️ ': 10000
}

module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}
