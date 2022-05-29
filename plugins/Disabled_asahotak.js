let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (id in conn.asahotak) {
        conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.asahotak[id][0])
        throw false
    }
    let res = await fetch(global.API('xteam', '/game/asahotak', {}, 'APIKEY'))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
${json.result.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}ao untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.asahotak[id] = [
        await conn.sendButton(m.chat, caption, author, 'Help', '.ao', m),
        json, poin,
        setTimeout(async () => {
            if (conn.asahotak[id]) await conn.sendButton(m.chat, `Time is up!\nThe answer is *${json.result.jawaban}*`, author, 'Brain Teaser', '.asahotak', conn.asahotak[id][0])
            delete conn.asahotak[id]
        }, timeout)
    ]
}
handler.help = ['asahotak']
handler.tags = ['disabled']
handler.command = /^asahotak/i
handler.owner = true

module.exports = handler
