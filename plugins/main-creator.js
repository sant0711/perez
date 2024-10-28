let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Perez 👑;\nFN:Perez 👑\nORG:Perez 👑\nTITLE:\nitem1.TEL;waid=5219612683719:5219612683719\nitem1.X-ABLabel:Perez 👑\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:Perez 👑\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'おPerez ⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
