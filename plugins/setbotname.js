// NurNurz
let handler = async (m, { conn, text }) => {
  if (!text) throw `نام جدید ربات را وارد کنید`
  try {
    await conn.updateProfileName(text)
    conn.reply(m.chat, '*نام ربات با موفقیت تغییر کرد ✅*', m)
  } catch (e) {
    console.log(e)
    throw `Error`
  }
}
handler.help = ['setbotname']
handler.tags = ['owner']
handler.command = /^(setbotname)$/i
handler.owner = true

module.exports = handler
