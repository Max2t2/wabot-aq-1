let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) return conn.send2Button(m.chat, `There is still an absence in this chat!`, '© stikerin', 'Wipe', `${usedPrefix}deleteabsen`, 'Check', `${usedPrefix}cekabsen`, conn.absen[id][0])
    conn.absen[id] = [
        await conn.sendButton(m.chat, `Absen begins`, '© surena', 'Absen', `${usedPrefix}absen`, m),
        [],
        text
    ]
}
handler.help = ['mulaiabsen [teks]']
handler.tags = ['absen']
handler.command = /^(start|mulai|\+)absen$/i
handler.owner = true

module.exports = handler
