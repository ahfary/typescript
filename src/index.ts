// const age: number = 17;
// const nama: string = 'Abqory';
// const isBelajar: boolean = true;
// const mapel: string[] = ['Matematika', 'IPA', 'IPS', 'Typescript', 'HTML', 'CSS'];

// function panggilan (age: number, nama: string) {
//     console.log(`Halo Nama saya ${nama}, Saya berumur ${age} tahun, sekarang saya sedang ${isBelajar ? 'belajar' : 'tidak belajar'} ${mapel[3]}.`);
// }

// panggilan(age, nama)

// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     isNew: boolean;
//     category?: string;
// }

// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     isNew: boolean;
//     category?: string;
// }

// interface ResponAPI {
//     msg: string;
//     status: number;
//     data: Product[];
// }

// function data(respon : ResponAPI) {
//     msg: "Data Berhasil";
//     status: 200;
//     data: [
//         {
//             id: 1,
//             name: "Product 1",
//             price: 1000,
//             isNew: true,
//             category: "Parabot"
//         },
//         {
//             id: 2,
//             name: "Product 2",
//             price: 2000,
//             isNew: false,
//             category: "Elektronik"
//         }
//     ]
// }

// function filterArray(arr: number[], value: number): boolean {
//     return arr.includes(value);
// }

// // Contoh penggunaan
// const array = [1, 2, 3, 4, 5];
// const result = filterArray(array, 3);
// const result2 = filterArray(array, 6);

// console.log(result);
// console.log(result2);

// class User {
//   id: number;
//   firstName: string;
//   lastName: string;
//   age: number;
//   user : {
//     username: string
//     password: string
//   }[]

//   constructor(id: number, firstName: string, lastName: string, age: number) {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;

//     this.user = [{
//       username: "Faqih",
//       password: "Abqory"
//     }, {
//       username: "Daffa",
//       password: "Hafizh"
//     }]
//   }


//   login() {
//     if (this.firstName === "Faqih" && this.lastName === "Abqory" || this.firstName === "Daffa" && this.lastName === "Hafizh") {
//       return 'Login Berhasil';
//     } else {
//       return 'Username atau Password salah';
//     }
//   }



//   register() {
    
//   }
// }

// const user = new User(1, "Faqih", "Abqory", 17);
// const user2 = new User(2, "Daffa", "Hafizh", 17);

// console.log(user);
// console.log(user.login(),);
// console.log(user2);
// console.log(user2.login(),);

// class Profile {
//     user : {
//         username: string,
//         password: string
//     }[]

//     constructor() {
//         this.user = [
//         {
//             username: "Daffa",
//             password: "Hafizh"
//         }, {
//             username: "Faqih",
//             password: "Abqory"
//         }]
//     }

//     login(username: string, password: string) {
//         for (let user of this.user) {
//             if (user.username === username && user.password === password) {
//                 return 'Login Berhasil';
//             }                                            
//         }
//         return 'Username atau Password salah';
//     }
// }

// const profile = new Profile();
// console.log(profile.login('Faqih', 'Abqory'))
// console.log(profile.login('Daffa', 'Hafizh'))
// console.log(profile.login('faqih', 'hafizh'))



// sub class
// merupakan turunan dari class baik itu property maupun method.

class Smartphone {
    brand: string;
    model: string;
    color: string;
    year: number;
    isTKDN: boolean;
    constructor( brand: string, model: string, year: number, color: string) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.isTKDN = true;
    }

    charging(): void {
        console.log(`Smartphone ${this.brand} ${this.model} sedang dicas`);
    }
}

const nokia = new Smartphone("Nokia", "3310", 2020, "Black");
console.log("nokia: ", nokia);

// class Android extends Smartphone {
//     constructor(brand: string, model: string, year: number, color: string) {
//         super(brand, model, year, color);
//     }

//     splitScreen(): void {
//         console.log(`split screen berhasil`);
//     }
// }

class IOS extends Smartphone {
    constructor(brand: string, model: string, year: number, color: string) {
        super(brand, model, year, color);
    }

    airdrop(): void {
        console.log(`airdrop berhasil`);
    }
}

// const xiaomi = new Android("Xiaomi", "Redmi Note 10", 2021, "Black");
// console.log("xiaomi: ", xiaomi);

// xiaomi.charging();
// xiaomi.splitScreen();

// Polymorphism
// Merupakan suatu keadaan dimana sub class ingin mengubah sifat atau perilaku dari class

// class Android extends Smartphone {
//     screenSize: number
//     constructor(brand: string, model: string, year: number, color: string, screenSize: number) {
//         super(brand, model, year, color);
//         this.screenSize = screenSize;
//     }

//     splitScreen(): void {
//         console.log(`split screen berhasil`);
//     }

//     showBrand(): void {
//         console.log(`brand: ${this.brand} model: ${this.model} dan ukuran layar: ${this.screenSize}`);
//     }
// }

// const xiaomi = new Android("Xiaomi", "Redmi Note 10", 2021, "Black", 6.67);
// console.log("xiaomi: ", xiaomi);
// xiaomi.showBrand();


