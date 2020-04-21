import Queue from './Queue/Queue';
import Person from './DataModel/Person';

let stringQueue = new Queue<string>();
stringQueue.enqueue("FIRST");
stringQueue.enqueue("Second");

let numberQueue = new Queue<number>();
numberQueue.enqueue(10);
numberQueue.enqueue(20);

let person1 = new Person("Name1", 24);
let person2 = new Person("Name2", 26);

let personQueue = new Queue<Person>();
personQueue.enqueue(person1);
personQueue.enqueue(person2);

console.log('PRINTING STRING QUEUE', stringQueue.printQueue());
console.log('PRINTING NUMBER QUEUE', numberQueue.printQueue());
console.log('PRINTING PERSON QUEUE', personQueue.printQueue());
