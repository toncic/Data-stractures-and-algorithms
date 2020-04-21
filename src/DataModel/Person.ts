class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  toString() {
    return this.name + ' ' + this.age;
  }
}

export = Person;
