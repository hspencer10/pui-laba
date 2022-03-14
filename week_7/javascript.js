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

function generateRandomIndex(maxIndex){
    let x = Math.floor(Math.random() * maxIndex);
    return x;
}

function generateRandomName(){
    let randomIndex = generateRandomIndex(names.length);
    return names[randomIndex];
}

function generateRandomAge(){
    let age = generateRandomIndex(15);
    return age;
}

function generateRandomAnimal(){
    let animalIndex = generateRandomIndex(3);
    randomAnimal = animal[animalIndex];

    if (randomAnimal instanceof Cat) {
        return new Cat(generateRandomName(), generateRandomAge());
    } 
    else if (randomAnimal instanceof Pug) {
        return new Pug(generateRandomName(), generateRandomAge());
    } 
    else if (randomAnimal instanceof Turtle) {
        return new Turtle(generateRandomName(), generateRandomAge());
    }
}

function onLoad() {
    let animal = generateRandomAnimal();
    console.log(animal)
    // update the page based on the animal properties
    document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
    let imageTag = document.getElementById("animal-img");
    imageTag.setAttribute("src", animal.image);
    imageTag.setAttribute("alt", animal.image_alt);
  
}