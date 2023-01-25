import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserFormDataComponent } from './get-user-form-data.component';

describe('GetUserFormDataComponent', () => {
  let component: GetUserFormDataComponent;
  let fixture: ComponentFixture<GetUserFormDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetUserFormDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetUserFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
