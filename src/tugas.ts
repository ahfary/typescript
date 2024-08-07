/**
* TODO:
* 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
* - Menerima dua buah argumen number, a dan b.
* - Mengembalikan nilai terkecil antara a atau b.
* - Bila nilai keduanya sama, maka kembalikan dengan nilai a
*
* contoh:
* minimal(1, 4) // 1
* minimal(3, 2) // 2
* minimal(3, 3) // 3
*
* 2. Buatlah fungsi bernama power dengan ketentuan berikut:
* - Menerima dua buah argumen number, a dan b.
* - Mengembalikan nilai dari hasil perkalian a * a sebanyak b (fungsi kuadrat).
*
* contoh:
* power(7, 3) // 343
* power(3, 3) // 27
* power(4, 0.5) // 2
*
* 3. Buatlah fungsi bernama penumlahanBilangan dengan ketentuan berikut:
* - Menerima dua buah argument a yang merupakan array dari sebeluh number dan b
hanya menerima kata-kata ganjil dan genap
* - return dari function adalah hasil dari penjumlahan nilai2 tergantung b nya
adalah ganjil / genap
*
* contoh:
* perjumlahBilangan([1,2,3], "ganjil") //4
* perjumlahBilangan([1,2,3,4,5,6,7], "genap") //12
* perjumlahBilangan([1,2,3,4,5], "ganjil") // 9
* perjumlahBilangan([1,2,3,4,5,6,7], "ganj") //error
* perjumlahBilangan([1,2,3,4,5,6,7], "positif") //error
* power(4, 0.5) // 2
* 4. Buatlah class bernama Animal dengan ketentuan:
* - Memiliki properti:
* - name: string
* - age: int
* - isMammal: boolean
* - Memiliki constructor untuk menginisialisasi properti:
* - name
* - age
* - isMammal
* 5. Buatlah class bernama Rabbit dengan ketentuan:
* * - Merupakan turunan dari class Animal
* - Memiliki method:
* - eat yang mengembalikan nilai string "${this.name} yang berumur ${this.age} sedang makan!"
* - Ketika diinstansiasi, properti isMammal harus bernilai true
* 6. Buatlah class bernama Eagle dengan ketentuan:
* - Merupakan turunan dari class Animal
* - tambahkan properti speed yang merupaakan number dan bernilai 220
* - Memiliki method:
* - fly yang mengembalikan nilai string "${this.name} yang berumur ${this.age}
sedang terbang!"
* - run memiliki argeument speed bernilai number dan mengembalikan nilai
string "${this.name} Berlari dengan kecapatan ${speed} km";" dengan aksesk
modified protected
* - Ketika diinstansiasi, properti isMammal harus bernilai false
*
*
* 7 Buatlah class bernama EagleRun dengan ketentuan:
* - Merupakan turunan dari class Eagle
* - Memiliki method:
* - fly yang mengembalikan nilai string "${this.name} yang berumur ${this.age}
sedang terbang!"
* - runEagle yang mengembalikan menjalakan method run dari class Eangle
*
* 8. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
* - properti name bernilai: "Labi"
* - properti age bernilai: 2
*
* const myRabbit = new Rabbit("Labi", 2);
* myRabbit.eat()); Labi yang berumur 2 sedang makan!
*
*
* 9. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
* - properti name bernilai: "Elo"
* - properti age bernilai: 4
*
*
*
* const myEagle = new Eagle("Elo", 4, 220);
myEagle.fly()); Elo yang berumur 4 sedang terbang!
myEagle.run() Error karena method run memiliki access modifier
protected

* 10. Buatlah instance dari class EagleRun bernama "speedTes" dengan ketentuan:
* - properti name bernilai: "Labi"
* - properti speed bernilai: 220
*
* const speedTes = new EagleRun("Kuku", 220)
* speedTes.runEagle() // Kuku Berlari dengan kecapatan 220 km";

*/


// 3. Buatlah fungsi bernama penumlahanBilangan dengan ketentuan berikut:
// * - Menerima dua buah argument a yang merupakan array dari sebeluh number dan b
// hanya menerima kata-kata ganjil dan genap
// * - return dari function adalah hasil dari penjumlahan nilai2 tergantung b nya
// adalah ganjil / genap
// *
// * contoh:
// * perjumlahBilangan([1,2,3], "ganjil") //4
// * perjumlahBilangan([1,2,3,4,5,6,7], "genap") //12
// * perjumlahBilangan([1,2,3,4,5], "ganjil") // 9
// * perjumlahBilangan([1,2,3,4,5,6,7], "ganj") //error
// * perjumlahBilangan([1,2,3,4,5,6,7], "positif") //error


// Soal Nomor 1
function Minimal(a: number, b: number) {
  return a > b ? b : a;
}

console.log(Minimal(3, 2));

// Soal Nomor 2
function Power(a: number, b: number) {
  return a ** b;
}

console.log(Power(7, 3));

// Soal Nomor 3
function penjumlahanBilangan(a: number[], b: string): number {
    if (b !== "ganjil" && b !== "genap") {
        throw new Error("Argument b harus berupa string 'ganjil' atau 'genap'.");
    }

    return a.filter(e => {
        if (b === "ganjil") {
            return e % 2 === 1;
        } else if (b === "genap") {
            return e % 2 === 0;
        }
    }).reduce((acc, curr) => acc + curr);
}

console.log(penjumlahanBilangan([1,2,3,4,5,6], "ganjil"))

// Soal Number 4

class Animal {
  name: string;
  age: number;
  isMamali: boolean;
  constructor(name: string, age: number, isMamali: boolean) {
    this.name = name;
    this.age = age;
    this.isMamali = isMamali;
  }
}

// Soal Nomor 5

class Rabbit extends Animal {
  constructor(name: string, age: number, isMamali: boolean) {
    super(name, age, isMamali);
  }
  eat() {
    console.log(`${this.name} yang berumur ${this.age} sedang makan!`);
  }
}

// Soal Nomor 6

class Eagle extends Animal {
  speed: number;
  constructor(name: string, age: number, isMamali: boolean, speed: number) {
    super(name, age, isMamali);
    this.speed = speed;
  }

  fly() {
    console.log(`${this.name} yang berumur ${this.age} sedang terbang!`);
  }

  run() {
    this.isMamali? console.log(`${this.name} tidak bisa terbang karna nilai is mamalianya true`) : console.log(`${this.name} Berlari dengan kecapatan ${this.speed} km`)
  }
}

// Soal Nomor 7

class EagleRun extends Eagle {
    constructor(name: string, age: number, isMamali: boolean, speed: number) {
        super(name, age, isMamali, speed)
    }
    // Method run sama flynya udah ada di class Eagle
}

// Soal Nomor 8

const myRabbit = new Rabbit("labi", 2, true);

console.log(myRabbit);
myRabbit.eat();


// Soal Nomor 9

const myEagle = new Eagle("Elo", 4, true, 220)
myEagle.fly()
myEagle.run()

// Soal Nomor 10

const speedTes = new EagleRun("Kuku", 12, false, 220)
speedTes.run()