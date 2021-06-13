import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFilmsessionComponent } from './edit-filmsession.component';

describe('EditFilmsessionComponent', () => {
  let component: EditFilmsessionComponent;
  let fixture: ComponentFixture<EditFilmsessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFilmsessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFilmsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
