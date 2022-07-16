# pm2-bos-altyapi merhabalar arkadaşlar v13 pm2 boş altyapıdır içinde handler da bulunan slash commandlı bir moderation (boş) botu vardır.


Botları nereye/nasıl eklerim ?

Bunun için ilk olarak botunuzu `MAIN>apps>` klasörünün içine atıp ardından `ecosystem.config.js` adlı dosyaya örnek configdeki gibi ekleyebilirsiniz.  

Botları nasıl çalışırıcam

Altyapının package.json'un bulunduğu kısımda bir cmd açıp ardından `npm i` ile package'deki modülleri kuruyoruz ardından eğer MODULE_NOT_FOUND hatası verirse `npm i <modül>` şeklinde kuruyoruz tüm modüller kurulduktan sonra `npm start` yazarak botların hepsini çalıştırabilirsiniz eğer sqlite & json gibi dblerden kullanıyorsanız ortak olarak tek dosya üzerinden çekecektir botlar


İyi Kullanımlar iyi kodlamalar.
