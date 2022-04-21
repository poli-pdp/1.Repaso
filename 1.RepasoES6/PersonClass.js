class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  saludar() {
    return `Hola ${this.name}`;
  }
}

const person = new Person("Pedro", 20, "Teacher");
console.log(person.name);
console.log(person.saludar());
