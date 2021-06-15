export default (ctx) => {
  ctx.deleteMessage().catch((err) => {
    console.log("Hata: Giren/Çıkan kullanıcı handler'ında hata oluştu.");
    console.error(err);
  });
};
