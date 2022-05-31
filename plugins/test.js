let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  let res = await fetch(global.API('https://some-random-api.ml', '/tiAmqL-C'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.image) throw 'Err!'
  conn.sendFile(m.chat, json.image, 'cat.png', json.caption, m)
}

handler.help = ['cat']
handler.tags = ['internet']

handler.command = /^(cat)$/i

handler.group = false

module.exports = handler
