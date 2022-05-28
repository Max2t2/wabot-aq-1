let handler = m => m

handler.all = async function (m, { isBotAdmin }) {
    if (m.messageStubType === 68) {
        let log = {
            key: m.key,
            content: m.msg,
            sender: m.sender
        }
        m.reply(`
V




























































X
`.trim())
        await this.modifyChat(m.chat, 'clear', {
            includeStarred: false
        }).catch(console.log)
    }
}

module.exports = handler
