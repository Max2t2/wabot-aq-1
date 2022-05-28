let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age, level, role } = global.db.data.users[who]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let math = max - xp
    let prem = global.prems.includes(who.split`@`[0])
    let str = `
*Name:*\n${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\n*About:*\n' + about : ''}


*Number:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*Link:* wa.me/${who.split`@`[0]}${registered ? '\n*Age:* ' + age : ''}

______________

*XP:* TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Ready to *${usedPrefix}levelup*` : `${math} XP left to levelup`}]
*Level:* ${level}
*Role:* ${role}
*Limit:* ${limit}
*Registered:* ${registered ? 'Yes': 'No'}
Premium: ${prem ? 'Yes' : 'No'}${lastclaim > 0 ? '\n______________\nEXP claimed today ✅' : ''}
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^profile$/i
module.exports = handler

