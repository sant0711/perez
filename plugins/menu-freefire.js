import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `
> 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀 ⚔. 
> 𝘏𝘰𝘭𝘢 @${m.sender.split("@")[0]}
> 𝘧𝘦𝘤𝘩𝘢 : ${week}, ${date} 
 
★ 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀 ★
⭐ ➺ 🎫.donarsala
⭐ ➺ 🗼.𝘉𝘦𝘳𝘮𝘶𝘥𝘢
⭐ ➺ 🏝️.𝘗𝘶𝘳𝘨𝘢𝘵𝘰𝘳𝘪𝘰
⭐ ➺ 🏜️.𝘒𝘢𝘭𝘢𝘩𝘢𝘳𝘪
⭐ ➺ 🏗️.𝘕𝘦𝘹𝘵𝘦𝘳𝘳𝘢
⭐ ➺ 🏞️.𝘈𝘭𝘱𝘦𝘴

★ 𝙍𝙀𝙂𝙇𝘼𝙎 𝙂𝙀𝙉𝙀𝙍𝘼𝙇𝙀𝙎 ★
⭐ ➺ 🎮.𝘳𝘦𝘨𝘭𝘢𝘴𝘤𝘭𝘬
⭐ ➺ 🎮.𝘳𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴
⭐ ➺ 🎮.𝘳𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴2

▸▸ 𝙇𝙄𝙎𝙏𝘼 𝙑𝙀𝙍𝙎𝙐𝙎 ⚔ ◂◂

𝘚𝘐𝘎𝘕𝘐𝘍𝘐𝘊𝘈𝘋𝘖𝘚: 𝘏𝘏:𝘔𝘔 (𝘏𝘖𝘙𝘈:𝘔𝘐𝘕𝘜𝘛𝘖𝘚) 
𝘊𝘗 (𝘊𝘖𝘋𝘐𝘎𝘖 𝘋𝘌 𝘗𝘈𝘐𝘚) 𝘗𝘈𝘙𝘈 𝘓𝘈 𝘏𝘖𝘙𝘈 (𝘔𝘟, 𝘊𝘖, 𝘊𝘓 𝘠 𝘈𝘙) 
𝘊𝘙 (𝘊𝘖𝘓𝘖𝘙 𝘋𝘌 𝘙𝘖𝘗𝘈)
𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .4𝘷𝘴4 22:30 𝘔𝘟
𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .8𝘷𝘴8 22:50 𝘕𝘌𝘎𝘙𝘖

⚔ ➺.4𝘷𝘴4 𝘏𝘏:𝘔𝘔 𝘊𝘗
⚔ ➺.6𝘷𝘴6 𝘏𝘏:𝘔𝘔 𝘊𝘗
⚔ ➺.8𝘷𝘴8 𝘏𝘏:𝘔𝘔 𝘊𝘙 
⚔ ➺.𝘴𝘤𝘳𝘪𝘮 𝘏𝘏:𝘔𝘔 𝘊𝘗
⚔ ➺.𝘪𝘯𝘵𝘦𝘳𝘯𝘢4 𝘏𝘏:𝘔𝘔 𝘊𝘗
⚔ ➺.12𝘷𝘴12 𝘏𝘏:𝘔𝘔 𝘊𝘙
⚔ ➺.16𝘷𝘴16 𝘏𝘏:𝘔𝘔 𝘊𝘙
⚔ ➺.20𝘷𝘴20 𝘏𝘏:𝘔𝘔 𝘊𝘙
⚔ ➺.24𝘷𝘴24 𝘏𝘏:𝘔𝘔 𝘊𝘙
⚔ ➺.𝘊𝘶𝘢𝘥𝘳𝘪𝘭𝘢𝘵𝘦𝘳𝘰 𝘏𝘏:𝘔𝘔 𝘊𝘙
 `.trim()
    
const vi = ['https://qu.ax/yEPo.mp4',
'https://qu.ax/yEPo.mp4',
'https://qu.ax/yEPo.mp4']

try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: gataMenu.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: gataImg.getRandom(), gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 

} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menuff|menufreefire|menu2)$/i
handler.register = true
handler.group = true
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
              
