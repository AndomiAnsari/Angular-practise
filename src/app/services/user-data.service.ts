import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor() {}
  users(){
    return[
      { name: 'andomi',age:"111", email: 'andomi@gmail.com' },
      { name: 'admin',age:"121", email: 'admin@gmail.com' },
      { name: 'admin123',age:"311", email: 'admin123@gmail.com' },
    ]
  }

}
