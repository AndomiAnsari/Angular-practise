import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pass-data-to-child',
  templateUrl: './pass-data-to-child.component.html',
  styleUrls: ['./pass-data-to-child.component.scss'],
})
export class PassDataToChildComponent {
  @Input() item = 0;

  update() {
    this.item = Math.floor(Math.random() * 10);
  }
}
