const toxicRegex = /|.s|.menu|.menú|.play|.tiktok|.comandos/i

let handler = m => m
handler.before = async function (m, { conn, isAdmin, isBotAdmin, isOwner }) { 
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup)
return !1
  let user = global.db.data.users[m.sender]
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let img = 'https://qu.ax/SjxS.png'
 const isToxic = toxicRegex.exec(m.text)

if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
user.warn += 1
if (!(user.warn >= 4)) await m.reply(`${user.warn == 1 ? `*@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, 𝐓𝐢𝐞𝐧𝐞𝐬: (${isToxic}) 𝐀𝐝𝐯𝐞𝐫𝐭𝐞𝐧𝐜𝐢𝐚𝐬... 𝐓𝐢𝐞𝐧𝐞𝐬: *${user.warn}/4*\n\n𝐃𝐞 𝐀𝐝𝐯𝐞𝐫𝐭𝐞𝐧𝐜𝐢𝐚𝐬.`, false, { mentions: [m.sender] })}

if (user.warn >= 4) {
user.warn = 0
await m.reply(`'𝐒𝐞𝐫𝐚́𝐬 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐝𝐨  \n*@${m.sender.split`@`[0]}*`, false, { mentions: [m.sender] })
user.banned = true
await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
//await this.updateBlockStatus(m.sender, 'block')
}
return !1
}
export default handler
