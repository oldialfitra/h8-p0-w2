//Tugas 1
console.log('Nomor 1')

function shoutOut() {
    return 'Halo Function!'
}

console.log(shoutOut())

//Tugas 2
console.log('Nomor 2')
var num1 = 5
var num2 = 6

function calculateMultiply(num1, num2) {
    hasil = num1 * num2
    return hasil
}

var hasilPerkalian = calculateMultiply(num1, num2)

console.log(hasilPerkalian)

//Tugas 3
console.log('Nomor 3')
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

function processSentence(name, age, address, hobby) {
    return 'Nama saya ' + name + ' umur saya ' + age + ' tahun, alamat saya di ' + address + ' dan saya punya hobby yaitu ' + hobby + '!'
}

var fullSentence = processSentence(name, age, address, hobby)
console.log(fullSentence)