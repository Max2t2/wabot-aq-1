let handler = async (m, { conn, text }) => {
    if (!text) throw 'چه کسی بن شود؟'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'یک کاربر را تگ کنید'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `*کاربر از دسترسی به سورنا بن شد ✅*`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.rowner = true

module.exports = handler
