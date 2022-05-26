const roles = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'Newbe': 0,
  'Soldier': 10,
  'Chat master': 20,
  'Green gold': 30,
  'Mafia': 40,
  'God father': 50,
  'Mega human': 60,
  'Mad master': 70,
  'Black dark 🖤': 80,
  'Leader 💎': 90,
  'LEGEND ⭐️': 100,
  'OWNER 🪐': 10000
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
