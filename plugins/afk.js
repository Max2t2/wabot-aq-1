let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
حالا ${conn.getName(m.sender)} در حالت AFK قرار دارد${text ? ' زیرا ' + text + '.' : '!'}
`)
}
handler.help = ['afk <Reason>']
handler.tags = ['main']
handler.command = /^afk$/i
handler.group = true

module.exports = handler
