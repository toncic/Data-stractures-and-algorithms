import QueueElement from './QueueElement';

class PriorityQueue<T> {

  private priorityQueue: Array<QueueElement<T>>;

  constructor() {
    this.priorityQueue = new Array<QueueElement<T>>();
  }

  isEmpty(): boolean {
    return this.priorityQueue.length > 0 ? false : true;
  }

  enqueue(element: T, priority: number): void {
    var queueElement = new QueueElement<T>(element, priority);
    var priorityExist: boolean = false;

    for (var position: number = 0; position < this.priorityQueue.length; position++) {
      if (this.priorityQueue[position].getPriority() > queueElement.getPriority()) {
        this.priorityQueue.splice(position, 0, queueElement);
        priorityExist = true;
        break;
      }
    }

    if (!priorityExist) {
      this.priorityQueue.push(queueElement);
    }
  }

  dequeue(): QueueElement<T> | string {
    if (!this.isEmpty()) {
      return this.priorityQueue.shift();
    }

    return "Queue is empty";
  }

  front (): QueueElement<T> | string {
    return !this.isEmpty() ? this.priorityQueue[0].toString() : "Queue is empty";
  }

  rear(): QueueElement<T> | string {
    if (!this.isEmpty()) {
      return this.priorityQueue[this.priorityQueue.length - 1];
    }
    return "Queue is empty";
  }

  printQueue(): string {
    var stringForPriniting: string = '';
    this.priorityQueue.map((element: QueueElement<T>) => {
      stringForPriniting += element;
    })
    return stringForPriniting;
  }
}

export = PriorityQueue;
