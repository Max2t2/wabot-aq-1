let handler = async (m, { conn, usedPrefix }) => {
  await conn.sendButton(m.chat, `“${pickRandom(global.bucin)}”`, '© surena', '.bio', `${usedPrefix}bucin`, m)
}
handler.help = ['bio']
handler.tags = ['fun']
handler.command = /^(bio)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
  "همیشه به این  باور داشته باش که یه چیز فوق‌العاده قراره اتفاق بیفته",
  "هر چقد کمتر نسبت به آدمای منفی باف واکنش نشون بدی زندگیت مثبت تر میشه",
  "وستارگان رام به دستور او(خدا) هستند",
  "آری به وسعت هفت اسمون میپرستمت",
  "تولدانسان؛ روشن شدن کبریتی است؛ ومرگش خاموشی آن؛ بنگردر این فاصله چه کردی؟ گرمابخشیدی..!!؟یاسوزاندی..؟!!",
  "عمیق‌ ترین معنایِ زندگیِ  مَنی♥️",
  "تو سختیام فقط سایم پشتم بود:)"
]
