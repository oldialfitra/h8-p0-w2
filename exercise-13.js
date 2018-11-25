function xo(str) {
    var hasilo = 0
    var hasilx = 0

    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] == 'x') {
            hasilx = hasilx + 1
        } else {
            hasilo = hasilo + 1
        }


    }
    if (hasilo < hasilx) {
        hasil = false

    } else if (hasilo > hasilx) {
        hasil = false
    } else {
        hasil = true
    }
    return hasil
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true