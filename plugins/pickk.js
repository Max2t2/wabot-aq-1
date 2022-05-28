let handler = async (m, { text, args, participants }) => {
    if (args[0] < 0, args.length < 2) throw 'Use this command for draw!\n\nFor example: .pickup 5 باهوش'
    let users = participants.map(u => u.jid)
    m.reply(`*ما اینجا ${text.replace(args, '').trimStart()} داریم!*
    
${new Array(Math.min(users.length, args[0])).fill().map(() => {
    let index = Math.floor(Math.random() * users.length)
    return `@${users.splice(index, 1)}`
}).join`\n`.replace(/@s.whatsapp.net/g,'')}`)
}
handler.help = ['pick <jumlah> <teks>']
handler.command = /^pick/i

module.exports = handler
