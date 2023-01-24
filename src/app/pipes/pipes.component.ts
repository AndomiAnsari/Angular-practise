import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent {
  title = 'title | upercase';
  Dummytitle = 'Dummy title doble pipes';
  lowercase = 'Title | Lowercase';

  capString(item: string) {
    return item.toUpperCase();
  }

  user = {
    name: 'andomi',
  };

  today = Date();
}
