import Queue from './Queue';
import Person from '../DataModel/Person';

describe('QueueTester', () => {
  var queueInstance: Queue<number>;
  var personQueue: Queue<Person>;
  var personInstance: Person;

  beforeAll(() => {
    personQueue = new Queue<Person>();
    personInstance = new Person("Name1", 24);
  })

  beforeEach(()=> {
    queueInstance = new Queue<number>();
  })

  test('isEmpty', () => {
    expect(queueInstance.isEmpty()).toBe(true);
  })

  test('addingElementIntoQueue', () => {
    expect(queueInstance.isEmpty()).toBe(true);
    queueInstance.enqueue(23);
    expect(queueInstance.isEmpty()).toBe(false);
  })

  test('removingElementFromQueue', () => {
    queueInstance.enqueue(21);
    queueInstance.enqueue(12);
    expect(queueInstance.front()).toBe(21);
    queueInstance.dequeue();
    expect(queueInstance.front()).toBe(12);
  })

  test('pickingItemFromFront', () => {
    queueInstance.enqueue(21);
    queueInstance.enqueue(12);
    expect(queueInstance.front()).toBe(21);
  })

  test('printingQueue', () => {
    queueInstance.enqueue(21);
    queueInstance.enqueue(12);
    expect(queueInstance.printQueue()).toBe('21 12 ');
  })

  test('customObjectAsType', () => {
    personQueue.enqueue(personInstance);
    expect(personQueue.printQueue()).toBe('Name1 24 ');
  })
})
