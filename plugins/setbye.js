let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    global.db.data.chats[m.chat].sBye = text
    m.reply('پیام خداحافظی با موفقیت تنظیم شد ✅')
  } else throw 'پیام خداحافظی وارد نشده!'
}
handler.help = ['setbye <text>']
handler.tags = ['owner', 'group']

handler.command = /^setbye$/i
module.exports = handler

