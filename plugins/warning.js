let handler = async (m, { conn, groupMetadata }) => {
    let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    if (!mention) throw `Tag/mention the person!`
    let warn = global.db.data.users[mention].warn
    if (warn < 2) {
        global.db.data.users[mention].warn += 1
        m.reply(`⚠️ *WARNING +1*`)
        m.reply('You got a warn from admin! now your total warns are *' + (warn + 1) + '* warn, If you get warn *3 times*, you will get kicked from group!', mention)
    } else if (warn == 2) {
        global.db.data.users[mention].warn = 0
        m.reply('Bye Bye')
        await time(5000)
        await conn.groupRemove(m.chat, [mention])
        m.reply(`You were kicked out of the group ${groupMetadata.subject} because you have received 3 warns`, mention)
    }
}
handler.help = ['warn [@user]']
handler.tags = ['group']
handler.command = /^warn$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler

const time = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}
