
let handler = async (m, { conn }) => {
  let chat = global.db.data.chats[m.chat]
  try {
    let text = m.text.toLowerCase();
    
    if (chat.audios){
    switch (text) {
        
        case 'bueno master':
        case 'a bueno master': 
        case 'bueno máster': 
            await conn.sendFile(m.chat, 'https://qu.ax/xynz.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
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




handler.customPrefix = /^(Bueno master)/i;
handler.command = new RegExp;

export default handler;

