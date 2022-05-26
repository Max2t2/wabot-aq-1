let { WAMessageProto } = require('@adiwajshing/baileys')

let handler = async (m, { conn, command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/\+|add/i, '')
    if (!m.quoted) throw 'Reply to any message!'
    if (!text) return conn.sendButton(m.chat, `Witch text you want to save?\n\nFor example:\n${usedPrefix + command} test`, '© surena', 'Messages List', `${usedPrefix}list${which}`, m)
    let msgs = db.data.msgs
    if (text in msgs) return conn.sendButton(m.chat, `'${text}' has registered before, use another name!`, '© surena', 'Messages List', `${usedPrefix}list${which}`, m)
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    if (db.data.chats[m.chat].getmsg) return m.reply(`Your message was saved successfully by name '${text}'
    
Access by typing '${text}'`)
    else return conn.sendButton(m.chat, `Your message was saved successfully by name '${text}'

Access with ${usedPrefix}get${which} ${text}

If Getmsg == enable then there is no need to type *${usedPrefix}get${which}* anymore!`, '© surena', 'Enable', '.1 getmsg', m)
}
handler.help = ['vn', 'msg', 'video', 'gif', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <teks>')
handler.tags = ['database']
handler.command = /^(\+|add)(vn|msg|video|audio|img|stic?ker|gif)$/

module.exports = handler
