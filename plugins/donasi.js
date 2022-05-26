let handler = async m => m.reply(`
╭─「 Support • Developer 」
│ • Developer : wa.me/989301860610
│ • Support : wa.me/989389383634
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
