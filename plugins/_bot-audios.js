
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

        case 'en caso de una investigación':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/Syg.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'FBI':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/wFbD.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'no estes tite':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/VrjA.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'eres fuerte':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/lhzq.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'zzzz':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/KkSZ.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'las reglas del grupo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/fwek.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'me anda buscando anonymous':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/MWJz.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'momento xds':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/PitP.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'motivacion':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/MXnK.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'muchachos escucharon':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/dRVb.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'nico nico':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/OUyB.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'no rompas mas':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/ZkAp.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'potasio':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/vPoj.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'que tal grupo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/lirF.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'se estan riendo de mi':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/XBXo.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'su nivel de pendejo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/SUHo.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'tal vez':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/QMjH.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'te gusta el pepino':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/ddrn.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'todo bien':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/EDUC.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'traiganle una falda':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/fnTL.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'y este quien es':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/QnET.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'goku pervertido':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/CUmZ.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'tengo los calzones':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/pzRp.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'a nadie le importa':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/JocM.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'mierda de bot':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/UEZQ.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'baneado':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/SJJt.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'basado':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/jDAl.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'bien pensado woody':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/nvxb.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'bañate':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/JsYa.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'buenas noches':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/TTfs.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'bueno si':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/DqBM.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break; 

        case 'buenos dias':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/wLUF.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'me olvide':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/SbX.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'diagnosticado con gay':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/cUl.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'el pepe':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/Efdb.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'trap':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/Vved.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'enojado':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/jqTX.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'entrada':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/UpAC.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'esto va ser epico papus':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/pjTx.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'esto va para ti':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/Tabl.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'feliz cumpleaños':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/UtmZ.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'fiesta del admin 2':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/MpnG.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'fiesta del admin':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/jDVi.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'fiesta del admin 3':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/fRz.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'fino señores':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/hapR.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'me voy':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/iOky.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'tunometecabrasaramambiche':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/LAAB.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'gemidos':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/bwPL.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'audio hentai':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/GSUY.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'homero chino':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/ebe.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'hora de sexo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/Mlfu.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'jesucristo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/AWdx.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'laoracion':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/GeeA.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'marica tu':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/XULE.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'ma ma masivo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/mNX.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'oh me vengo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/waHR.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'me pica los cocos':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/UrNl.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'mmmm':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/gxFs.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
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




handler.customPrefix = /^(Bueno master|buenas noches|bueno si|buenos dias|me olvide|diagnosticado con gay|el pepe|trap|enojado|entrada|esto va ser epico papus|esto va para ti|feliz cumpleaños|fiesta de admin|fiesta de admin 2|fiesta de admin 3|fino señores|me voy|tunometecabrasaramambiche|gemidos|audio hentai|homero chino|hora de sexo|jesucristo|laoracion|marica tu|ma ma masivo|oh me vengo|me pica los cocos|mmmm|y este quien es|goku pervertido|tengo los calzones|a nadie le importa|mierda de bot|baneado|basado|bien pensado woody|bañate|tal vez|te gusta el pepino|todo bien|traiganle una falda|su nivel de pendejo|se estan riendo de mi|que tal grupo|potasio|nico nico|no rompas mas|muchachos escucharon|momento xds|motivacion|me anda buscando anonymous|eres fuerte|zzzz|las reglas del grupo|no estes tite|FBI|en caso de una investigación|elmo sabe donde vives|corte corte|el toxico|cambiate a movistar|hermoso negro|ara ara|bienvenido wey|in your area|buen dia grupo|calla fan de bts|)/i;
handler.command = new RegExp;

export default handler;

