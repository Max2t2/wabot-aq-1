let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) return conn.sendButton(m.chat, `No absences take place!`, '© surena', 'Begin', `${usedPrefix}+absen`, m)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    let caption = `
Date: ${date}

${conn.absen[id][2] ? conn.absen[id][2] + '\n' : ''}
╭─「 Absen List 」
│ Total: ${absen.length}
${list}
╰────`.trim()
    conn.send2Button(m.chat, caption, '© surena', 'Absen', `${usedPrefix}absen`, 'Wipe', `${usedPrefix}-absen`, m)
}
handler.help = ['cekabsen']
handler.tags = ['disabled']
handler.command = /^cekabsen$/i

module.exports = handler
handler.owner = true 
//Disabled because unknown plugin
