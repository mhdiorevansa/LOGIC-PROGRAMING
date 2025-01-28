// mengurangi array menjadi 1 nilai
const arr = [1, 2, 3, 4];
// reduce menerima 2 parameter yaitu accumulator. acumulator adalah nilai yang disimpan selama iterasi
// kemudian current value dimulai dari elemen awal
// initial value (opsional) nilai awal yang digunakan untuk acumulator. jika tidak ada maka accumlator adalah elemen pertama
const sum = arr.reduce((acc, cur) => acc + cur, 0);
console.log(sum);