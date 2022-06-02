let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw '*لینک صحیح نیست*'
    let res = await conn.acceptInvite(code)
    m.reply(`ربات با موفقیت به گروه ${res.gid} پیوست!`)
}
handler.help = ['join <group link>']
handler.tags = ['premium']

handler.command = /^join$/i
handler.private = true

handler.premium = true

module.exports = handler
