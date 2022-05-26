let handler = async (m, { conn, text }) => {
	conn.game = conn.game ? conn.game : {}
	try {
		if (conn.game) {
			delete conn.game
			conn.reply(m.chat, `Successfully deleted session ttt`, m)
		} else if (conn.game) {
			m.reply(`Session ttt🎮 does not exist`)
		} else throw '?'
	} catch (e) {
		m.reply('broken')
	}
}
//BY RIZXYU
handler.help = ['delsesittt']
handler.tags = ['game']
handler.command = /^(delsesittt|dellsesitt)$/i
handler.limit = true

handler.register = true
handler.fail = null

module.exports = handler
