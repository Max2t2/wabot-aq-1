let handler = async (m, { conn, command, text }) => {
  let type = command.replace(/^set(menu|help|\?)/, '').toLowerCase()
  if (type == '') {
    if (text) {
      conn.menu = text
      conn.reply(m.chat, '*Menu successfully changed ✅*\n\n' + info, m)
    } else {
      conn.menu = {}
      conn.reply(m.chat, '*Menu reset ✅*', m)
    }
  } else {
    conn.menu = typeof conn.menu == 'object' ? conn.menu : {}
    if (text) {
      conn.menu[type] = text
      conn.reply(m.chat, 'Menu ' + type + ' successfully set up\n' + info, m)
    } else {
      delete conn.menu[type]
      conn.reply(m.chat, 'Menu ' + type + ' reset', m)
    }
  }
}
handler.help = ['', 'before', 'header', 'body', 'footer', 'after'].map(v => 'setmenu' + v + ' <teks>')
handler.tags = ['owner']
handler.command = /^set(menu|help|\?)(before|header|body|footer|after)?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let info = `
__________
*Options:*

%% (%)
%p (Prefix)
%exp (Current Exp)
$maxexp (Exp To Level Up)
%totalexp (Total Exp)
%xp4levelup (Needed EXPT to levelup)
%limit (Limit)
%level (level)
%role (Role)
%name (Name)
%weton (Weton Today)
%week (Week)
%date (Date)
%time (Time)
%uptime (Bot uptime)
%rtotalreg (Number of users registered in database)
%totalreg (Number of users in database)
%npmname 
%npmdesc
%version
%github

Bagian Menu Header & Footer:
%category (Category)

Bagian Menu Body:
%cmd (Command)
%islimit (If command is at limit)
%isPremium (If command restricted for premium)
`.trim()
