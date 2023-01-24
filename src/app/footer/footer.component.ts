import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  users :any;
constructor(private usersData:UserDataService  ){
console.log("🚀 ~ file: app.component.ts:13 ~ AppComponent ~ constructor ~ usersData", usersData.users())
this.users=usersData.users()
}


}
