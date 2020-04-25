class QueueElement<T> {

  private element: T;
  private priority: number;

  constructor(element: T, priority: number) {
    this.element = element;
    this.priority = priority;
  }

  getPriority(): number {
    return this.priority;
  }

  getElement(): T {
    return this.element;
  }

  toString(): string {
    return this.element + ' ';
  }
}

export = QueueElement;
