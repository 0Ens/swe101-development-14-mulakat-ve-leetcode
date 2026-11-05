# Mülakat Hazırlığı: STAR Bankası

## 1. Teknik bir problemi çözdüğüm hikaye

### Situation
staj odevim valid palindrome diye bir leetcode problemi cozmekdi ve burada kullanicinin girdigi deger fonksiyonun icine girerek yazilan degerin palindrom olup olmamasini kontrol ediyor ona gore de cikti veriyor, sadece harfler ve sayilar kontrolde gecerli olmaliydi.Bu asamada bazi ozel karakterler kelimenin icinde kontrole girebiliyordu

### Task
benim gorevim kontrole kadar giden yolda sadece harf ve sayi goturup ozel sembolleri engellemekdi cunku leetcode bu sartlarin saglanmasini istiyordu

### Action
Ilk bas uzun bir yasaklilar listesi yaptim burada kontrole girmeyecek karakterler vardi ise yaramadi cunku replace() in icinde +-= vardi bu da + ile = arasindaki durumlarin hepsini yasakliyor burada yasaklanmasini istemedigimiz karakterlerde var ise yaramadigini claude ile kontrolumde 0P denemesinin yanlis sonucu aldigini fark ettik sonra daha temiz ve calisan bir kod icin neyin yasaklanilacagina degil neyin kullanilabilicegine karar verdim.

### Result
artik sadece alfabe ve sayilar kontrole giriyor. Leetcode sonucu Accepted geldi, eskiden regex 100lerce karakterdi artik sadece 9, yazilan butun testler yesil geldi. Bir dahaki sefere önce hangi kümenin daha küçük ve belli olduğuna bakarım

## 2. Geri bildirimle değişen bir kararım

### Situation
staj odevim contain duplicate diye bir leetcode problemi cozmekdi. burada kullanici bir liste giriyor listede kendini tekrar eden eleman var mi diye bakiyor,tekrar eden eleman varsa true yoksa false veriyor.ben bu programi kodladigimda leetcode bana time limit exceeded dedi

### Task
benim gorevim daha az zaman karmasikligi olabilmesi icin programin hizlandirmak gereksiz ve uzun donguler yerine alternatif ve kullanisli seyler koymak cunku leetcode ilk yazdigim kodu girdiler buyudukce yavas buldu daha hizli calisan bir halini istiyordu

### Action
ilk bas ic ice dongu kurup icindeki elemanlari kontrol ettim iceride var mi diye bu calisiyordu fakat beklenilenden yavasti sonra claudea review ettirip ona sordum set mantigi kullandim gelen her sayi set e ekleniyordu sonra gelen elemana da bu sette var mi diye soruluyordu eger varsa true donuyordu yoksa false donuyordu

### Result
artik program daha hizli calisiyor,zaman karmasikligi O(n^2) idi artik O(n) bellek karmasikligi eskiden O(1) di artik O(n), leetcode sonucu eskiden time limit exceeded di fakat suan accepted, karmasik uzun dongulerin yerini set aldi daha kullanisli bir yapi sunuldu, yazilan butun testler yesil geldi.Bir daha gordugum degeri tekrar eden bir problemle karsilasirsam set kullanacagim  
## 3. Planladığımdan uzun süren bir işi yönetmem

### Situation
staj odevim Best time to buy and sell stock isimli bir leetcode problemi cozmekdi. burada bir liste veriliyor her indeks bir gunmuscesine degerlere sahip ve o degerlerde o gunun degerini gosteriyor amac hangi zaman alip hangi zaman satarsak en cok kar edecegimiz durum olusur, bu proje icin bana 30 dakika verilmisti fakat ben bu kadar kisa sure icerisinde yapamadim toplamda 1 saat surdu

### Task
benim gorevim zaman asimi olmasina ragmen calisan bir kod vermekdi cunku o zamana kadar hala hatasiz calisan bir kod yazamamistim, bazi yerler hata veriyordu

### Action
kodu yazarken farkli yontemler denedim fakat surekli bir hata aliyordum bunu duzeltmeye calisirken zaman asimi oldu,bundan sonra claude a kodumu attirip review ettirdim o da bana gunleri tutmanin gereksiz oldugunu ve degeri en cok olani elimizde tutmak yerine en cok kar ettigimiz degeri elimizde tutmayi onderdi. buna gore tekrardan silip dediklerini dikkate alarak kodladim

### Result
bundan sonra calismadan once bir gidisat yolu planlayacagim en mantikli yolu dusunecegim bu bana zamandan kazandiracak,leetcode sonucu Accepted geldi,bellekde eskiden 6 deger tutulurken suan sadece 2 deger tutuluyor kod sadelesti,programda kosul satirlari sadelestirildi daha temiz duruyor