let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply(📣 text + '\n' + readMore + '\n' + users.map(v => '@' + v.replace(/@.+/, '')).join`\n`, null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.tags = ['group']
handler.command = ['tagall']

handler.admin = true
handler.group = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
