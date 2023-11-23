// var n1 = Number(prompt("Masukkan Angka Pertama"));
// var operator = prompt("Masukkan Operator + - * /");
// var n2 = Number(prompt("Masukkan Angka Kedua"));

// var hasil;
// if (operator == "+") {
//     if (!isNaN(n1) && !isNaN(n2)) {
//         var hasil = n1 + n2;
//         document.write("Hasil: " + hasil);
//     } else {
//         alert("ERROR")
//     }
// } else if (operator == "-") {
//     if (!isNaN(n1) && !isNaN(n2)) {
//         var hasil = n1 - n2;
//         document.write("Hasil: " + hasil);
//     } else {
//         alert("ERROR")
//     }
// } else if (operator == "*") {
//     if (!isNaN(n1) && !isNaN(n2)) {
//         var hasil = n1 * n2;
//         document.write("Hasil: " + hasil);
//     } else {
//         alert("ERROR")
//     }
// } else if (operator == "/") {
//     if (!isNaN(n1) && !isNaN(n2)) {
//         var hasil = n1 / n2;
//         document.write("Hasil: " + hasil);
//     } else {
//         alert("ERROR")
//     }
// } else {
//     alert("ERROR")
// }




// array method includes ini berfungsi untuk kita cek data dalam 

// let makanan = ["nasi goreng", "mie goreng", "nasi goreng"]
// console.log(makanan)

// let adasate = makanan.includes("sate")
// console.log(adasate) //jawaban false karena sate tidak ada dalam data array

// let nasigoreng = makanan.includes("nasi goreng")
// console.log(nasigoreng) //jawaban true karena nasi goreng ada dalam data array 

//array dengan method sort yang berfungsi untuk mengurutkan data

// let alfabet = ["a", "d", "b", "e", "c", "f", "g"]
// console.log(alfabet.sort())

//melakukan pembulatan dengan method di javascript
//Math.round =  melakukan/mengembalikan nilai dari pembulatan.bilangan(x) terdekat

let a = 5.2 //5
let b = 5.6 //6
let c = -5.5 //-5
let d = 5.5 //6
let e = 6.7

let bulatkan = Math.round(a)
console.log(bulatkan)

//Math.ceil = melakukan/mengembalikan nilai dari pembulatan.bilangan(x) ke atas
let atas = Math.ceil(a)
console.log(atas)

//Math.floor = melakukan/mengembalikan nilai dari pembulatan.bilangan(x) ke bawah
let bawah = Math.floor(c) // -5.5 => -6
console.log(bawah)

//Math.trunc = menghapus koma
let trunc = Math.trunc(b) // 5.6 => 5 X.6
console.log(trunc)

//Math.pow = melakukan perpangkatan dimana x adalah basisnya dan y pangkatnya.
let pangkat = Math.pow(7, 2)
console.log(pangkat)

//Math.sqrt = mengembalikan nilai akar 
let akar = Math.sqrt(16) //4
console.log(akar)

//Math.min = mengembalikan nilai terkecil
let min = Math.min(2, 4, 8, 16, 7)
console.log(min) // => 2 (karena nilai paling kecil)

//Math.max = mengembalikan nilai terkecil
let max = Math.max(2, 4, 8, 16, 7)
console.log(max) // => 16 (karena nilai paling besar)

//Math=.abs = nilai mutlak yang tidak memperhitungkan nilai negatif
let abs = Math.abs(-5) // => 5
console.log(abs)

//Math.random = mengembalikan nilai acak
let acak = Math.random() * 6;
console.log(acak)

//tanpa nilai koma
let acak1 = Math.floor(Math.random() * 7);
console.log(acak1)