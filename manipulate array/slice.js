// memotong array menjadi bagian baru, tanpa mengubah array asli
const arr = [1, 2, 3, 4];
// parameter pertama adalah index awal
// parameter kedua adalah sebelum index ke-n
const slice = arr.slice(0, 3);
console.log(slice);