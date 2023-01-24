import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {
  list: any[] = [];

  addTask(item: string) {
    // console.log(
    //   '🚀 ~ file: app.component.ts:12 ~ AppComponent ~ addTask ~ item',
    //   item
    // );
    this.list.push({ id: this.list.length, name: item });
    // console.log("🚀 ~ file: app.component.ts:19 ~ AppComponent ~ addTask ~ list", this.list)
  }

  removeTask(id: number) {
    console.log(
      '🚀 ~ file: app.component.ts:24 ~ AppComponent ~ removeTask ~ id',
      id
    );
    this.list = this.list.filter((item) => item.id !== id);
  }


}
