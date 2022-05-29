async function handler(m, { command }) {
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'next':
        case 'leave': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) return this.sendButton(m.chat, '_You are not in anonymous chat_', '© surena', 'Find a Partner', `.start`, m)
            m.reply('Ok')
            let other = room.other(m.sender)
            if (other) await this.sendButton(other, '_Partner leaves chat_', '© surena', 'Find a Partner', `.start`, m)
            delete this.anonymous[room.id]
            if (command === 'leave') break
        }
        case 'start': {
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) return this.sendButton(m.chat, '_You are still in anonymous chat, waiting for a partner_', '© surena', 'Out', `.leave`)
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                await this.sendButton(room.a, '_Partner found!_', '© surena', 'Next', `.next`, m)
                room.b = m.sender
                room.state = 'CHATTING'
                await this.sendButton(room.a, '_Partner found!_', '© surena', 'Next', `.next`, m)
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                await this.sendButton(m.chat, '_Waiting for a partner..._', '© surena', 'Out', `.leave`, m)
            }
            break
        }
    }
}
handler.help = ['start', 'leave', 'next']
handler.tags = 'anonymous'
handler.command = ['start', 'leave', 'next']
handler.owner = true

handler.private = true

module.exports = handler
