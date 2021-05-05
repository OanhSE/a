import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFilmsessionComponent } from './manage-filmsession.component';

describe('ManageFilmsessionComponent', () => {
  let component: ManageFilmsessionComponent;
  let fixture: ComponentFixture<ManageFilmsessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageFilmsessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFilmsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
