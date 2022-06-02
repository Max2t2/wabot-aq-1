let handler = async (m) => {
  let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
  if (!mention) throw `Tag/mention the person!`
  let warn = global.db.data.users[mention].warn
  if (warn > 0) {
    global.db.data.users[mention].warn -= 1
    m.reply('⚠️ *WARNING -1*')
    m.reply(`Admin reduced your warn, now your warn is: ${warn - 1}`, mention)
  } else if (warn == 0) {
    m.reply('The user does not have any warn')
  }
}

handler.help = ['Delwarn @user']
handler.tags = ['group']
handler.command = /^delwarn$/i
handler.disabled = true

handler.group = true
handler.admin = true

module.exports = handler
