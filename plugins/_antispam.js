module.exports = {
    async all(m) {
        if (!m.message) return
        this.spam = this.spam ? this.spam : {}
        if (m.sender in this.spam) {
            this.spam[m.sender].count++
            if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 9) {
                if (this.spam[m.sender].count > 9) {
                    //global.db.data.users[m.sender].banned = true
                    m.reply('*در این گروه مجاز به اسپم نیستید!!*')
                    this.groupRemove(m.chat, [m.sender])
                }
                this.spam[m.sender].count = 0
                this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
            }
        }
        else this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
    }
}
