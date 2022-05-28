let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw '*!عکسی یافت نشد*'
        await conn.updateProfilePicture(m.chat, img)
    } else throw `برای این کار روی یک تصویر ریپلای بزنید و *setpp${usedPrefix}* را ارسال کنید`
}
handler.help = ['setpp']
handler.tags = ['group']

handler.command = /^setpp$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler
