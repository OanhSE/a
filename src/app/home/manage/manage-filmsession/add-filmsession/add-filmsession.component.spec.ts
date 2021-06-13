import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilmsessionComponent } from './add-filmsession.component';

describe('AddFilmsessionComponent', () => {
  let component: AddFilmsessionComponent;
  let fixture: ComponentFixture<AddFilmsessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFilmsessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFilmsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
