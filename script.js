// 1) Product class olacaq.Name price count gələcək.Ve ayri bir funksiya olacaq ki bu funksiya total Price hesablayacaq.Və bu yaranan productlari bu funksiyaya gondərdiyimdə mənə total price console cixardacaq.
// Məsələn: 2 kofe 0.50 azn , 3 çay 4azn , 2 fanta 2azn    totalPrice=2*0.50+3*4+2*2 = 17Azn consoleda görsənəcək.


class Product {
    constructor(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }

    getTotalPrice() {
        return this.price * this.count;

    }

    showProductInfo() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`);
        console.log(`Count: ${this.count}`);
        console.log(`Total: $${this.getTotalPrice()}`);
    }
}


const Coffee = new Product('Coffee', 6.90, 2);
const Tea = new Product("Tea", 2.50, 3)
console.log(Coffee.showProductInfo());
console.log(Tea.showProductInfo());

//__________________________________________________________________________

// 2) Elə bir metod yazın ki parametr olaraq ancaq array qebul etsin (Array.isArray()).Və consolda arrayın ən kiçik elementini qaytarsın


debugger
let array = ["hello", "who", "people"];

function findMinElement(arr) {
    if (Array.isArray(arr) && arr.length > 0) {
        let minElement = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i].length < minElement.length) {
                minElement = arr[i];
            }
        }
        console.log("Ən kiçik element: " + minElement);
        return minElement;
    } else {
        console.error("Düzgün bir array deyil!");
        return undefined;
    }
}

findMinElement(array);

//____________________________________________________________________________
// 3) Animal adında  class yaradın. butun heyvanlarin ortaq özəlliklərin burda tutacaqsız.
//      3.1 Default olaraq Eat() metodu yaradın.
//      3.2 Daha sonra Walk() metodu yaradın.
//      3.3 GetInfo() metodu yaradın.
//      3.4 Animal-dan törəyən Bird klass-ı yaradın.

class Animal {
    constructor(name, footCount) {
        this.name = name;
        this.footCount = footCount;
    }

    Eat() {
        console.log(`${this.name} are eating.`);
    }

    Walk() {
        console.log(`${this.name} are walking.`);
    }

    GetInfo() {
        console.log(`Name: ${this.name}, footCount: ${this.footCount}`);
    }
}

class Bird extends Animal {
    constructor(name, footCount, wings) {
        super(name, footCount);
        this.wings = wings;
    }

    Fly() {
        console.log(`${this.name} has ${this.wings} wings`);
    }


    GetInfo() {
        super.GetInfo();
        console.log(`wings: ${this.wings}`);
    }
}


const commonAnimals = new Animal("Common animals", 5);
commonAnimals.Eat();
commonAnimals.Walk();
commonAnimals.GetInfo();

const blackBirds = new Bird("blackBirds", 3, 2);
blackBirds.Eat();
blackBirds.Walk();
blackBirds.Fly();
blackBirds.GetInfo();

