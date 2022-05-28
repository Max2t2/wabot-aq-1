let handler = async (m, { conn, text }) => {
    if (!m.quoted) return conn.sendMessage(m.chat, '*پیام کجاست؟*', 'conversation')
    if (m.quoted.mtype !== 'viewOnceMessage') throw 'این یک پیام Viewonce نیست!'
    await conn.copyNForward(m.chat, await conn.loadMessage(m.chat, m.quoted.id), false, { readViewOnce: true }).catch(_ => m.reply('Maybe you\'ve opened a bot'))
}

handler.help = ['readviewonce']
handler.tags = ['tools']

handler.command = /^readviewonce/i

module.exports = handler
