
let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, usedPrefix, command }) => {
  if (!m.quoted) throw `برای این کار روی یک استیکر ریپلای بزنید و از *${command + usedPrefix}* استفاده کنید`
  let mime = m.quoted.mimetype || ''
  if (!/webp/.test(mime)) throw `برای این کار روی یک استیکر ریپلای بزنید و از *${command + usedPrefix}* استفاده کنید`
  let media = await m.quoted.download()
  let out = Buffer.alloc(0)
  if (/webp/.test(mime)) {
    out = await webp2png(media)
  }
  await conn.sendFile(m.chat, out, 'out.png', '*© surena*', m, false, {
    thumbnail: Buffer.alloc(0)
  })
}
handler.help = ['toimg2 (reply)']
handler.tags = ['sticker']
handler.command = ['toimg2']
module.exports = handler
