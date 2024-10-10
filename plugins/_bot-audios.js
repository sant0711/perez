
let handler = async (m, { conn }) => {
  let chat = global.db.data.chats[m.chat]
  try {
    let text = m.text.toLowerCase();
    
    if (chat.audios){
    switch (text) {
        
        case 'bueno master':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/xynz.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'hermoso negro':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/ExSQ.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break; 

        case 'ara ara':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/PPgt.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break; 

        case 'bienvenido wey':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/cUYg.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break; 

        case 'buen dia grupo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/GoKq.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'calla fan de bts':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/oqNf.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'cambiate a movistar':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/RxJC.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'corte corte':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/hRuU.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'el toxico':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/WzBd.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'elmo sabe donde vives':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/YsLt.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;
        
        default:
            
    }
    } else {
      m.reply('_Debes activar los audios._');
    }
    
  } catch (err) {
    console.error(err);
    m.reply('Ocurrió un error al enviar el audio.');
  }
};




handler.customPrefix = /^(Bueno master|elmo sabe donde vives|corte corte|el toxico|cambiate a movistar|hermoso negro|ara ara|bienvenido wey|in your area|buen dia grupo|calla fan de bts|)/i;
handler.command = new RegExp;

export default handler;

