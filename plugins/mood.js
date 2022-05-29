let handler = async(m, { conn }) => {
  await conn.sendFile(m.chat, pickRandom(asupan), 'mood_surena.mp4', '', m)
}
handler.help = ['mood']
handler.tags = ['Media']
handler.command = /^mood$/i
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
"https://g.top4top.io/m_2340v7lgt1.mp4",
"https://h.top4top.io/m_2340a2tgf2.mp4",
"https://i.top4top.io/m_234017nut4.mp4",
"https://j.top4top.io/m_2340cg85d5.mp4",
"https://k.top4top.io/m_2340t8jo76.mp4",
"https://l.top4top.io/m_2340hx8p47.mp4",
"https://a.top4top.io/m_2340l3fnj8.mp4",
"https://b.top4top.io/m_234069v1o9.mp4",
"https://c.top4top.io/m_2340ba50p10.mp4",
"https://l.top4top.io/m_2340q4e2p1.mp4",
"https://a.top4top.io/m_2340ro6h22.mp4",
"https://b.top4top.io/m_2340sybrf3.mp4"
]
