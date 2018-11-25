function konversiMenit(menit) {
    var mm = menit / 60
    var rmm = Math.floor(mm)
    var ss = (mm - rmm) * 60
    var rss = Math.round(ss)
    if (rss < 10) {
        rss = "0" + rss
    } else {
        rss = rss
    }
    return (rmm + " : " + rss)
}

console.log(konversiMenit(63))
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00