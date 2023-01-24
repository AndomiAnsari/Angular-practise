import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularPractise';
  dataChild = 'x';
  updateData(item: string) {
    console.log('🚀 ~ file: app.component.ts:11 ~ AppComponent ~ item', item);
    this.dataChild =item;
  }

  data = 10;

  userDetails = [
    { name: 'andomi', email: 'andomi@gmail.com' },
    { name: 'admin', email: 'admin@gmail.com' },
    { name: 'admin123', email: 'admin123@gmail.com' },
  ];
}
