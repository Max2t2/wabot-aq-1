let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '*شخص مورد نظر را تگ کنید*'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw 'مقدار EXP برای انتقال را وارد کنید'
  if (isNaN(txt)) throw '_فقط برای شماره ها_'
  let xp = parseInt(txt)
  let exp = xp
  let pjk = Math.ceil(xp * pajak)
  exp += pjk
  if (exp < 1) throw 'Minimal 1'
  let users = global.db.data.users
  if (exp > users[m.sender].exp) throw 'شما EXP مورد نیاز برای انتقال را ندارید!'
  users[m.sender].exp -= exp
  users[who].exp += xp

  m.reply(`(${-xp} XP) + (${-pjk} XP (Tax 2%)) = ( ${-exp} XP)`)
  conn.fakeReply(m.chat, `+${xp} XP added to %{who}`, who, m.text)
}
handler.help = ['pay @user <amount>']
handler.tags = ['xp']
handler.command = /^pay$/
handler.rowner = true

module.exports = handler

