let handler  = async (m, { conn }) => {
  if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, 'Why go directly to the terminal?', m)
  else {
    await conn.reply(m.chat, 'سورنا توسط توسعه دهندگان خاموش شد...')', m)
    conn.close()
  }
}
handler.help = ['stop']
handler.tags = ['surena']
handler.command = /^(berhenti|stop)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

