// 10000 elemanlı rastgele sayılı dizi oluşturuldu
let dizi = [];
for (let i = 0; i < 10000; i++) {
  dizi.push(Math.floor(Math.random() * 10000));
}
// Linear search ile en büyük eleman arandı
function linearFindLargest(dizi) {
  let maxEleman = dizi[0];
  for (let i = 1; i < dizi.length; i++) {
    if (dizi[i] > maxEleman) {
      maxEleman = dizi[i];
    }
  }
  return maxEleman;
}
// Binary search ile en büyük eleman arandı
function binaryFindLargest(dizi) {
  var baslangic = 0;
  var son = dizi.length - 1;

  while (baslangic < son) {
    var orta = parseInt(baslangic + (son - baslangic) / 2);

    if (dizi[orta] > dizi[orta + 1]) {
      son = orta;
    } else {
      baslangic = orta + 1;
    }
  }
  var maxEleman = dizi[baslangic];
  return maxEleman;
}

function quicksort(dizi) {
  if (dizi.length <= 1) {
    return dizi;
  } else {
    var pivot = dizi[0];
    var solTaraf = [];
    var sagTaraf = [];
    for (var i = 1; i < dizi.length; i++) {
      if (dizi[i] < pivot) {
        solTaraf.push(dizi[i]);
      } else {
        sagTaraf.push(dizi[i]);
      }
    }
    return quicksort(solTaraf).concat(pivot, quicksort(sagTaraf));
  }
}
// Quick sort ile dizi sıralandı
siralanmisDizi = quicksort(dizi);

//Linear fonksiyonunun çalışma süresi hesaplandı.

//Binary fonksiyonunun çalışma süresi hesaplandı.
let startTime2 = performance.now();
var result2 = binaryFindLargest(siralanmisDizi);
let endTime2 = performance.now();
console.log(
  "O(logn)-Binary fonksiyonuyla",
  (endTime2 - startTime2).toFixed(4),
  "milisaniye sürdü ve En büyük eleman",
  result2
);

var t0 = new Date().getMilliseconds();
var result = linearFindLargest(dizi);
var t1 = new Date().getMilliseconds();
console.log(
  "O(n)-Linear fonksiyonuyla",
  (t1 - t0).toFixed(4),
  "milisaniye sürdü ve En büyük eleman",
  result
);