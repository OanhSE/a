import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultpaymentComponent } from './resultpayment.component';

describe('ResultpaymentComponent', () => {
  let component: ResultpaymentComponent;
  let fixture: ComponentFixture<ResultpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
