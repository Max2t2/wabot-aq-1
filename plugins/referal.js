const crypto = require('crypto')

const xp_first_time = 2500
const xp_link_creator = 10000
const xp_bonus = {
    5: 20000,
   10: 50000,
   20: 140000,
   50: 400000,
  100: 1000000,
}

let handler = async (m, { conn, usedPrefix, text }) => {
  let users = global.db.data.users
  if (text) {
    if ('ref_count' in users[m.sender]) throw '*نمیتوانید از این کد دعوت استفاده کنید!*'
    let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]
    if (!link_creator) throw '*کد دعوت نادرست است!*'
    let count = users[link_creator].ref_count++
    let extra = xp_bonus[count] || 0
    users[link_creator].exp += xp_link_creator + extra
    users[m.sender].exp += xp_first_time
    users[m.sender].ref_count = 0
    m.reply(`
انجام شد!
+${xp_first_time} XP
`.trim())
    m.reply(`
یک نفر از کد دعوت شما استفاده کرد و
+${xp_link_creator + extra} XP
`.trim(), link_creator)
  } else {
    let code = users[m.sender].ref_code = users[m.sender].ref_code || new Array(11).fill().map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][crypto.randomInt(62)]).join('')
    users[m.sender].ref_count = users[m.sender].ref_count ? users[m.sender].ref_count : 0
    let command_text = `${usedPrefix}ref ${code}`
    let command_link = `wa.me/${conn.user.jid.split('@')[0]}?text=${encodeURIComponent(command_text)}`
    let share_text = `
کد دعوت من رو برای شماره زیر ارسال کن و *${xp_first_time} XP* رایگان از ربات واتساپ بگیر!

کد دعوت شما: *${code}*

${command_link}
`.trim()
    m.reply(`
هر کاربر جدیدی که کد دعوت شمارو وارد کنه *${xp_link_creator} XP* رایگان دریافت میکنه!


تا الان *${users[m.sender].ref_count}* نفر از کد دعوت شما استقاده کردن!

کد دعوت شما: *${code}*

این لینک رو برای دوستات بفرست: ${command_link}

یا به راحتی با این لینک این کارو انجام بده: wa.me/?text=${encodeURIComponent(share_text)}

${Object.entries(xp_bonus).map(([count, xp]) => `${count} عضو = ${xp} XP`).join('\n')}
`.trim())
  }
}
handler.help = ['ref']
handler.tags = ['fun']

handler.command = ['ref']

handler.register = true

module.exports = handler
