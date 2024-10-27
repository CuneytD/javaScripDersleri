



let urunler = ["iphone 15", "iphone 16","iphone 17"];
let fiyatlar = [50000,60000,70000];
let renkler = ["gold","black","silver"];



let sonuc;

sonuc = `${urunler[0]} - ${fiyatlar[0]} - ${renkler[0]}`;
sonuc = `${urunler[1]} - ${fiyatlar[1]} - ${renkler[1]}`;
sonuc = `${urunler[2]} - ${fiyatlar[2]} - ${renkler[2]}`;


let urun1 = [
    "Iphone 15", 
    50000, 
    ["gold","black","silver"]
];


let urun2 = ["Iphone 16", 60000, "black"];
let urun3 = ["Iphone 17", 70000, "silver"];

urun1[0] = "samsung 24 pro";

sonuc = `${urun1[0]} - ${urun1[1]} - ${urun1[2][0]}`;





// sonuc = `${urun2[0]} - ${urun2[1]} - ${urun2[2]}`
// sonuc = `${urun3[0]} - ${urun3[1]} - ${urun3[2]}`;


console.log(sonuc);