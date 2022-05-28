// By RC047 :V

let handler = async(m, { conn, text }) => {
    if (!text) throw '*لطفا گزارش خود را وارد کنید*'
    if (text.length > 300) throw 'ببخشید، پیام طولانی شد لطفا در حداکثر 300 کلمه گزارش رو ارسال کنید'
    const laporan = `*「 REPORT 」*\nSender : wa.me/${m.sender.split`@`[0]}\nReport : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '989301860610@s.whatsapp.net').filter(v => v != conn.user.jid && v != '989301860610@s.whatsapp.net'))
    m.reply(laporan, 989301860610)
    m.reply(laporan, m.sender) // Mwehehehehe
    m.reply('✔️ گزارش برای تیم پشتیبانی ارسال شد و به زودی پاسخ آن برای شما ارسال خواهد شد')
}
handler.help = ['bug', 'report'].map(v => v + ' <laporan>')
handler.tags = ['info']
handler.command = /^(bug|report)$/i

module.exports = handler
