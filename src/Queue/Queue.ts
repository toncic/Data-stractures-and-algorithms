class Queue<T> {
  private queue: Array<T>;

  constructor() {
    this.queue = new Array();
  }

  isEmpty(): boolean {
    return this.queue.length > 0 ? false : true;
  }

  enqueue(element: T): void {
    this.queue.push(element);
  }

  dequeue(): T | void {
    if (!this.isEmpty()) {
      this.queue.shift();
    } else {
      console.log('No more elements in queue');
    }
  }

  front(): T | void {
    if (!this.isEmpty()) {
      return this.queue[0];
    } else {
      console.log('No more elements in queue');
    }
  }

  printQueue(): string {
    var stringForPriniting: string = '';
    this.queue.map(element => {
      stringForPriniting += element + ' ';
    });
    return stringForPriniting;
  }
}

export = Queue;
