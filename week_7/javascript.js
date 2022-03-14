function Cat(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = 'Baby kitten';
    this.image = 'images/cat.jpg';
}

function Pug(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = 'A fawn pug';
    this.image = 'images/pug.jpg';
}

function Turtle(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = 'Baby sea turtle';
    this.image = 'images/turtle.jpg';
}

const animal = [new Cat(), new Pug(), new Turtle()];

const names = ['Zac', 'Lisa', 'Will', 'Jess', 'Gabby', 'Sally', 'Tony'];

function getRandomIndex(maxIndex){
    Math.floor(Math.random() * maxIndex)
}