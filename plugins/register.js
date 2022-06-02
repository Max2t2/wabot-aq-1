const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `*ظاهرا قبلا ثبت نام کردید!*\nبرای حذف اکانت از دستور unreg${usedPrefix} استفاده کنید`
  if (!Reg.test(text)) throw `*برای این کار لطفا ابتدا اسم، سپس یک نقطه و بعد از آن سن خود را وارد کنید. به عنوان مثال:*\n\n*${usedPrefix}register amir.16*\n\nشامل اسم و سن 👇\n\n*${usedPrefix}register <name>.<age>*`
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
در صورت گم کردن کد SN از *sn${usedPrefix}* استفاده کنید!
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

