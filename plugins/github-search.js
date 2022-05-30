let fetch = require('node-fetch')
let handler = async (m, { text }) => {
    if (!text) throw 'What are you searching for?'
    let res = await fetch(global.API('https://api.github.com', '/search/repositories', {
        q: text
    }))
    let json = await res.json()
    if (res.status !== 200) throw json
    let str = json.items.map((repo, index) => {
        return `
${1 + index}. *${repo.full_name}*${repo.fork ? ' (fork)' : ''}
${repo.html_url}
Made on *${formatDate(repo.created_at)}*
Last update on *${formatDate(repo.updated_at)}*

👁  ${repo.watchers}   🔗  ${repo.forks}   ⭐  ${repo.stargazers_count}

{repo.open_issues} Issues ${repo.description ? `
*Description:*\n${repo.description}` : ''}
*Clone:\n* \`\`\`$ git clone ${repo.clone_url}\`\`\`
_________________________

`.trim()
    }).join('\n\n')
    m.reply(str)
}
handler.help = ['githubsearch'].map(v => v + ' <query>')
handler.tags = ['tools']

handler.command = /^g(ithub|h)search$/i

module.exports = handler

function formatDate(n, locale = 'id') {
    let d = new Date(n)
    return d.toLocaleDateString(locale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
  }
