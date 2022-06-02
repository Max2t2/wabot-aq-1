let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `یک نفر را تگ کنید!`
    if (global.prems.includes(who.split`@`[0])) throw 'کاربر در حال حاضر یک پرمیوم است!'
    global.prems.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `حالا @${who.split`@`[0]} یک پرمیوم است!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['addprem @user']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)prem$/i

handler.rowner = true

module.exports = handler
