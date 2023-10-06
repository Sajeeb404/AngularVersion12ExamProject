import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemployeeformsComponent } from './editemployeeforms.component';

describe('EditemployeeformsComponent', () => {
  let component: EditemployeeformsComponent;
  let fixture: ComponentFixture<EditemployeeformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditemployeeformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditemployeeformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
