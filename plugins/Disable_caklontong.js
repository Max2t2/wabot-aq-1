let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let src
let handler = async (m, { conn, usedPrefix }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    let id = m.chat
    if (id in conn.caklontong) {
        conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.caklontong[id][0])
        throw false
    }
    if (!src) src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Type ${usedPrefix}scalpers for help
Bonus: ${poin} XP
`.trim()
    conn.caklontong[id] = [
        await conn.sendButton(m.chat, caption, author, 'Bantuan', '.calo', m),
        json, poin,
        setTimeout(async () => {
            if (conn.caklontong[id]) conn.sendButton(m.chat, `Time out!\nThe answer is *${json.jawaban}*\n${json.deskripsi}`, author, 'Cak Lontong', '.caklontong', conn.caklontong[id][0])
            delete conn.caklontong[id]
        }, timeout)
    ]
}
handler.help = ['caklontong']
handler.tags = ['disable']
handler.command = /^caklontong/i
handler.owner = true

module.exports = handler
