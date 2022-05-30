let handler = function (m) {
  if (!m.quoted) throw false
  let { chat, fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw false
  if (!isBaileys) throw '*این پیام توسط ربات ارسال نشده!*'
  this.deleteMessage(chat, {
    fromMe,
    id,
    remoteJid: chat
  })
}
handler.help = ['del(ete)']
handler.tags = ['info']
handler.admin = true

handler.command = /^del(ete)?$/i

module.exports = handler
