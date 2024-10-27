
let ogrenciler = ["Yiğit", "Çınar","Ada"];

let sonuc;

sonuc = ogrenciler.length;
sonuc = ogrenciler.toString(); // tüm veriyi string e cevirdik
sonuc = ogrenciler.join(' ');  // arasındaki , işaretini kaldırıyor boşluk bırakıyor


// eleman silme

// sonuc = ogrenciler.pop();
// sonuc = ogrenciler.shift();




// Eleman Ekleme

// sonuc = ogrenciler.push("Cuneyt"); // ekleme yapmak için 
// sonuc = ogrenciler.unshift("Destan"); // en başa veri ekleme için


// Eleman Arama

// sonuc = ogrenciler.indexOf("Ada"); // Eleman aramak için kullanılır
// sonuc = ogrenciler.lastIndexOf("Ada"); // son sıradaki ismi getirir.
// sonuc = ogrenciler.includes("Ada"); // Listede var mı yok mu.


// silme Ekleme

sonuc = ogrenciler.splice(0,1,"Ali","Canan"); // hem silme hem ekleme için kullanılır.




console.log(sonuc);
console.log(ogrenciler);