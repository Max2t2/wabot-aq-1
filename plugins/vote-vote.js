let handler = async (m, { conn, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return conn.sendButton(m.chat, `در این چت رای گیری درحال انجامی وجود ندارد!`, '© surena', 'آغاز رای گیری', `${usedPrefix}startvote این یک رای گیری بدون متن است!`, conn.vote[id][3])
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) throw 'شما قبلا یک رای ثبت کردید!'
    if (/up/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/de/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    let [reason, upvote, devote] = conn.vote[id]
    conn.send2Button(m.chat, `
「 Voting 」

Reason: ${reason}

╭─「 Upvote 👍 」
│ _Total: ${upvote.length}_
│ ${upvote.map(u => '@' + u.split('@')[0]).join('\n │ ')}
╰────
╭─「 Devote 👎 」
│ _Total: ${devote.length}_
│ ${devote.map(u => '@' + u.split('@')[0]).join('\n │ ')}
╰────
`.trim(), '© surena', 'موافق', `${usedPrefix}upvote`, 'مخالف', `${usedPrefix}devote`, m)
}
handler.help = ['upvote', 'devote']
handler.tags = ['vote']
handler.command = /^(up|de)vote$/i

module.exports = handler
