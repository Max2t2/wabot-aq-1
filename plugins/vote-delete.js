let handler = async (m, { conn, usedPrefix, isAdmin, isOwner }) => {
    if (m.isGroup) {
        //if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return conn.sendButton(m.chat, `در این چت رای گیری درحال انجامی وجود ندارد!`, '© surena', 'آغاز رای گیری', `${usedPrefix}startvote این یک رای گیری بدون متن است!`, m)
    delete conn.vote[id]
    m.reply(`انجام شد ✅`)
}
handler.help = ['hapusvote']
handler.tags = ['vote']
handler.command = /^(delete|hapus|-)vote$/i
handler.admin = true 
handler.group = true

module.exports = handler
