const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `*لطفا به صورت زیر وارد کنید:*\n\n*${usedPrefix}amir.16*\n\nشامل اسم و سن 👇\n\n*<name>.<age>*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'نام وارد نشده (حروف)'
  if (!age) throw 'سن وارد نشده (عدد)'
  age = parseInt(age)
  if (age > 99) throw '_فکر کنم چند سال دیگه بذاری روش فسیل زنده بشی_'
  if (age < 8) throw 'حداقل باید 8 سالت باشه ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
*اکانت شما با موفقیت ساخته شد ✅*

╭─「 Info 」
│ *Name:* ${name}
│ *Age:* ${age} Years old
│ *SN:* ${sn}
╰────
در صورت گم کردن کد SN از *.sn* استفاده کنید!
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

