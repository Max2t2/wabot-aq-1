let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '*شخص مورد نظر را تگ کنید*'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw 'مقدار Limit برای انتقال را وارد کنید'
    if (isNaN(txt)) throw '_مخصوص شماره ها_'
    let poin = parseInt(txt)
    let limit = poin
    let pjk = Math.ceil(poin * pajak)
    limit += pjk
    if (limit < 1) throw 'Minimal 1'
    let users = global.db.data.users
    if (limit > users[m.sender].limit) throw 'شما Limit مورد نیاز برای انتقال را ندارید!'
    users[m.sender].limit -= limit
    users[who].limit += poin

    m.reply(`(${-poin} Limit) + (${-pjk} Limit (Tax 2%)) = ( ${-limit} Limit)`)
    conn.fakeReply(m.chat, `+${poin} Limit added to that person`, who, m.text)
}
handler.help = ['paylimit @user <amount>']
handler.tags = ['xp']
handler.command = /^paylimit$/
handler.rowner = false

module.exports = handler

