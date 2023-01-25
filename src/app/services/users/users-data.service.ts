import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  url = 'https://dummyjson.com/users';
  addUserApi ='https://dummyjson.com/users/add'
  constructor(private http: HttpClient) {}
  users() {
    return this.http.get(this.url);
  }

  saveUsers(data: any) {
    return this.http.post(this.addUserApi, data);
  }
}
