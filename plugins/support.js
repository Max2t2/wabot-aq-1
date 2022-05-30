let handler = async m => m.reply(`
╭─「 Support • Developer 」
│ • Developer : wa.me/989301860610
│ • Support : wa.me/989389383634
╰────
`.trim())
handler.help = ['support']
handler.tags = ['info']
handler.command = /^support$/i

module.exports = handler
