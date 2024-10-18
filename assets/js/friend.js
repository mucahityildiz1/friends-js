// Kullanıcıdan kaç adet isim gireceğini soralım
// Girdiği her bir ismi "isimler" dizisine kaydedelim.
// Kaydettikten sonra bir listeleyelim.
// Daha sonra tüm girilen isimleri alfabetik olarak sıralayalım. (ipucu: sort() 'u araştırabilirsiniz)


let isimler = [];

let isimSayisi = prompt("Kac tane isim eklemek istiyorsunuz? ");

for(let i =0; i < isimSayisi; i++) {
  let isim = prompt("Bir isim girin:");
  isimler.push(isim);
}

console.log("Girilen isimler: ");

for(let isim of isimler) {
  console.log(isim);
}

isimler.sort();

console.log("Alfabetik sirayla isimler: ");
for (let isim of isimler) {
  console.log(isim);
}