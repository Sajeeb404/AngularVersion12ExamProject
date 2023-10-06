import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemployeeformComponent } from './editemployeeform.component';

describe('EditemployeeformComponent', () => {
  let component: EditemployeeformComponent;
  let fixture: ComponentFixture<EditemployeeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditemployeeformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditemployeeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
