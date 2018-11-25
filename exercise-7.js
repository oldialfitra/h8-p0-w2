//1. Menyusun Barisan Bintang
console.log('Nomor 1')
var rows1 = 5
var i = 1

while (i <= rows1) {
    console.log('*')
    i += 1
}

//2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('Nomor 2')
var rows2 = 5
var column2 = ''
var i = 1
var j = 1

while (i <= rows2) {
    while (j <= rows2) {
        column2 += '*'
        j += 1
    }
    console.log(column2)
    i += 1
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('Nomor 3')
var rows3 = 5
var column3 = ''
var i = 1
var j = 1

while (i <= rows3) {
    while (j <= i) {
        column3 += '*'
        j += 1
    }
    console.log(column3)
    i += 1
}