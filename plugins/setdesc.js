let handler = async (m, { conn, args }) => {
 await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
  m.reply('بیو گروه با موفقیت تنظیم شد ✅')
}

handler.help = ['setdesc <text>']
handler.tags = ['group']
handler.command = /^setdesc$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = false
handler.admin = true
handler.botAdmin = true

module.exports = handler
