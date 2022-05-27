let handler = async (m, { args, usedPrefix, command }) => {

if (!args[0]) throw 'Enter user name'
if (!args[1]) throw '*Which repo you want?*\n\nLike:\n.githubdl <username> <repo>'

let url = `https://github.com/${args[0]}/${args[1]}/archive/refs/heads/main.zip`
//ByRizkyAdi
m.reply(`compressing data to *zip* file`)
conn.sendFile( m.chat, url, 'repo.zip', null, m)

}
handler.help = ['githubdl']
handler.tags = ['download']
handler.command = /githubdl/i

handler.limit = true

module.exports = handler
