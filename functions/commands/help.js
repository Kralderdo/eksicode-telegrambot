const replyConfig = require("./replyConfig");

function helpCommand(ctx) {
    ctx.replyWithMarkdown(
        `• **Bot Komutları**

- \`/help\` - Komutları listeler.
        
- \`/yardim\` - Komutları listeler.
        
- \`/kaynak\` - Kullanım: /kaynak <URL>. Kaynak linklerini veritabanımıza yükler.
        
- \`/kanal\` - Kullanım: /kanal <Sorgu | tümü>. Kanalları listeler.
        
-   \`/discord\` -  Discord sunucumuz.

• **Hata mesajı**

Siz de [bu repoyu forklayıp](https://github.com/Eksicode/eksicode-telegrambot) \`hataMesaji.txt\` dosyası içerisine hata mesajı için ünlem ekleyebilirsiniz.`,
        replyConfig(ctx.message.message_id)
    );
}

module.exports = helpCommand;