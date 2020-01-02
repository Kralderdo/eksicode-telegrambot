# eksiCode Telegram Botu

## Nedir

Bu script, http://eksicode.org telegram grupları üzerindeki kayıtlı üye sayılarını ölçmek
ve chat geliştirmeleri için yazılmaktadır.

### Nasıl Çalıştırılır

-   UYARI: Docker çalışırken git branch'ını değiştirmeyin. 

-   Paketleri yükleyin: `npm i`

-   sample.env dosyasındaki örnek ayarlara göre bir .env dosyası oluşturun.

-   Docker'ı çalıştırın: `docker-compose up --build`

## Bot Komutları

### Genel

-   `/help` - Komutları listeler.

-   `/yardim` - Komutları listeler.

-   `/kaynak <URL>`: Kaynak URL'sini Ekşicode veritabanına ekler.

-   `/kanal <Sorgu | tümü>` - kanalları listeler.

-   `/discord` -  Discord sunucumuz.

### Yönetim Komutları

#### `/pin <mesaj>`
Verilen `mesaj` argümanını tüm EksiCode kanallarında gönderir ve sabitler.

#### `/ban <sebep>` / `/unban`
Bir kullanıcıyı banlamak için herhangi bir gruptayken kullanıcının mesajını `/ban` komutuyla cevaplamanız gerekmektedir. Ban komutuyla birlikte sebebini de yazabilirsiniz. Eğer bir kullanıcının banını kaldırmak istiyorsanız Admin kanalına gönderilen bildirim mesajını `/unban` komutu ile cevaplayın.

## Hata Mesajları

Siz de bu repoyu forklayıp `hataMesaji.txt` dosyası içerisine hata mesajı için ünlem ekleyebilirsiniz.

## .pinignore dosyası

`/pin` komutunun çalışmamasını istediğiniz kanalın ID'lerini .pinignore dosyasına ekleyerek istisnalar oluşturabilirsiniz.
