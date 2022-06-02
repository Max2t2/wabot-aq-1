const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'برروی یک فایل برای آپلود ریپلای بزنید!'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`Link: ${link}
________________

Size: ${media.length} Byte(s)
Expire: ${isTele ? 'No Expiry Date' : 'Unknown'}`)
}
handler.help = ['upload (caption|reply media)']
handler.tags = ['tools']
handler.command = /^upload$/i

module.exports = handler
