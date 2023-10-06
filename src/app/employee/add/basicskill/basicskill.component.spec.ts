import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicskillComponent } from './basicskill.component';

describe('BasicskillComponent', () => {
  let component: BasicskillComponent;
  let fixture: ComponentFixture<BasicskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicskillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
