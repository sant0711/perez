exports.run = {
    usage: ['getchid'],
    hidden: ['getid'],
    category: 'tool',
    use: 'reply msg channel',
    async: async (m, {
       sock,
       core,
       setting,
       waFunc
    }) => {
       try { 
         if (!m.quoted) return sock.reply(m.from, `📌 Menciona un mensaje que haya sido reenviado desde un canal para obtener el ID de dicho canal.`, m);
         let res = await store.loadMessage(m.from, m.quoted.id)
         if (!res) {
           return sock.reply(m.from, `☹️ No fue posible obtener el ID. Por favor, reenvía nuevamente el mensaje del canal y haz la prueba otra vez.`, m);
         }
         let type = Object.keys(res.message);
         var data;
         if (type[0] === 'viewOnceMessage') {
             data = res.message.viewOnceMessage?.message?.interactiveMessage?.contextInfo?.forwardedNewsletterMessageInfo
         } else {
             data = res.message[type[0]]?.contextInfo?.forwardedNewsletterMessageInfo
         }
         if (!data) {
           return sock.reply(m.from, `☹️ No fue posible obtener el ID. Por favor, reenvía nuevamente el mensaje del canal y haz la prueba otra vez.`, m);
         }
         sock.reply(m.from, data.newsletterJid, m);
       } catch (e) {
          console.log(e)
          sock.reply(m.from, waFunc.jsonFormat(e), m)
       }
    },
    group: true,
    error: false,
    cache: true,
    location: __filename
}
