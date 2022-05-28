// NurNurz
let handler = async (m, { conn, text }) => {
  if (!text) throw `متن بیو جدید را وارد کنید`
  try {
    await conn.setStatus(text)
    conn.reply(m.chat, '*بیو ربات با موفقیت تغییر کرد ✅*', m)
  } catch (e) {
    console.log(e)
    throw `Error`
  }
}
handler.help = ['setbotbio']
handler.tags = ['owner']
handler.command = /^(setbotbio)$/i
handler.owner = true

module.exports = handler
