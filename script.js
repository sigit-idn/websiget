// const methodMahasiswa = {
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log ("Halo ${this.nama}, selamat makan");
//     },

//     main: function(jam){
//         this.energi -= jam;
//         console.log ("Halo ${this.nama}, selamat bermain");
//     },

//     tidur: function(jam){
//         this.energi += jam;
//         console.log ("Halo ${this.nama}, selamat tidur");
//     }

// };

// function Mahasiswa (nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);

//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;


// };

// let sigit = Mahasiswa('Sigit', 8);

// Menggunakan Function Declaration Prototype

// function Mahasiswa (nama, energi) {

//     this.nama = nama;
//     this.energi = energi;

// };

// Mahasiswa.prototype.makan = function (porsi){
//     this.energi += porsi;
//     return "Halo ${this.nama}, selamat makan";
// }

// Mahasiswa.prototype.main = function (jam){
//     this.energi -= jam;
//     return "Halo ${this.nama}, selamat bermain";
// }

// Mahasiswa.prototype.tidur = function (jam){
//     this.energi += jam*2;
//     return "Halo ${this.nama}, selamat tidur";
// }

// let sigit = new Mahasiswa('Sigit', 8);


// Menggunakan Class

class Mahasiswa {
    constructor (nama, energi) {
    this.nama = nama;
    this.energi = energi;
}

    makan(porsi){
    this.energi += porsi;
    return "Halo ${this.nama}, selamat makan";
}

    main(jam){
    this.energi -= jam;
    return "Halo ${this.nama}, selamat bermain";
}

    tidur(jam){
    this.energi += jam*2;
    return "Halo ${this.nama}, selamat tidur";
}
}

let sigit = new Mahasiswa ('Sigit', 8)