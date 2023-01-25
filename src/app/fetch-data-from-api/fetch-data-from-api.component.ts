import { Component } from '@angular/core';
import { UsersDataService } from '../services/users/users-data.service';

@Component({
  selector: 'app-fetch-data-from-api',
  templateUrl: './fetch-data-from-api.component.html',
  styleUrls: ['./fetch-data-from-api.component.scss'],
})
export class FetchDataFromApiComponent {
  users: any;
  constructor(private usersData: UsersDataService) {
    this.usersData.users().subscribe((data: any) => {
      console.log(data, 'data');
      this.users = data.users;
    });
  }

  getUserFormData(data: any) {
    console.log(
      '🚀 ~ file: get-user-form-data.component.ts:12 ~ GetUserFormDataComponent ~ getUserFormData ~ data',
      data
    );
    this.usersData.saveUsers(data).subscribe((result) => {
      console.log(result, 'result');
    });
  }
}
