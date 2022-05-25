let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) return conn.sendButton(m.chat, `No absences take place!`, '© surena', 'Begin', `${usedPrefix}+absen`, m)
    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw 'Youre gone!'
    absen.push(m.sender)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `│ ${i + 1}.  @${v.split`@`[0]}`).join('\n')
    let caption = `
date: ${date}

${conn.absen[id][2] ? conn.absen[id][2] + '\n' : ''}
╭─「 Absen List 」
│ Total: ${absen.length}
${list}
╰────`.trim()
    await conn.send2Button(m.chat, caption, '© surena', 'Absen', `${usedPrefix}absen`, 'Check', `${usedPrefix}cekabsen`, m)
}
handler.help = ['absen']
handler.tags = ['absen']
handler.command = /^(absen|hadir|present)$/i

module.exports = handler
