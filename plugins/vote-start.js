let handler = async (m, { conn, text, usedPrefix }) => {
    if (m.isGroup) {
       // if (!isAdmin || isOwner) return dfail('admin', m, conn)
    }
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) return conn.send2Button(m.chat, `در این گروه یک رای گیری فعال وجود دارد!`, '© surena', 'بررسی', `${usedPrefix}cekvote`, 'باطل کردن', `${usedPrefix}-vote`, conn.vote[id][3])
    conn.vote[id] = [
        text,
        [],
        [],
        await conn.send2Button(m.chat, text, '© surena', 'موافق', `${usedPrefix}upvote`, 'مخالف', `${usedPrefix}devote`, m)
    ]
}
handler.help = ['mulaivote [alasan]']
handler.tags = ['vote']
handler.command = /^(start|mulai|\+)vote$/i
handler.admin = true
handler.botadmin = true

module.exports = handler
