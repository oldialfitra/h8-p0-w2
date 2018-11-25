var tanggal = 21
var bulan = 1
var tahun = 1945

switch (tanggal >= 1 && tanggal <= 31) {
    case true:
        hasilTanggal = tanggal
        break;

    default:
        hasilTanggal = 'Bukan tanggal'
        break;
}

switch (bulan) {
    case 1:
        hasilBulan = 'Januari'
        break;
    case 2:
        hasilBulan = 'Februari'
        break;
    case 3:
        hasilBulan = 'Maret'
        break;
    case 4:
        hasilBulan = 'April'
        break;
    case 5:
        hasilBulan = 'Mei'
        break;
    case 6:
        hasilBulan = 'Juni'
        break;
    case 7:
        hasilBulan = 'Juli'
        break;
    case 8:
        hasilBulan = 'Agustus'
        break;
    case 9:
        hasilBulan = 'September'
        break;
    case 10:
        hasilBulan = 'Oktober'
        break;
    case 11:
        hasilBulan = 'November'
        break;
    case 12:
        hasilBulan = 'Desember'
        break;
    default:
        hasilBulan = 'Bukan bulan'
        break;
}

switch (tahun >= 1900 && tahun <= 2200) {
    case true:
        hasilTahun = tahun
        break;

    default:
        hasilTahun = 'Bukan tahun'
        break;
}

console.log(hasilTanggal + ' ' + hasilBulan + ' ' + hasilTahun)