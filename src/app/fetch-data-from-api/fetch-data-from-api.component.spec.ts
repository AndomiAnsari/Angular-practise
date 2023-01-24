import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchDataFromApiComponent } from './fetch-data-from-api.component';

describe('FetchDataFromApiComponent', () => {
  let component: FetchDataFromApiComponent;
  let fixture: ComponentFixture<FetchDataFromApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchDataFromApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchDataFromApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
