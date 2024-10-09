
let handler = async (m, { conn }) => {
  try {
    let text = m.text.toLowerCase();
    
    
    switch (text) {
        case 'bueno master':
            await conn.sendFile(m.chat, 'https://qu.ax/xynz.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;
        
        default:
            // code
    }
    
    
  } catch (err) {
    console.error(err);
    m.reply('Ocurrió un error al enviar el audio.');
  }
};




handler.customPrefix = /^(Bueno master)/i;
handler.command = new RegExp;

export default handler;

