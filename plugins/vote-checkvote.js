let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return conn.sendButton(m.chat, `در این چت رای گیری درحال انجامی وجود ندارد!`, '© surena', 'آغاز رای گیری', `${usedPrefix}startvote این یک رای گیری بدون متن است!`, m)
    let [reason, upvote, devote] = conn.vote[id]
    conn.sendButton(m.chat, `
「 Voting 」

Alasan: ${reason}

╭─「 Upvotes 」
│ _Total: ${upvote.length}_
│ ${upvote.map(u => '@' + u.split('@')[0]).join('\n')}
╰────
╭─「 Devotes 」
│ _Total: ${devote.length}_
│ ${devote.map(u => '@' + u.split('@')[0]).join('\n│ ')}
╰────
`.trim(), '© surena', 'باطل کردن', `${usedPrefix}-vote`, m)
}
handler.help = ['checkvote']
handler.tags = ['vote']
handler.command = /^checkvote$/i
handler.admin = true

handler.group = true

module.exports = handler
