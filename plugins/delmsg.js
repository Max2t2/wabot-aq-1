let handler = async (m, { command, usedPrefix, text }) => {
    let which = command.replace(/get/i, '')
    if (!text) return conn.sendButton(m.chat, `چه پیامی حذف شود؟\n\n*برای مثال :\n*${usedPrefix + command} test`, '© surena', 'Messages List', `${usedPrefix}list${which}`, m)
    let msgs = global.db.data.msgs
    if (!text in msgs) return conn.sendButton(m.chat, `پیامی با نام ${text} وجود ندارد!`, '© surena', 'Messages List', `${usedPrefix}list${which}`, m)
    delete msgs[text]
    m.reply(`پیام شما با نام '*${text}* با موفقیت حذف شد ✅`)
}
handler.help = ['vn', 'msg', 'video', 'gif', 'audio', 'img', 'sticker'].map(v => 'del' + v + ' <teks>')
handler.tags = ['database']
handler.command = /^(-|del)(vn|msg|video|audio|img|stic?ker|gif)$/

module.exports = handler
