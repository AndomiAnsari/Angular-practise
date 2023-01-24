import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userId: any;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    console.log(
      '🚀 ~ file: user.component.ts:19 ~ UserComponent ~ ngOnInit ~ log',
      this.route.snapshot.paramMap.get('id')
    );
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}
