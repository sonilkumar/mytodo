export class Model {
  user;
  items;
  constructor() {
    this.user = 'Adam1';
    this.items = [
      new TodoItem('Buy Flowers', false),
      new TodoItem('Get Shoes', true),
      new TodoItem('Collect Tickets', true),
      new TodoItem('Call Joe', false),
      new TodoItem('Sonil', false),
    ];
  }
}
export class TodoItem {
  action;
  done;
  constructor(action: string, done: boolean) {
    this.action = action;
    this.done = done;
  }
}
