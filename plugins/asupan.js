let handler = async(m, { conn }) => {
  await conn.sendFile(m.chat, pickRandom(asupan), 'asupan.mp4', '', m)
}
handler.help = ['asupan']
handler.tags = ['tools']
handler.command = /^asupan$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.register = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const asupan = [
"https://e.top4top.io/m_19667hx161.mp4",
"https://d.top4top.io/m_1966xvyhj1.mp4",
"https://c.top4top.io/m_19666vlaq1.mp4",
"https://b.top4top.io/m_1966svejo1.mp4",
"https://a.top4top.io/m_1966ohu0h1.mp4",
"https://l.top4top.io/m_1966rt1qs1.mp4",
"https://k.top4top.io/m_1966fjpnj1.mp4",
"https://j.top4top.io/m_19677oxbd1.mp4",
"https://i.top4top.io/m_19672o6ll1.mp4",
"https://h.top4top.io/m_19676f2ju1.mp4",
"https://f.top4top.io/m_19699qk6w1.mp4",
"https://g.top4top.io/m_1967uvzs61.mp4"
]
