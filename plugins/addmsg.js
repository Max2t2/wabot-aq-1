let { WAMessageProto } = require('@adiwajshing/baileys')

let handler = async (m, { conn, command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/\+|add/i, '')
    if (!m.quoted) throw '*برروی پیام مورد نظر ریپلای بزنید*'
    if (!text) return conn.sendButton(m.chat, `میخواهید پیام با چه نامی ذخیره شود؟\n\nبه عنوان مثال: *${command + usedPrefix}*`, '© surena', 'لیست پیام ها', `${usedPrefix}list${which}`, m)
    let msgs = db.data.msgs
    if (text in msgs) return conn.sendButton(m.chat, `پیامی با نام ~${text}~ قبلا ذخیره شده، لطفا نام دیگری انتخاب کنید!`, '© surena', 'لیست پیام ها', `${usedPrefix}list${which}`, m)
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    if (db.data.chats[m.chat].getmsg) return m.reply(`پیام شما با موفقیت با نام *${text}* ذخیره شد ✅
    
برای دسترسی از *${text}* استفاده کنید`)
    else return conn.sendButton(m.chat, `پیام شما با موفقیت با نام *${text}* ذخیره شد ✅

از کد get${which}${usedPrefix} ${text} برای مشاهده استفاده کنید

اگر قابلیت Getmsg فعال باشد دیگر نیازی به استفاده از *get${which}${usedPrefix}* ندارید!`, '© surena', 'فعالسازی', '.1 getmsg', m)
}
handler.help = ['vn', 'msg', 'video', 'gif', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <teks>')
handler.tags = ['database']
handler.command = /^(\+|add)(vn|msg|video|audio|img|stic?ker|gif)$/

module.exports = handler
