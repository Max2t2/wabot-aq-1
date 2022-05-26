const { createHash } = require('crypto')
let handler = async function (m, { args, usedPrefix }) {
  if (!args[0]) throw `*Serial Number is empty*\nPlease check your Serial Number by using *.ceksn*\n\nLike:\n.unreg <sn>`
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Serial Number is wrong'
  user.registered = false
  m.reply(`_Profile deleted successfully!_`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['exp']

handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler

