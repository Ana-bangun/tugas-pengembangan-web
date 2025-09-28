document.title = "Memori";

let tanggal = document.getElementById("tgl");
if (tanggal) {
    tanggal.innerHTML = new Date().toLocaleDateString("id-ID");
}

let web = {
    title: "Memori",
    data: "Memori adalah urutan byte yang berisi sepotong kecil informasi. Informasi ini mungkin menjadi perintah untuk mengatakan pada computar apa yang harus dilakukan. Sel mungkin berisi data yang diperlukan computar untuk melakukan suatu perintah. Setiap slot mungkin berisi salah satu, dan apa yang sekarang menjadi data mungkin saja kemudian menjadi perintah. Ukuran masing-masing sel, dan jumlah sel, berubah secara hebat dari komputer ke komputer, dan teknologi dalam pembuatan memori sudah berubah secara hebat - dari relay elektromekanik, ke tabung yang diisi dengan air raksa di mana pulsa akustik terbentuk, sampai matriks magnet permanen, ke setiap transistor, ke sirkuit terpadu dengan jutaan transistor di atas satu chip silikon."
};

let judul = document.getElementById("title");
let konten = document.getElementsByClassName("content")[0];

judul.innerHTML = web.title;

web.data = web.data.replace(/computar/gi, "komputer");
konten.innerHTML = web.data;

let jumlahKalimat = web.data.split(/[.!?]+/).filter(k => k.trim().length > 0).length;

let jumlahKata = web.data.trim().split(/\s+/).length;

document.getElementById("jumlahKalimat").innerText = jumlahKalimat;
document.getElementById("jumlahKata").innerText = jumlahKata;

let sudahIdentifikasi = false;

function IdentifikasiParagraf() {
    let count = document.getElementById("count");

    if (sudahIdentifikasi) {
        count.innerHTML += "<br>Paragraf sudah diidentifikasi";
    } else {
        count.innerHTML += "<br>Paragraf berhasil diidentifikasi";
        sudahIdentifikasi = true;
    }
}
