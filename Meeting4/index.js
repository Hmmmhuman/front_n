// Array and Object
let number =[1,2,3,4,5];
let string = ['a','b','c']; // menyimpan lebih dari satu data

//cara 2
let number2 = new Array(1,2,3,4,5);

//tipe data dalam array : 
// 1. number
// 2. string
// 3. campuran

let campuran =['agus',30,true,[10,20,30]];

console.log(number.length -1);
//console.log(number(number.length -1)); another version
console.log(number2);
//console.log(campuran[0]);

//mengubah array menjadi string
//console.log(number2,toString);

number.pop();
console.log(number);

// pop = menghapus data dari belakang
// push = menambahkan data dari belakang
// unshift = menambahkan data dar depan
//splice = menambahkan/menghapus data ditengah
//slice = memotong data atau membagi data

//penggunaan splice
let hewan = ['babi','anjing','kuda','semut','gajah'];
hewan.splice(3,0,'rusa');
console.log(hewan);

//penggunaan slice
let nama1= ['adam','kipal','william','mclaren','rodrigo'];

let orang_goblok = nama1.slice(0,4);
let orang_bijak = nama1.slice(4)

console.log(orang_goblok);
console.log(orang_bijak);

console.log('-------------------------------------------------------');
console.log('-------------------------------------------------------');

let samsul ={
    nama:'samsul',
    umur:5,
    pekerjaan:'bakso',
    menikah:true,
    grade:[30,2,30,],
    saygreetings: () {
        console.log('woii tape nama' + this.nama)
    },
};
console.log(samsul);
console.log(samsul.nama.length);

samsul ['nagara'] = 'indonesia';
console.log(samsul)



