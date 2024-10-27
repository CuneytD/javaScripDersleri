


var kursadi =  "Lorem ipsum dolor sit amet consectetur, in adipisicing elit. Ipsam sapiente et autem. Velit autem minus in deserunt itaque! Animi in dicta veritatis optio sit assumenda minus quo enim illo. Minima, nobis";

var sonuc;

sonuc = kursadi.toUpperCase(); // büyük harf çeviri
sonuc = kursadi.toLocaleLowerCase(); // küçük harfe çeviri
sonuc = kursadi.length;  // kaç karakterli olduğunu yazar.
sonuc = kursadi.length[0]; // karakteri tek tek çağırmak için [] kullanılır

sonuc = kursadi.slice(0,6); // tek tek karakter aralığını vererek veya başlangıç noktasını vererek veriyi  çağrırız.

sonuc = kursadi.substring(0,6); // slince aynı metotlarda aynı şeyi yapar.

sonuc = kursadi.replace("Lorem","cüneyt"); // replace veride 1 değişiklik için kullanılır.
sonuc = kursadi.replaceAll("in","cüneyt"); // replaceAll bütün veride değişiklik için kullanılır.

sonuc = kursadi.trim(); // boşlukları silmek için kullanılır encok mail adrteslerinde kullanılır. trimEnd ve Trimstart başlangıç ve son boşlukları siler

sonuc = kursadi.indexOf("minus"); // veri içinde kelimenin kaçıncı yerde olduğunu bulur.

sonuc = kursadi.split(" "); // kelime kelime ayırır ve her kelime bir sayıya gelir
sonuc = kursadi.split(" ")[18];





console.log(sonuc);
