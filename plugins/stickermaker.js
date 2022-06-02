//made by Anshul
const uploadImage = require('../lib/uploadImage')
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
const effects = ['jail', 'gay', 'glass', 'wasted' ,'triggered', 'lolice', 'simpcard', 'horny']

let handler = async (m, { conn, usedPrefix, text }) => {
    let effect = text.trim().toLowerCase()
  if (!effects.includes(effect)) throw `
*Usage:* ${usedPrefix}stickmaker <effectname>
*Example:* ${usedPrefix}stickmaker jail

*Effects list:*
${effects.map(effect => `_> ${effect}_`).join('\n')}
`.trim()
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'برروی یک عکس ریپلای بزنید!'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `فرمت ${mime} پشتیبانی نمیشود`
  let img = await q.download()
  let url = await uploadImage(img)
  let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
    avatar: url
  })
try {
    let stiker = await sticker(null, apiUrl, global.packname, global.author)
    await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  } catch (e) {
    m.reply('عملیات موفقیت آمیز نبود...')
    await conn.sendFile(m.chat, apiUrl, 'image.png', null, m)
  }
}

handler.help = ['stickermaker (reply media)']
handler.tags = ['sticker']
handler.command = /^(stickermaker)$/i
handler.limit = true
handler.group = false
handler.register = true
module.exports = handler
