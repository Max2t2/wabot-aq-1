let handler = async (m, { conn }) => {
    let id = m.chat
    let mCount = {}
    let totalM = 0
    await conn.loadAllMessages(id, m => {
        let user = m.key.fromMe ? conn.user.jid : m.participant ? m.participant : id.includes('g.us') ? '' : id
        if (!user) return
        if (user in mCount) mCount[user]++
        else mCount[user] = 1
        totalM++
    }, 1000)
    let sorted = Object.entries(mCount).sort((a, b) => b[1] - a[1])
    let pesan = sorted.map(v => `👤 ${v[0].replace(/(\d+)@.+/, '@$1')}: ${v[1]} پیام`).join('\n')
    m.reply(`امروز در این چت *${totalM}* پیام ارسال شد!\n\n${pesan}`, false, { contextInfo: { mentionedJid: sorted.map(v => v[0]) } })
}
handler.help = ['total']
handler.tags = ['group']
handler.admin = true

handler.command = /^total$/i

module.exports = handler
