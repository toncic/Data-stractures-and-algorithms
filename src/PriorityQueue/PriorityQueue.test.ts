import PriorityQueue from './PriorityQueue';
import Person from '../DataModel/Person';
describe('PriorityQueueTester', () => {
  var priorityQueueInstance: PriorityQueue<string>;
  var personQueue: PriorityQueue<Person>;
  var personInstance: Person;

  beforeAll(() => {
    personQueue = new PriorityQueue<Person>();
    personInstance = new Person("Name1", 24);
  })

  beforeEach (() => {
    priorityQueueInstance = new PriorityQueue<string>();
  })

  test('isEmpty', () => {
    expect(priorityQueueInstance.isEmpty()).toBe(true);
  })

  test('addingElementIntoQueue', () => {
    expect(priorityQueueInstance.isEmpty()).toBe(true);
    priorityQueueInstance.enqueue("Name1", 1);
    expect(priorityQueueInstance.isEmpty()).toBe(false);
  })

  test('addingElementWithPriority', () => {
    priorityQueueInstance.enqueue('Name2', 2);
    priorityQueueInstance.enqueue('Name3', 3);
    expect(priorityQueueInstance.printQueue()).toBe("Name2 Name3 ");
    priorityQueueInstance.enqueue('Name1', 1);
    expect(priorityQueueInstance.printQueue()).toBe("Name1 Name2 Name3 ");
  })

  test('removingElementFromQueue', () => {
    priorityQueueInstance.enqueue('Name2', 2);
    priorityQueueInstance.enqueue('Name3', 3);
    expect(priorityQueueInstance.printQueue()).toBe("Name2 Name3 ");
    priorityQueueInstance.dequeue();
    expect(priorityQueueInstance.printQueue()).toBe("Name3 ");
  })

  test('pickingItemFromFront', () => {
    priorityQueueInstance.enqueue('Name2', 2);
    priorityQueueInstance.enqueue('Name3', 3);
    expect(priorityQueueInstance.front()).toBe("Name2 ");
  })

  test('customObjectAsType', () => {
    personQueue.enqueue(personInstance, 2);
    expect(personQueue.printQueue()).toBe("Name1 24 ");
  })
})
