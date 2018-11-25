//1. Melakukan Looping Menggunakan While
console.log('Nomor 1')
var start1 = 2
var start2 = 20

console.log('LOOPING PERTAMA')
while (start1 <= 20) {
    console.log(start1 + ' - I love coding')
    start1 += 2
}
console.log('LOOPING KEDUA')
while (start2 >= 2) {
    console.log(start2 + ' - I will become fullstack developer')
    start2 -= 2
}

//2. Melakukan Looping Menggunakan For
console.log('Nomor 2')
var start1 = 1
var start2 = 20

console.log('LOOPING PERTAMA')
for (let start1 = 1; start1 <= 20; start1++) {
    console.log(start1 + ' - I love coding')
}

console.log('LOOPING KEDUA')
for (let start2 = 20; start2 >= 1; start2--) {
    console.log(start2 + ' - I will become fullstact developer')
}

//3. Angka Ganjil dan Genap
console.log('Nomor 3')
var startmod1 = 1
var startmod2 = 1
var startmod5 = 1
var startmod9 = 1
var limit = 100
var counter1 = 1
var counter2 = 2
var counter3 = 5
var counter4 = 9

while (startmod1 <= limit) {
    if (startmod1 % 2 === 0) {
        console.log('GANJIL')
    } else {
        console.log('GENAP')
    }
    startmod1 += counter1
}

while (startmod2 <= limit) {
    if (startmod2 % 3 === 0) {
        console.log(startmod2 + ' KELIPATAN 3')
    } else {
        console.log('" "')
    }
    startmod2 += counter2
}

while (startmod5 <= limit) {
    if (startmod5 % 6 === 0) {
        console.log(startmod5 + ' KELIPATAN 6')
    } else {
        console.log('" "')
    }
    startmod5 += counter3
}

while (startmod9 <= limit) {
    if (startmod9 % 3 === 0) {
        console.log(startmod9 + ' KELIPATAN 3')
    } else {
        console.log('" "')
    }
    startmod9 += counter2
}