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
"https://uupload.ir/view/yotub3kans_14010308_175457941_2c57.mp4/",
"https://uupload.ir/view/vampires_land_14010308_175648131_qm2l.mp4/",
"https://uupload.ir/view/levenero_14010308_181925200_qa6o.mp4/",
"https://uupload.ir/view/dreamy.clip_14010308_175845651_dl6g.mp4/",
"https://uupload.ir/view/gerberavid_14010308_182735436_fm3t.mp4/",
"https://uupload.ir/view/marblevid.ir_14010308_182538880_spgk.mp4/",
"https://uupload.ir/view/seavid_14010308_182352345_j3n.mp4/",
"https://uupload.ir/view/sunset._area_14010308_182132191_iryi.mp4/",
"https://uupload.ir/view/music_.land_girl_14010308_182958156_v5c0.mp4/",
"https://uupload.ir/view/bloovid_14010308_182815720_lt8a.mp4/",
"https://uupload.ir/view/violeteiw_14010308_183457517_etle.mp4/",
"https://uupload.ir/view/rainysowil_14010308_183338629_h04g.mp4/"
]
