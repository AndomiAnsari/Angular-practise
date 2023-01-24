import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
users :any;
constructor(private usersData:UserDataService  ){
console.log("🚀 ~ file: app.component.ts:13 ~ AppComponent ~ constructor ~ usersData", usersData.users())
this.users=usersData.users()
}


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
