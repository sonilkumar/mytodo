import { Model, TodoItem } from './model';
import { Component } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: 'app.Component.html',
})
export class AppComponent {
  x = 100;
  model = new Model();
  showRecords: boolean = false;
  totalRecords: number= this.getToDoItems().length;
  showingRecords: number= 0;

  getName() {
    return this.model.user;
  }
  getToDoItems() {
    return this.model.items;
  }
  getFilteredItems() {
    var result = this.model.items.filter((p) => p.done == this.showRecords);
    this.showingRecords = result.length;
    return result;
  }

  addItem(newItem: string) {
    if (newItem != '') {
      this.model.items.push(new TodoItem(newItem, false));
    }
  }
}
